# Nuxt3+vite+pinia+antdV

# nodejs+express

## :date: 2023 年 11 月 18 日 08:46:37 :sleeping:

`当前微信登录组件有错误（未完善），先研究nuxt3是否有更好的父子组件通讯方式，实现form切换登录方式，子组件监听到切换操作，以停止轮询`

# 安装

```shell
# yarn
yarn install
#pnpm
pnpm install
```

# 本地 api(已独立分离 → 测试 api)

进入 server 文件夹

````shell
nodemon app.js
# 测试api
在cpshop-node
```shell
nodemon app.js

本地接口服务配置在`http://localhost:8081`

```shell
npm run dev
````

# 打包生产环境

将你的代码进行打包

```shell
npm run build
```

# tips

```
①npm run dev
②腾讯云redis & navcat
->docker ps
->docker exec -it **dockerid** redis-cli
->pany110
③node -> nodemon js
```

# 本机快捷键操作

json 转 interface：
-> crtl + shift + alt + v
-> 输入希望生成的接口名
-> 自动生成 interface
