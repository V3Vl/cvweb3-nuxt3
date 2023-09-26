// 全局模态框

import { defineStore } from "pinia";
export const useModel = defineStore("model", () => {
  // 注册框展示
  const loginModel = reactive({
    base: false, //注册初始页
    finish: false, //注册成功页
  });
  //   注册成功跳转完成页
  const changeToFinish = () => {
    loginModel.base = false;
    loginModel.finish = true;
  };
  return {
    loginModel,
    changeToFinish,
  };
});
