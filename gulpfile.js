var gulp = require("gulp");
var plugins = require("gulp-load-plugins")();
var source = "./src";
var destination = "./dist";

gulp.task("css", function () {
  return gulp
    .src(source + "/css/*.css")
    .pipe(plugins.csscomb())
    .pipe(plugins.cssbeautify({ indent: " " }))
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest(destination + "/css/"));
});
