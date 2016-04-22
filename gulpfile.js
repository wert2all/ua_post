var gulp = require('gulp'),
    minify = require('gulp-minify'),
    eslint = require('gulp-eslint');

gulp.task('default', ['lint'], function () {
    // place code for your default task here

});

gulp.task('lint', function () {
    return gulp.src('pub/js/**')
        .pipe(eslint())
        .pipe(eslint.format())
        // Brick on failure to be super strict
        .pipe(eslint.failOnError());
});
