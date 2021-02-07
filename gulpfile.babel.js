//HTML
import htmlmin from "gulp-htmlmin";

//SASS

import sass from "gulp-sass";

//JS
import gulp from "gulp";
import babel from "gulp-babel";
import terser from "gulp-terser";

//Common
import concat from "gulp-concat";

//CLEAN CSS

// 

//IMAGEMIN
 import imagemin from "gulp-imagemin";

gulp.task("html-min", () => {
  return gulp
    .src("./dev/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      })
    )
    .pipe(gulp.dest("./public"));
});

gulp.task("babel", () => {
  return gulp
    .src("./dev/js/*.js")
    .pipe(concat("scripts-min.js"))
    .pipe(babel())
    .pipe(terser())
    .pipe(gulp.dest("./public/js"));
});

gulp.task("sass", () => {
  return gulp
    .src("./dev/scss/styles.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(gulp.dest("./public/css"));
});

// gulp.task("clean", () => {
//   return gulp
//     .src("./public/css/styles.css")
//     .pipe(
//       clean({
//         content: ["./public/*.html"],
//       })
//     )
//     .pipe(gulp.dest("./public/css"));
// });

 gulp.task("imagemin", () => {
    return gulp
      .src("./dev/assets/*/*")
      .pipe(
        imagemin([
          imagemin.gifsicle({ interlaced: true }),
          imagemin.mozjpeg({ quality: 30, progressive: true }),
          imagemin.optipng({ optimizationLeve: 1 }),
        ]))
      .pipe(gulp.dest("./public/assets"));
  });

gulp.task("default", () => {
  gulp.watch("./dev/js/*.js", gulp.series("babel"));
  gulp.watch("./dev/*.html", gulp.series("html-min"));
  gulp.watch("./dev/scss/**/*.scss", gulp.series("sass"));
});
