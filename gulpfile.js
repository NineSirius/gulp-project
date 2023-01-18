import gulp from "gulp";

import { sass } from "./gulp/tasks/sass.js";

global.app = {
    gulp,
};

const watcher = (cb) => {
    gulp.watch("src/scss/**/*.{sass,scss}", sass);
    cb();
};

const dev = gulp.series(gulp.parallel(sass), watcher);

gulp.task("default", dev);
