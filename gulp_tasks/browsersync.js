const gulp        = require('gulp');
const browserSync = require('browser-sync');
const spa         = require('browser-sync-spa');

browserSync.use(spa());

gulp.task('browsersync', browserSyncServe);
gulp.task('browsersync:dist', browserSyncDist);

function browserSyncServe(done) {
  const config = require('../conf/browsersync.conf');
  browserSync.init(config);
  done();
}

function browserSyncDist(done) {
  const config = require('../conf/browsersync-dist.conf');
  browserSync.init(config);
  done();
}
