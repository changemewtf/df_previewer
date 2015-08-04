var gulp = require('gulp');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');

var config = {
  sass: {
    src: 'client/sass/**/*.sass',
    dest: 'static/css/'
  },
  coffee: {
    src: 'client/coffee/**/*.coffee',
    dest: 'static/javascript/',
    options: {}
  }
};

function basicErrorReporter(error) {
  console.log('Error: ', error)
}

function createBuildTask(opt, builder) {
  gulp.src(opt.src)
    .pipe(builder())
    .on('error', basicErrorReporter)
    .pipe(gulp.dest(opt.dest));
}

function taskWatch() {
  gulp.watch(config.coffee.src, ['coffee'] );
  gulp.watch(config.sass.src, ['sass']);
}

gulp.task('sass', createBuildTask(config.sass, sass));
gulp.task('coffee', createBuildTask(config.coffee, coffee));
gulp.task('watch', taskWatch);
gulp.task('default', ['sass', 'coffee', 'watch']);
