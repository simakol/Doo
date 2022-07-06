import gulpSass from "gulp-sass";
import dartSass from "sass";
import autoprefixer from "gulp-autoprefixer";
import concat from "gulp-concat";
import csso from "gulp-csso";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import webpcss from "gulp-webpcss";

const sass = gulpSass(dartSass);

export const scss = () =>
  app.gulp
    .src(app.path.src.styles, { sourcemaps: app.isDev })
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
    .pipe(
      app.plugins.if(
        app.isBuild,
        webpcss({
          webpClass: ".webp",
          noWebpClass: ".no-webp",
        })
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        autoprefixer({
          overrideBrowserslist: ["last 100 versions"],
          cascade: false,
        })
      )
    )
    .pipe(app.plugins.if(app.isBuild, csso()))
    .pipe(concat("style.min.css"))
    .pipe(app.gulp.dest(app.path.build.styles))
    .pipe(app.plugins.browserSync.stream());
