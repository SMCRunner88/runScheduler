var gulp = require('gulp');
var sass = require('gulp-sass');


//Test Function
gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('sass', function(){
  return gulp.src('source-files')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('destination'))
});


//Compiles Less > CSS
var less = require('gulp-less');
var path = require('path');
 
gulp.task('less', function () {
  return gulp.src('.app/bootstrap/less/bootstrap.less')
    .pipe(less()
    .pipe(gulp.dest('.app/bootstrap/dist/css/bootstrap.css'));
});