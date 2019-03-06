####  **componentLib**
#### **【写在前面】**

+ []为可选参数

----
####  **日志**
[2019-03-06]

+ **新增**：
  + **axios.js**
  + **loading.css**

---



####  **js库**

+ **modalContainer.js**:  以antd的Modal组件作为展示容器，中间可直接放入展示内容（antd版本： 3.7.3）
+ **download.js**: 原生下载功能函数，参数url,[name]；兼容chrome/IE/Firefox
+ **axios.js**: 基于axios.js 0.18.0 二次封装，兼容上传file（该封装中content-type为form-data）

---




#### **css库**
+ **styles-->Font.scss/Margin_padding.scss/PerWidth.scss**: 全局通用样式；usage:  mb-20=margin-bottom:20px;per-30=width:30%;
+ **loading.css**：加载动画；usage： DOM中使用class='loader'