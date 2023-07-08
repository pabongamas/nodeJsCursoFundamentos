const gulp=require('gulp');
const server = require("gulp-server-livereload");

gulp.task('build',function(callback){
    console.log("construyendo el sitio");
    setTimeout(callback,1200);
});


gulp.task("serve", function (cb) {
    console.log("Abrí la web");
    gulp.src("www").pipe(
      server({
        livereload: false,
        open: true,
      })
    );
  });


  gulp.task("default",gulp.series('build','serve'));