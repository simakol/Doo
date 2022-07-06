import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());

export const path = {
  build: {
    html: "build/",
    styles: "build/styles/",
    js: "build/scripts/",
    img: "build/img/",
    fonts: "build/fonts/",
  },
  src: {
    html: "src/**.html",
    styles: "src/styles/*.scss",
    js: "src/scripts/*.js",
    img: "src/img/**/*.{jpg,jpeg,png,gif,webp,ico}",
    svg: "src/img/**/*.svg",
    fonts: "src/fonts/**/*",
  },
  clean: "./build/",
  watch: {
    html: "src/**/*.html",
    styles: "src/styles/**/*.scss",
    js: "src/scripts/**/*.js",
    img: "src/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}",
  },
  rootFolder: rootFolder,
  buildFolder: "./build",
  ftp: "test",
};
