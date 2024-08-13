const gulp = require('gulp');
const pm2 = require('pm2');
const debug = require('gulp-debug');

gulp.task('Admin_PL', () => {
    gulp.src('*')
        .pipe(debug());
    pm2.connect(true, () => {
        pm2.start({
            name: 'Admin_PL',
            script: './src/servers/root',
            watch: ['controllers', 'models'],
            ignore_watch: [],
        }, () => {
            console.log('pm2 started');
        });
    });
});
