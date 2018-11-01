var gulp            = require('gulp'),
    browserSync     = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://localhost:63342/Geekhub-FrontEnd-JS_2018/HW3/index-ru.html",
        notify: false
    });
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('./**/*.+(html|css)', browserSync.reload);
    // gulp.watch('./HW3/**/*.+(html|css)', browserSync.reload({stream: true}));
});

// Default Task
//////////////////////////////

gulp.task('default', ['watch']);