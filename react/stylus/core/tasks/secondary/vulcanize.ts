// gulp.task(name, (cb) => {
//     // const htmlmin = require('gulp-htmlmin')
//     // const minifyInline = require('gulp-minify-inline')
//     // const size = require('gulp-size')
//     // const rename = require('gulp-rename')
//     const vulcanize = require('gulp-vulcanize')

//     // return gulp
//     // .src(`${$.dist.vulcanize.dir}/${$.dist.vulcanize.name}`)
//     // .pipe(vulcanize({
//     //     inlineCss: true,
//     //     inlineScripts: true,
//     //     stripComments: true
//     // }))
//     // .pipe(gulp.dest($.dist.vulcanize.dir))
//     // .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
//     // .pipe(minifyInline())
//     // .pipe(gulp.dest($.dist.vulcanize.dir))
//     // .pipe(size({ title: 'vulcanize' }))
// })



import { paths, Task } from 'root/core/seed'

class TaskFile extends Task {
    private files: any = [
        // `${paths.dist.vulcanize.dir}/${paths.dist.vulcanize.name}`
    ]

    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        // this.gulp
        // .src(this.files)
        // .pipe(this.gulp.dest(paths.dist.dir))
    }
}

new TaskFile()
