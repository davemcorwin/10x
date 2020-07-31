// var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
// var del = require("del");
// var gulp = require("gulp");
// var gzip = require("gulp-gzip");
// var movecss = require("css-mqpacker");
// var path = require("path");
// var postcss = require("gulp-postcss");
var rename = require("gulp-rename");
// var sass = require("gulp-sass");
var size = require("gulp-size");
var uncss = require("postcss-uncss");
// var watch = require("gulp-watch");

// // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// // SETTINGS

// // Should we build a font file separate from the main css?
// const CONCAT_FONTS = false;

// // What modules should be in the final app build?
// // Comment out unneeded modules
// const USWDS_APP = [
//   "build-utilities",
//   //  "build-uswds",
//   "build-custom",
// ];

// // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// // LOCATIONS

// // All locations are relative to the project root
// // Don't use a trailing `/` for path names, use `path/to/dir`

// // USWDS source directory
// const USWDS_SRC = "node_modules/uswds";

// // Project Sass source directory
// const PROJECT_SASS_SRC = "_sass";

// // Asset destination
// const ASSETS_DEST = "assets/uswds";

// // CSS destination
// const CSS_DEST = "assets/css";

// // Build destination
// const BUILD_DEST = "_develop";

// // Include destination
// const INC_DEST = "_includes";

// // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// // BUILD USWDS STYLES

// gulp.task("copy-assets", () => {
//   return gulp
//     .src(`${USWDS_SRC}/@(js|fonts|img)/**/**`)
//     .pipe(gulp.dest(`${ASSETS_DEST}`));
// });

// gulp.task("clean-css", function () {
//   return del([`${CSS_DEST}/**/*`]);
// });

// gulp.task("build-sass", function (done) {
//   var plugins = [
//     autoprefixer({ browsers: ["> 3%", "Last 2 versions"], cascade: false }),
//     movecss({ sort: true }),
//     cssnano(),
//   ];
//   return gulp
//     .src([`${PROJECT_SASS_SRC}/*.scss`])
//     .pipe(
//       sass({
//         includePaths: ["node_modules", PROJECT_SASS_SRC],
//       })
//     )
//     .pipe(postcss(plugins))
//     .pipe(rename({ suffix: ".min" }))
//     .pipe(gulp.dest(`${CSS_DEST}`));
// });

// gulp.task("build-app", function () {
//   var plugins = [
//     uncss({
//       html: [`${BUILD_DEST}/**/*.html`],
//       ignore: [/\[aria-/, /is-visible/],
//     }),
//     cssnano(),
//   ];
//   return gulp
//     .src(`${CSS_DEST}/10x.min.css`)
//     .pipe(postcss(plugins))
//     .pipe(rename("10x.app.min.css"))
//     .pipe(gulp.dest(`${INC_DEST}`))
//     .pipe(size());
// });

// // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// gulp.task("watch", gulp.series("clean-css", "build-sass"), function () {
//   gulp.watch(
//     `${PROJECT_SASS_SRC}/*.scss`,
//     gulp.series("clean-css", "build-sass")
//   );
//   gulp.watch(
//     `${USWDS_SRC}/stylesheets/*.scss`,
//     gulp.series("clean-css", "build-sass")
//   );
// });

// // - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// // Set watch as default task
// gulp.task("default", gulp.series("watch", "copy-uswds-assets"));

const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const gulp = require("gulp");
const pkg = require("./node_modules/uswds/package.json");
const postcss = require("gulp-postcss");
const replace = require("gulp-replace");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

const uswds = "./node_modules/uswds/dist";

sass.compiler = require("sass");

/*
----------------------------------------
PATHS
----------------------------------------
- All paths are relative to the
  project root
- Don't use a trailing `/` for path
  names
----------------------------------------
*/

// Build destination
const BUILD_DEST = "_develop";

// Project Sass source directory
const PROJECT_SASS_SRC = "./_sass";

// Images destination
const IMG_DEST = "./assets/img";

// Fonts destination
const FONTS_DEST = "./assets/uswds/fonts";

// Javascript destination
const JS_DEST = "./assets/js";

// Compiled CSS destination
const CSS_DEST = "./assets/css";

// Site CSS destination
// Like the _site/assets/css directory in Jekyll, if necessary.
// If using, uncomment line 106
const SITE_CSS_DEST = "./assets/css";

// Include destination
const INC_DEST = "_includes";

/*
----------------------------------------
TASKS
----------------------------------------
*/

gulp.task("copy-uswds-setup", () => {
  return gulp
    .src(`${uswds}/scss/theme/**/**`)
    .pipe(gulp.dest(`${PROJECT_SASS_SRC}`));
});

gulp.task("copy-uswds-fonts", () => {
  return gulp.src(`${uswds}/fonts/**/**`).pipe(gulp.dest(`${FONTS_DEST}`));
});

gulp.task("copy-uswds-images", () => {
  return gulp.src(`${uswds}/img/**/**`).pipe(gulp.dest(`${IMG_DEST}`));
});

gulp.task("copy-uswds-js", () => {
  return gulp.src(`${uswds}/js/**/**`).pipe(gulp.dest(`${JS_DEST}`));
});

gulp.task("build-sass", function (done) {
  var plugins = [
    // Autoprefix
    autoprefixer({
      cascade: false,
      grid: true,
    }),
    // Minify
    csso({ forceMediaMerge: false }),
  ];
  return (
    gulp
      .src([`${PROJECT_SASS_SRC}/*.scss`])
      .pipe(sourcemaps.init({ largeFile: true }))
      .pipe(
        sass.sync({
          includePaths: [
            `${PROJECT_SASS_SRC}`,
            `${uswds}/scss`,
            `${uswds}/scss/packages`,
          ],
        })
      )
      .pipe(replace(/\buswds @version\b/g, "based on uswds v" + pkg.version))
      .pipe(postcss(plugins))
      .pipe(sourcemaps.write("."))
      // uncomment the next line if necessary for Jekyll to build properly
      .pipe(gulp.dest(`${SITE_CSS_DEST}`))
    //.pipe(gulp.dest(`${CSS_DEST}`))
  );
});

gulp.task("build-app", function () {
  var plugins = [cssnano()];
  return gulp
    .src(`${CSS_DEST}/10x.css`)
    .pipe(postcss(plugins))
    .pipe(rename("10x.app.min.css"))
    .pipe(gulp.dest(`${INC_DEST}`))
    .pipe(size());
});

gulp.task(
  "init",
  gulp.series(
    "copy-uswds-fonts",
    "copy-uswds-images",
    "copy-uswds-js",
    "build-sass",
    "build-app"
  )
);

gulp.task("watch-sass", function () {
  gulp.watch(`${PROJECT_SASS_SRC}/**/*.scss`, gulp.series("build-sass"));
});

gulp.task("watch", gulp.series("build-sass", "watch-sass"));

gulp.task("default", gulp.series("watch"));
