'use strict'

browserSync = require('browser-sync').create()
gulp = require 'gulp'
browserify = require 'browserify' # bundles
reactify = require 'reactify' # React JSX -> JS
source = require 'vinyl-source-stream' # use conventional text streams with gulp
concat = require 'gulp-concat'
lint = require 'gulp-eslint' # Lint JS files, including JSX

config =
  port: 3000
  devBaseUrl: 'http:localhost'
  paths:
    html: './src/*.html'
    js: './src/*.js'
    dist: './dist'
    mainJs: './src/main.js'
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css'
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    ]

gulp.task '1:html', ->
  gulp.src config.paths.html
    .pipe gulp.dest config.paths.dist
    .pipe browserSync.stream()

gulp.task 'connect', ->
  browserSync.init
    server:
      baseDir: './dist'
    reloadDelay: 1500

gulp.task '2:js', ->
  browserify config.paths.mainJs
    .transform reactify
    .bundle()
    .on 'error', console.error.bind(console)
    .pipe source 'bundle.js'
    .pipe gulp.dest config.paths.dist + '/scripts'
    .pipe browserSync.stream()

gulp.task 'css', ->
  gulp.src config.paths.css
    .pipe concat 'bundle.css'
    .pipe gulp.dest config.paths.dist + '/css'

gulp.task 'lint', ->
  gulp.src config.paths.js
    .pipe lint config: 'eslint.config.json'
    .pipe lint.format()

gulp.task '3:watch', ->
  gulp.watch config.paths.html, ['1:html']
  gulp.watch config.paths.js, ['2:js', 'lint']

gulp.task 'default', ['1:html', '2:js', 'css', 'lint', 'connect', '3:watch']
