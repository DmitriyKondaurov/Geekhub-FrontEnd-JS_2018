var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    concat          = require('gulp-concat'),
    cssnano         = require('gulp-cssnano'),
    rename          = require('gulp-rename'),
    browserSync     = require('browser-sync'),
    autoprefixer    = require('gulp-autoprefixer');

gulp.task('sass',  function() {
    return gulp.src('scss/*.+(scss|sass)')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true}))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost/Geekhub-FrontEnd-JS_2018/HW4/",
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('scss/**/*.+(scss|sass)', ['sass']);
    gulp.watch('./**/*.+(html|css)', browserSync.reload);
});

// Default Task
//////////////////////////////

gulp.task('default', ['watch']);
