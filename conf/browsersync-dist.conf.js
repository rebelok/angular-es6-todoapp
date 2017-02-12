const conf = require('./gulp.conf');

module.exports = {
  server: {
    baseDir: [
      conf.paths.dist
    ]
  },
  open  : false
};
