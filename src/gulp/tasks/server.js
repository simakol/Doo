export const server = () =>
  app.plugins.browserSync.init({
    server: {
      baseDir: app.path.build.html,
      port: 3000,
    },
  });
