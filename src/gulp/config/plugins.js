import browserSync from "browser-sync";
import newer from "gulp-newer";
import ifPlugin from "gulp-if";

export const plugins = {
  browserSync: browserSync,
  newer: newer,
  if: ifPlugin,
};
