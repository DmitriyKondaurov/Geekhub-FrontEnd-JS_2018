var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    browserSync     = require('browser-sync'),
    del             = require('del'),
    imagemin        = require('gulp-imagemin'),
    pngquant        = require('imagemin-pngquant'),
    cache           = require('gulp-cache'),
    autoprefixer    = require('gulp-autoprefixer');

gulp.task('sass',  function() {
    return gulp.src('src/scss/*.+(scss|sass)')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true}))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost/Geekhub-FrontEnd-JS_2018/HW5/src/",
        notify: false
    });
});

gulp.task('clean', function () {
    return del.sync('dist');
});

gulp.task('img', function() {
    return gulp.src('src/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            une: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('build', ['clean', 'img', 'sass'], function () {

    var buildCss = gulp.src('src/css/*.css')
        .pipe(gulp.dest('dist/css'));

    var buildFonts = gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));

    var buildJs = gulp.src('src/js/*.js')
        .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('src/scss/**/*.+(scss|sass)', ['sass']);
    gulp.watch('src/**/*.+(html|css)', browserSync.reload);
});

// Default Task
//////////////////////////////

gulp.task('default', ['build']);
