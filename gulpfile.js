const gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass")),
  prefixer = require("gulp-autoprefixer"),
  webpack = require("webpack"),
  webp_stream = require("webpack-stream"),
  
  webpack_config = require("./webpack.config.js"),
  browserSync = require("browser-sync").create(),
  include = require("gulp-include"),
  sourcemaps = require("gulp-sourcemaps");


 /**
 * An object for building some other files
 * @name paths
 * @type object
 * @constant
 * @description Files' paths
 */ 

  const paths = {
  src: {
    folder: "./src/",
    sass: "./src/sass/**/*.{sass,scss}",
    javascript: "./src/js/**/*.{mjs,js}",
    javascript_webpack_entry: "./src/js/index.js",
    images: "./src/img/**/*.*",
    html_parts: "/src/parts/",
  },
  dist: {
    server:"C:/xampp/htdocs/ftstroi",
    folder: "./dist/",
    css: "./dist/css/",
    javascript: "./dist/js/",
    images: "./dist/img/",
  },
};

gulp.task("html-parts", () => {
  return gulp
    .src(paths.src.folder + "*.{html,htm}")
    .pipe(
      include({
        includePaths: __dirname + paths.src.html_parts,
      })
    )
    .pipe(gulp.dest(paths.dist.folder))
    .pipe(browserSync.stream());
});

gulp.task("images", () => {
   	return gulp
    .src(paths.src.images)
    .pipe(gulp.dest(paths.dist.images));
});

// === JavaScript ===
gulp.task("webpack", () => {
  return gulp
    .src(paths.src.javascript_webpack_entry)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(webp_stream(webpack_config, webpack))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dist.javascript))
    .pipe(browserSync.stream());
});
// === SASS and CSS ===
gulp.task("sass", () => {
  return gulp
    .src(paths.src.sass)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass().on("error", sass.logError))
    .pipe(prefixer({
      browsers:['last 2 versions']
      }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dist.css))
    .pipe(browserSync.stream());
});

gulp.task("minify", () => {
  return gulp
    .src(paths.dist.css + '*.css')
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest(paths.dist.css));
});

// === Watch function ===
gulp.task("watch", (watchEnd) => {
  // Init browser-sync server
  browserSync.init({
    server: "./dist",
  });

  // --- HTML ---
  gulp.watch([paths.src.folder + "*.{html,htm}", '.' + paths.src.html_parts], gulp.series("html-parts"))
  .on("change", browserSync.reload);
  // --- Styles ---
  gulp.watch(paths.src.sass, gulp.series("sass"))
  .on("change", browserSync.reload);
  // --- JavaScript ---
  gulp.watch(paths.src.javascript, gulp.series("webpack"));
  // --- Images ---
  gulp
    .watch(paths.src.images, gulp.series("images"))
    .on("change", browserSync.reload);
  watchEnd(); // Callback
});

// === Exports ===
exports.default = gulp.parallel("html-parts", "sass", "webpack", 'images');
exports.watch = gulp.series(
  gulp.parallel("html-parts", "sass", "webpack"),
  "watch"
);
exports.build = gulp.series(
  gulp.parallel("html-parts", "webpack", "sass", "images"),
  "minify"
);