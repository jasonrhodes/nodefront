var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var sass = require("gulp-ruby-sass");
var jshint = require("gulp-jshint");
var stylish = require("jshint-stylish");
var csslint = require("gulp-csslint");


gulp.task("default", function () {

  console.log("gulp gulp gulp");

});

gulp.task("jshint", function () {

  gulp.src(["./src/js/**/*.js"])
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"));

});

gulp.task("compile:js", ["jshint"], function () {

  var bundle = browserify("./src/js/main.js").bundle();

  return bundle
    .pipe(source("main.js"))
    .pipe(gulp.dest("./public/assets/js"));

});


gulp.task("compile:css", function () {

  return gulp.src(["./src/scss/*.scss"])
    .pipe(sass())
    .pipe(csslint())
    .pipe(csslint.reporter())
    .pipe(gulp.dest("./public/assets/css"));

});


gulp.task("watch", ["compile:js", "compile:css"], function () {

  gulp.watch(["./src/js/**/*.js"], ["compile:js"]);
  gulp.watch(["./src/scss/**/*.scss"], ["compile:css"]);

});