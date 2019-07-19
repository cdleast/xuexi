var gulp = require('gulp'),     // 引用gulp
  autoprefixer = require('gulp-autoprefixer'), // 添加引用前缀的gulp插件
  rename = require("gulp-rename");  // 引用重命名的gulp插件

gulp.task('t1', function () {
  gulp.src('./css/**/*.css')    // 设置要处理的原始的文件位置
    .pipe(autoprefixer())
    .pipe(rename({
      suffix: ".min",           // 添加后缀
      extname: ".css"           // 文件扩展名
    }))
    .pipe(gulp.dest('./css-min/')); // 最终文件输出的位置
});
