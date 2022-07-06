import fileInclude from "gulp-file-include";
import webpHtmlNoSvg from "gulp-webp-html-nosvg";

export const html = () =>
  app.gulp
    .src(app.path.src.html)
    .pipe(fileInclude())
    .pipe(app.plugins.if(app.isBuild, webpHtmlNoSvg()))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
