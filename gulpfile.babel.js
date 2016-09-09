import bsConfig from 'gulp-bootstrap-configurator'
import gulp from 'gulp'

const config = './config.json'
const dir = './build/' + Date.now() + '/'

// For CSS
// It will create `bootstrap.css` in directory `assets`.
gulp.task('css', () => {
  return gulp.src(config)
    .pipe(bsConfig.css({ compress: true }))
    .pipe(gulp.dest(dir))
})

// For JS
// It will create `bootstrap.js` in directory `assets`.
gulp.task('js', () => {
  return gulp.src(config)
    .pipe(bsConfig.js({ compress: true }))
    .pipe(gulp.dest(dir))
})

gulp.task('all', () => {
	gulp.run('css')
	gulp.run('js')
})