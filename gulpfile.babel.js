'use strict'

import gulp from 'gulp'
import nodemon from 'gulp-nodemon'
import gulpSequence from 'gulp-sequence'
import chalk from 'chalk'

gulp.task('nodemon', () => {
  return nodemon({
    script: './http.js',
    execMap: {
      js: 'node_modules/babel-cli/bin/babel-node.js'
    },
    ext: 'js html',
    watch: [
        'http.js'
      ]
      // env: {
      //   NODE_ENV: 'development',
      // },
      // tasks: ['lint'],
  })
})

gulp.task('default', function() {
  gulpSequence('nodemon')(function() {
    console.log(chalk.green('gulp default task finished.'))
  })
})
