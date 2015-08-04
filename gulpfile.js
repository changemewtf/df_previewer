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

function taskWatch() {
  gulp.watch(config.coffee.src, ['coffee']);
  gulp.watch(config.sass.src, ['sass']);
}

gulp.task('sass', function() {
  gulp.src(config.sass.src)
    .pipe(sass())
    .on('error', basicErrorReporter)
    .pipe(gulp.dest(config.sass.dest));
});

gulp.task('coffee', function() {
  gulp.src(config.coffee.src)
    .pipe(coffee())
    .on('error', basicErrorReporter)
    .pipe(gulp.dest(config.coffee.dest));
});

gulp.task('watch', taskWatch);
gulp.task('default', ['sass', 'coffee', 'watch']);
