"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
/*POSTCSS делает автопрефиксы*/
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
/* Запускает сервер */
var server = require("browser-sync").create();
/* Минификация CSS */
var cleanCSS = require('gulp-clean-css');
/* Переименовывает файл */
var rename = require("gulp-rename");

gulp.task("less", function () {
    return gulp.src("sourse/less/style.less")
        .pipe(less())
        .pipe(postcss([
            autoprefixer({browsers: [
              "last 2 versions"
            ]}),
          ]))
        .pipe(gulp.dest("build/css/"))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("build/css"))
        .pipe(server.stream());
  });

  gulp.task("server", function () {
    server.init({
      server: ".",
      notify: false,
      open: true,
      cors: true,
      ui: false
    });

    gulp.watch("sourse/less/**/*.less", gulp.series("less"));
    gulp.watch("*.html").on("change", server.reload);
  });


  gulp.task("start", gulp.series("less", "server"));

