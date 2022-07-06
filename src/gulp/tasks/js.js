import webpackStream from "webpack-stream";

export const js = () =>
  app.gulp
    .src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(
      webpackStream({
        mode: app.isBuild ? "production" : "development",
        output: {
          filename: "app.min.js",
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
