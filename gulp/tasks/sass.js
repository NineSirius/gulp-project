import dartSass from "sass";
import gulpSass from "gulp-sass";
const sassCompiler = gulpSass(dartSass);

export const sass = () => {
    return app.gulp
        .src("./src/scss/**/*.{scss, sass}")
        .pipe(sassCompiler())
        .pipe(app.gulp.dest("./dist/css"));
};
