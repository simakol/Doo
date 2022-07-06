import gulp from "gulp";

//configs
import { path } from "./src/gulp/config/path.js";
import { plugins } from "./src/gulp/config/plugins.js";

// tasks
import { clean } from "./src/gulp/tasks/clean.js";
import { server } from "./src/gulp/tasks/server.js";
import { html } from "./src/gulp/tasks/html.js";
import { scss } from "./src/gulp/tasks/scss.js";
import { js } from "./src/gulp/tasks/js.js";
import { images } from "./src/gulp/tasks/images.js";
import { fonts } from "./src/gulp/tasks/fonts.js";
import { zip } from "./src/gulp/tasks/zip.js";
import { ftp } from "./src/gulp/tasks/ftp.js";

global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

const watcher = () => {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.styles, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.img, images);
};

const mainTasks = gulp.parallel(html, scss, js, images, fonts);
const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(clean, mainTasks);
const deployZip = gulp.series(clean, mainTasks, zip);
const deployFTP = gulp.series(clean, mainTasks, ftp);

export { dev };
export { build };
export { deployZip };
export { deployFTP };

gulp.task("default", dev);
