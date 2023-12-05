module.exports = {
  // pm2运行的配置文件
  apps: [
    {
      name: 'cvweb',  //项目名字
      exec_mode: 'cluster', //运行模式：cluster为生产模式
      instances: 'max', //功率：全功率运行
      script: './.output/server/index.mjs'  //执行的入口文件(打包后的.output里某文件)
    }
  ]
}