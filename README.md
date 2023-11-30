# Nuxt3+vite+pinia+antdV

# nodejs+express

## :date: 2023 年 11 月 28 日 06:54:48 :sleeping:

### 项目方案：

- `PC端`：项目近期规划 1.命名布局+响应式 2.封装 useFetch 3.骨架 4.视频 demo 5. 日/夜 + 中/英
- 移动端：m.cvweb3.com 独立域名重定向方式 `PWA应用`

# 安装

```shell
# yarn
yarn install
#pnpm
pnpm install
```

# 打包生产环境

将你的代码进行打包

```shell
打包构建：yarn build
```

```
访问命令 - 生成的是打包后的本地链接：node .output/server/index.mjs
```

```
docker构建命令：docker build -f cvweb3-nuxt3.build.Dockerfile . -t cvweb3-nuxt3-image
```

```
查看构建后存储的文件位置 命令：pwd
```

# 服务器相关配置 - 常用命令/设置

- sudo find / -type f -name nginx 查找 nginx 所在位置
- export PATH=$PATH:/usr/local/nginx/sbin 设置全局 nginx -V 命令
- nginx 安装位置 usr/local/nginx
- usr/local/nginx 下的 conf 文件修改 ssl 绑定信息
- 重启、启动 nginx：sudo /usr/local/nginx/sbin/nginx -s reload

# tips

```
①npm run dev
②腾讯云redis & navcat
->docker ps
->docker exec -it **dockerid** redis-cli
->pany110
```

# 本机快捷键操作

json 转 interface：
-> crtl + shift + alt + v
-> 输入希望生成的接口名
-> 自动生成 interface
