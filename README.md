# Nuxt3 + Vite + Pinia + Naive UI

## :date: 2023 年 12 月 2 日 08:17:51 :sleeping:

### 项目方案：

- PC 端：
- [] 1.命名布局+响应式
- [x] 2.封装 useFetch
- [] 3.骨架
- [] 4.视频 demo
- [] 5. 日/夜模式 + 中/英
- 移动端：
- [] m.cvweb3.com
- [] 独立域名重定向方式 `PWA应用`
- 部署：
  - [x] 手动部署
  - [] DevOps（有点难，暂时放着）

# 安装

```shell
# yarn
yarn install
#pnpm
pnpm install
```

## 打包构建

将你的代码进行打包

```shell
build：yarn build
```

```
访问命令 - 生成的是打包后的本地链接：node .output/server/index.mjs
```

## docker 相关

```
docker构建命令：docker build -f cvweb3-nuxt3.build.Dockerfile . -t cvweb3-nuxt3-image
```

```
查看构建后存储的文件位置 命令：pwd
```

## nginx 相关

- sudo find / -type f -name nginx 查找 nginx 所在位置
- export PATH=$PATH:/usr/local/nginx/sbin 设置全局 nginx -V 命令
- 检查 nginx.conf 配置是否正确：`sudo /usr/local/nginx/sbin/nginx -t`
- 重启 nginx：`sudo /usr/local/nginx/sbin/nginx -s reload`
- nginx 位置： usr/local/nginx

## 其他

`` github 提交 取消代理 git config --global --unset http.proxy

# tips

```
①npm run dev
②腾讯云redis & navcat
->docker ps
->docker exec -it **docker id** redis-cli
->pany110
```

# 本机快捷键操作

json 转 interface：
-> crtl + shift + alt + v
-> 输入希望生成的接口名
-> 自动生成 interface
