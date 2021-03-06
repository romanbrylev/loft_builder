'use strict';

module.exports = function () {
    $.gulp.task('pug', function () {
        return $.gulp.src('./source/template/*.pug')
            .pipe($.gp.pug({ pretty: true }))
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'pug',
                    messages: error.messages
                }
            }))
            .pipe($.gulp.dest('./build'));
    });
};