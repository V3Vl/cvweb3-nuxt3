<script lang="ts" setup>
import { useMessage, useDialog } from 'naive-ui'
const { clientType } = $(useClient())
const message = useMessage()
const dialog = useDialog()
import { getCategory } from '~/api/category'

interface IRankCotentPC {
  src: string
  altContent: string
  gmt_modified: string
  fallbackSrc?: string
  jumpToUrl?: string
}

interface IMenuListTtype {
  id: number
  title: string
  rankMenuContentPC?: Array<IMenuContentType>
}
interface IMenuContentType {
  eId: string
  title: string
  img: string
}
const toolList = ref<Array<any>>([])
const rankListPC = ref<Array<IRankCotentPC>>([])
const tapRankListMenuPC = ref<any>([])
const rankListH5 = ref<Array<any>>([])
const rankMenuPC = ref<any>()
const gmt_modified = ref<string>('huwai')

rankListPC.value = [
  { src: '', gmt_modified: 'huwai', jumpToUrl: '/rank/SchoolRank', altContent: '运动 / 户外' },
  { src: '', gmt_modified: 'dianzi', jumpToUrl: '/rank/ShopRank', altContent: '电子 / 音像' },
  { src: '', gmt_modified: 'game', jumpToUrl: '/rank/CarRank', altContent: '游戏 / 娱乐' },
  { src: '', gmt_modified: 'home', jumpToUrl: '/rank/ShopRank', altContent: '软装 / 家电' },
  { src: '', gmt_modified: 'building', jumpToUrl: '/rank/CarRank', altContent: '硬装 / 建材' },
  { src: '', gmt_modified: 'learn', jumpToUrl: '/rank/HumanRank', altContent: '网课 / 书籍' },
  { src: '', gmt_modified: 'car', jumpToUrl: '/rank/CanteenRank', altContent: '选车 / 出行' },
  { src: '', gmt_modified: 'clot', jumpToUrl: '/rank/CanteenRank', altContent: '鞋服 / 饰品' },
  { src: '', gmt_modified: 'city', jumpToUrl: '/rank/PowerRank', altContent: '城市 / 教育' },
  { src: '', gmt_modified: 'travel', jumpToUrl: '/rank/TravelRank', altContent: '旅游 / 景点' }
]
rankListH5.value = [
  { src: '', id: 'goods', altContent: '商品' },
  { src: '', id: 'category', altContent: '分类' },
  { src: '', id: 'game', altContent: '游戏' },
  { src: '', id: 'city', altContent: '教育' },
  { src: '', id: 'mans', altContent: '名人' },
  { src: '', id: 'travel', altContent: '旅游' },
  { src: '', id: 'learn', altContent: '书籍' },
  { src: '', id: 'car', altContent: '选车' }
]
toolList.value = [
  { src: '', jumpToUrl: '/tooler/Fitmentdiy', altContent: '装修预算清单' }
  // { src: '', jumpToUrl: '/tooler/PCdiy', altContent: '自助电脑配置清单' },
  // { src: '', jumpToUrl: '', altContent: '旅游规划路书' },
  // { src: '', jumpToUrl: '', altContent: '心愿清单' }
]
// 记录已经获取过数据的list 避免重复获取
const tapedList = ref<any>({})
rankMenuPC.value = []
const initCategoryData = async () => {
  const res = await getCategory(gmt_modified.value)
  rankMenuPC.value.push(res.data)
  tapedList.value[gmt_modified.value] = true
  // 默认显示[0]菜单
  tapRankListMenuPC.value = rankMenuPC.value[0]
}
await initCategoryData()
const tapMenu = async (_gmt_modified: string) => {
  let currGmt = 0
  // 待优化 不需要双循环 给事件多传一个index
  rankMenuPC.value.map((item: any, index: number) => {
    item.map((itemed: any, indexed: number) => {
      if (_gmt_modified == itemed.gmt_modified) {
        currGmt = index
        return
      }
    })
  })
  // currGmt = rankMenuPC.value.findIndex((item: any) => {
  //   console.log('item>>>', _gmt_modified)
  //   item.some((itemed: any) => {
  //     console.log('itemed>>>', itemed.gmt_modified)

  //     _gmt_modified == itemed.gmt_modified
  //   })
  // })
  // console.log(currGmt)

  // if (currGmt === -1) return // 如果没找到对应的gmt_modified则直接返回
  tapRankListMenuPC.value = rankMenuPC.value[currGmt]
  // 用tapedList检测是否获取过数据 没获取过数据的才发起请求
  if (tapedList.value[_gmt_modified]) return
  tapedList.value[_gmt_modified] = true
  const res = await getCategory(_gmt_modified)
  rankMenuPC.value.push(res.data)
}
const clickMenu = (item: any) => {}

const handleContent = (menuItem: any) => {
  console.log(menuItem)

  // 有内容的页面不提示 - 数据库
  dialog.warning({
    title: `${menuItem.title ? menuItem.title : ''} 暂无内容`,
    // content: '确定前往空白页？',
    positiveText: '确定',
    // negativeText: '取消',
    onPositiveClick: () => {
      // message.success('确定')
    },
    onNegativeClick: () => {
      // message.error('取消')
    }
  })
}
</script>
<template>
  <div class="box">
    <div class="box-l">
      <h2 fsem-1.5 text-center>购前指南，专业排行！</h2>
      <div class="box-l-pc">
        <ul class="pc-menu">
          <li v-for="(item, index) in rankListPC" :key="index">
            <NuxtLink
              class="rank-button"
              :to="{ path: `/rank/${item.gmt_modified}`, params: { content: item.altContent } }"
              @mouseover="tapMenu(item.gmt_modified)"
              @click="clickMenu(item.gmt_modified)"
              target="_blank"
            >
              <!-- <img src="@/assets/img/logo_cat.png" alt="" srcset="" /> -->
              <span>{{ item.altContent }}</span>
            </NuxtLink>
          </li>
        </ul>
        <div class="menu-list-box">
          <div class="pc-content" v-for="(item, idx) in tapRankListMenuPC" :key="idx">
            <div wfull>
              <h4>{{ item.title }}</h4>
              <n-button
                quaternary
                h-8
                style="padding: 0.5rem"
                fspx-14
                v-for="(menuItem, idx) in item.PCRankMenuContents"
                @click="handleContent(menuItem)"
                :key="idx"
              >
                {{ menuItem.title }}
              </n-button>
              <n-text depth="3" v-if="item.PCRankMenuContents?.length === 0"> 暂无内容 </n-text>
              <n-button
                v-if="item.PCRankMenuContents?.length > 6"
                ml-2
                type="info"
                size="tiny"
                dashed
              >
                查看更多...
              </n-button>
            </div>
          </div>
        </div>
      </div>
      <div class="box-l-h5">
        <div wfull flexb flex-wrap>
          <NuxtLink
            class="rank-button"
            v-for="(item, index) in rankListH5"
            :to="{ path: `/rank/h5-${item.id}`, query: { content: item.altContent } }"
            :key="index"
            target="_blank"
          >
            <div class="rank-button-txt">
              {{ item.altContent }}
              <p>{{ index !== 1 ? '排行榜' : '汇总' }}</p>
            </div>
            <!-- <img src="@/assets/img/logo_cat.png" alt="" srcset="" /> -->
          </NuxtLink>
        </div>
      </div>
      <div mt-2 mb-2 class="tool-box" flex flex-wrap>
        <NuxtLink class="tool-button" text-center v-for="(item, index) in toolList" :key="index">
          <n-button @click="handleContent(item)" strong secondary type="success">
            <p fspx-15 m-0>{{ item.altContent }}</p>
          </n-button>
        </NuxtLink>
      </div>
    </div>
    <div class="box-r map-box">
      <ClientOnly>
        <TopMap></TopMap>
      </ClientOnly>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  overflow: hidden; /* 隐藏超出容器范围的部分，保证图片不会溢出容器 */
  display: flex;
  justify-content: space-between;
  padding: 1px 4px;
  @media screen and (min-width: 600px) {
    min-height: 70vh;
    max-height: 1000px;
  }
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
  .box-l {
    height: 99%;
    @media screen and (min-width: 600px) {
      /* PC版样式 */
      width: 36%;
      min-width: 568px;
      .box-l-pc {
        display: flex;
        height: 65vh;
        .pc-menu {
          min-width: 9em;
          background-color: rgb(0, 217, 255);
          a {
            display: flex;
          }
          .rank-button {
            cursor: pointer;
            align-items: center;
            height: 3rem;
            img {
              margin: 0 0.2rem;
              height: 2rem;
              width: 2rem;
            }
            span {
              text-align: right;
            }
          }
          .rank-button:hover {
            background-color: aqua;
          }
        }
        .menu-list-box {
          display: flex;
          flex-wrap: wrap;
          overflow-y: scroll;
          overflow-x: hidden;
          width: 100%;
          padding-left: 4px;
          .pc-content {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            border-radius: 6px;
            margin: 2px 0;
            padding: 4px 2px 6px 6px;
            background-color: aliceblue;
            h4 {
              height: 2em;
              line-height: 2em;
            }
          }
        }
      }
      .box-l-h5 {
        display: none;
      }
    }
    @media screen and (max-width: 600px) {
      /* 移动端样式 */
      width: 100%;
      // padding: 0 2px;
      .box-l-pc {
        display: none;
      }
      .box-l-h5 {
        flex-wrap: wrap;
        position: relative;
        margin: auto;
        align-items: center;
        text-align: center;
        max-width: 1000px;
        padding: 0 3px;
        .rank-button {
          position: relative;
          margin: 0.2rem 0;
          border-radius: 0.5rem;
          width: 32%;
          height: 4rem;
          background-color: aqua;
        }
        .rank-button-txt {
          position: absolute;
          left: 4px;
        }
        img {
          position: absolute;
          right: 4px;
          bottom: 50%;
          transform: translate(0, 50%);
          width: 48%;
          height: 70%;
        }
        .rank-button:nth-child(1) {
          width: 65.7%;
          height: 8.4rem;
        }
        .rank-button:nth-child(2) {
          height: 8.4rem;
        }
      }
    }
    .tool-box {
      height: 10%;
      align-items: center;
      padding: 2px 4px;
      .tool-button {
        padding: 0 0.4rem;
        // width: 6.5rem;
        height: 2.5rem;
        line-height: 2.5rem;
        border-radius: 0.6rem;
        font-weight: 700;
        // background-color: #1b1854;
        color: #fff;
      }
      @media screen and (max-width: 414px) {
        .tool-button:nth-last-child(1) {
          margin-top: 0.5em;
        }
      }
    }
  }

  .box-r {
    background-color: #e9e9e9;
    min-width: 350px;
    height: 100%; /* 让高度自适应，以保持原始比例 */
  }

  .map-box {
    @media screen and (min-width: 600px) {
      width: 63%;
      min-height: 70vh;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    border-radius: 10px;
  }
}
</style>
