// 获取 gulp
// var gulp = require('gulp')
// const {gulp ,series,parallel} = require('gulp')

// // 获取 uglify 模块（用于压缩 JS）
// var uglify = require('gulp-uglify')
// const babel = require("gulp-babel")
// var rename = require('gulp-rename')
// var concat = require('gulp-concat')
// // const runSequence = require("run-sequence")

// var clean = require("gulp-clean")
// gulp.task('default', () => {
//   console.log('default执行完毕!')

//   // 先执行 clean ，再执行压缩js，css，html等任务
//   series('clean', ['minjs'])
// })

// 先执行 clean ，再执行压缩js，css，html等任务
// exports.default = series ('clean', ['minjs'])
	// console.log('default执行完毕!')
	
	// exports.default = function minjs() {
	// 	return src('src/*.js')
	// 		.pipe(babel())
	// 		// .pipe(src('vendor/*.js'))
	// 		// .pipe(dest('output/'))
	// 		.pipe(uglify())
	// 		.pipe(rename({ extname: '.min.js' }))
	// 		.pipe(dest('output/'));
	// }


// 压缩 js 文件
// 在命令行使用 gulp minjs 启动此任务
// gulp.task('minjs', function () {
// 	// 找到文件
// 	gulp.src('src/*.js')
// 		// 合并所有js到一个js文件
// 		.pipe(concat('app.js'))
// 		// 给文件添加.min后缀
// 		.pipe(rename({ suffix: '.min' }))
// 		// 压缩文件
// 		.pipe(uglify())
// 		// 另存压缩后的文件
// 		.pipe(gulp.dest('dist'))
// })

// 上面已经废弃
// __________________________________________________

// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
// }
 
// exports.default = defaultTask // 一定要记得exports.default，不然程序运行报错


const { series,src,dest,parallel } = require('gulp');
// // 获取 uglify 模块（用于压缩 JS）
var uglify = require('gulp-uglify')
const babel = require("gulp-babel")
var rename = require('gulp-rename')
var concat = require('gulp-concat') 

const del = require('del');
const CSS = require('gulp-clean-css');

const _del= (cb)=>{
    del.sync(['dist/']);
    cb();
}
 
const _defaults = series((cb)=>{
	src(['src/*.js'])
		// .pipe(concat('app.js'))
		// .pipe(rename({ suffix: '.min' }))
		// .pipe(babel({ presets: ["@babel/env"] }))
		.pipe(uglify())
    .pipe(dest('dist/'));
    cb();
})

const _CSS= (cb)=>{
	src('src/*.css')
    .pipe(CSS({compatibility: 'ie8'}))
    .pipe(dest('dist/'));
	cb();
}

 
exports.default = parallel(_del,_defaults,_CSS)

