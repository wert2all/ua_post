var gulp = require('gulp'),
    del = require('del'),
    config = {
        js: ["pub/js/*.js", "pub/js/badge/*.js"],
        release: {
            folder: 'dist',
            file: "all.js"
        }
    };

gulp.task('default', ['clean', 'lint', 'compress'], function () {
    // place code for your default task here

});

gulp.task('lint', function () {
    var eslint = require('gulp-eslint');
    return gulp.src(config.js)
        .pipe(eslint())
        .pipe(eslint.format())
        // Brick on failure to be super strict
        .pipe(eslint.failOnError());
});


gulp.task('compress', function () {
    return gulp.src(config.js)
        .pipe(require('gulp-concat')(config.release.file))
        .pipe(require('gulp-minify')())
        .pipe(gulp.dest(config.release.folder))
});


gulp.task("clean", function () {
    return del([config.release.folder]);
});
