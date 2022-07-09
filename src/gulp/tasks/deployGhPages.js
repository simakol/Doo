import ghPages from "gulp-gh-pages";

export const deployGhPages = () =>
  app.gulp.src(`${app.path.buildFolder}/**/*.*`).pipe(ghPages());
