# gulp-demo

#### 介绍
使用gulp压缩js的示例项目

#### 安装与使用教程

1.  安装nodejs环境,记得勾上npm工具
2.  安装gulp,(`npm install gulp`)
3.  安装gulp相关的插件,例如安装 gulp-uglify,使用命令 `npm install gulp-uglify`
4.  插件安装完成后,在 `gulpfile.js` 的目录下,执行命令 `gulp minjs`, 其中 `gulp` 是主命令, `minjs` 是在 `gulpfile.js` 里写的任务名
5.  `src` 目录是未处理的js, 处理完成的js会到 `dist` 目录下(可以在 `gulpfile.js` 里更改这个配置)
