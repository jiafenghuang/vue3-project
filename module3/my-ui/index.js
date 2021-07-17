import Select from './MySelect/index.vue';
const MyUI = {};
/*
全局注册
对应
  //main.js
  app.use(MyUI);
*/
MyUI.install = function (Vue, opt) {
	Vue.component(Select.name, Select);
};
// export default MyUI;

const MySelect = {};
MySelect.install = Vue => Vue.component(Select.name, Select);
export { MySelect };
