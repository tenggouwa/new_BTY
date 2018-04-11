# 新版比特元官网首页
bityuan.com

# author:tenggouwa

> yd_bty

  
########### 环境依赖  
"node": ">= 4.0.0",
"npm": ">= 3.0.0"

   
# install dependencies
npm install	//安装依赖

# serve with hot reload at localhost:8080	//运行
npm run dev

# build for production with minification.  //打包
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
  
  
########## 项目目录
|-- build                            // 项目构建(webpack)相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查node、npm等版本
|   |-- dev-client.js                // 热重载相关
|   |-- dev-server.js                // 构建本地服务器
|   |-- utils.js                     // 构建工具相关
|   |-- webpack.base.conf.js         // webpack基础配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置
|   |-- webpack.prod.conf.js         // webpack生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量
|   |-- prod.env.js                  // 生产环境变量
|   |-- test.env.js                  // 测试环境变量
|-- src                              // 源码目录
|   |-- assets                         // vue公共样式，img及js
|   |   |-- css                      
|   |   |-- img                      
|   |   |-- js                     
|   |-- components                     // vue公共组件
|   |-- config                         // 接口地址管理
|   |   |-- api-config.js          
|   |-- router                         // 页面路由管理
|   |   |-- index.js                      // 路由管理
|   |-- views                          // 子页面
|   |-- App.vue                        // 页面入口文件
|   |-- main.js                        // 程序入口文件，加载各种公共组件
|-- static                           // 静态文件，无需被打包
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .gitignore                       // git上传需要忽略的文件格式
|-- README.md                        // 项目说明
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息

  
###########V1.0.0 版本内容更新  
2018/01/18.   修改in out 图标     上测试版本

