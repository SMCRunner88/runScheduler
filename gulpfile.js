var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch()
});

// Live reload anytime a file changes
gulp.task("watch", ["browserSync",], function() {
  gulp.watch("/css/*.css", ["css"]);
  gulp.watch("dist/*.html").on("change", browserSync.reload);
});