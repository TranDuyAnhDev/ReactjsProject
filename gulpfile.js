const gulp = require('gulp');
const pm2 = require('pm2');
const debug = require('gulp-debug');

gulp.task('ADMIN_PL', () => {
    gulp.src('*')
        .pipe(debug());
    pm2.connect(true, () => {
        pm2.start({
            name: 'ADMIN_PL',
            script: './src/servers/root.js',
            watch: ['controllers', 'models'],
            ignore_watch: [],
        }, () => {
            console.log('pm2 started');
        });
    });
});
