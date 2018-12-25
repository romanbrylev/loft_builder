'use strict';

module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('./source/style/app.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError({
                title: 'style'
            }))

            .pipe($.gp.autoprefixer({
                browsers: [
                    'last 3 version',
                    '> 1%'
                ]
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('./build/assets/css'))
            .pipe($.browserSync.stream());
    });


}