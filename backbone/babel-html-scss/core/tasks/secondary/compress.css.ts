import { paths, Task } from 'root/core/seed'

const cssmin = require('gulp-cssmin')

class TaskFile extends Task {
    private files: any = [
        `${paths.build.dir}/**/index.css`,
        `${paths.build.dir}/**/main.css`,
    ]

    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        return this.gulp
        .src(this.files)
        .pipe(cssmin({}))
        .pipe(this.gulp.dest(paths.dist.dir))
    }
}

new TaskFile()
