const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

// 1. Função para copiar o HTML (O que estava faltando!)
function copyHtml() {
    return gulp.src('./*.html') // Ajuste o caminho se o seu HTML estiver dentro de /src
        .pipe(gulp.dest('./dist'));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function copyHtml() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
}

// 2. Adicione o copyHtml no export default
exports.default = gulp.parallel(styles, images, copyHtml);

exports.imagemin = images;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./*.html', gulp.parallel(copyHtml)); // Opcional: vigiar mudanças no HTML
}