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
    html: './src/**/*.html'
    js: './src/**/*.js'
    images: './src/images/*'
    dist: './dist'
    mainJs: './src/main.js'
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css'
      'src/assets/stylesheets/*.css'
    ]

gulp.task '1:html', ->
  gulp.src config.paths.html
    .pipe gulp.dest config.paths.dist
    .pipe browserSync.stream()

gulp.task '2:js', ->
  browserify config.paths.mainJs
    .transform reactify
    .bundle()
    .on 'error', console.error.bind(console)
    .pipe source 'bundle.js'
    .pipe gulp.dest config.paths.dist + '/scripts'
    .pipe browserSync.stream()

gulp.task '3:css', ->
  gulp.src config.paths.css
    .pipe concat 'bundle.css'
    .pipe gulp.dest config.paths.dist + '/css'
    .pipe browserSync.stream()

gulp.task '3.5:images', ->
  gulp.src config.paths.images
    .pipe gulp.dest config.paths.dist + '/images'
    .pipe browserSync.stream()

gulp.task '4:lint', ->
  gulp.src config.paths.js
    .pipe lint config: 'eslint.config.json'
    .pipe lint.format()

gulp.task '5:connect', -> 
  browserSync.init
    server:
      baseDir: './dist'
    reloadDelay: 1500

gulp.task '6:watch', ->
  gulp.watch config.paths.html, ['1:html']
  gulp.watch config.paths.js, ['2:js', '4:lint']
  gulp.watch config.paths.css, ['3:css']

gulp.task 'default', ['1:html', '2:js', '3:css', '3.5:images', '4:lint', '5:connect', '6:watch']
