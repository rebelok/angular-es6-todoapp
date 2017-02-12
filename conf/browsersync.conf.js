const conf = require('./gulp.conf');

module.exports = {
  server: {
    baseDir: [
      conf.paths.tmp,
      conf.paths.src
    ]
  },
  open  : false
};

