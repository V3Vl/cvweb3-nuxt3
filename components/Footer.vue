<template>
  <div class="footer">
    <div class="footer-line"></div>
    <ul wfull flexb flex-wrap>
      <li><a href="https://nuxt.com.cn/" target="_blank">友情链接1</a></li>
      <li><a href="https://nuxt.com.cn/" target="_blank">友情链接2</a></li>
      <li><a href="https://nuxt.com.cn/" target="_blank">友情链接3</a></li>
      <li><a href="https://nuxt.com.cn/" target="_blank">友情链接4</a></li>
      <li><a href="https://nuxt.com.cn/" target="_blank">友情链接5</a></li>
    </ul>
    <div class="copyright" flexb>
      <p>
        Copyright &nbsp;© &nbsp;2023&nbsp;我没有公司,&nbsp;&nbsp;lnc.&nbsp;&nbsp;版权所有<a
          href="https://www.beian.gov.cn/"
        >
          &nbsp;桂ICP备12345678号&nbsp;
        </a>
        Terms
      </p>
      <div>其他footer内容1</div>
      <div>其他footer内容2</div>
      <div>language: CN</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  // 待优化 隐藏页面滚动条后 取消绝对定位
  width: 80%;
  margin: auto auto 0 auto;
  .footer-line {
    height: 10px;
    border-radius: 0.2rem;
    border-top: #dfe1e5 1px solid;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  ul > li {
    min-width: 50px;
    list-style: none;
  }
  ul > li > a {
    color: #59a0ce;
  }
  ul > li > a:hover {
    color: #053bd1;
  }

  .copyright {
    height: 50px;
    width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    font-size: 12px;
    color: #7f7f7f;

    a {
      color: #7f7f7f;

      &:hover {
        color: #f38e48;
      }
    }
  }
}
</style>
