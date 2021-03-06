var gulp = require('gulp');
var changed = require('gulp-changed');
var browserSync = require('browser-sync');
var config = require('../../config').images;

/*
  拷贝变化的图片到构建目录下
*/
gulp.task('images', function() {
  browserSync.notify('处理图片资源');

  return gulp.src(config.src)
    .pipe(changed(config.dest))  // 忽略未变化的文件
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.stream());
});
