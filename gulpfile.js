const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// ----------------------------------------------------------------------------------------------- //

function compSass() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function comprimeJS() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function comprimeIMG() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

// ----------------------------------------------------------------------------------------------- //

exports.default = function () {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJS));
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeIMG));
}