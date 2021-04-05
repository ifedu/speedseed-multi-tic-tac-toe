import { Task } from 'root/core/seed'

class TaskFile extends Task {
    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        this.run(
            'clean',
            'bundle',
            'tmp',
            [
                'copy.css.tmp-to-build',
                'copy.html.tmp-to-build',
                'js.tmp-to-build',
            ],
            'tpl.js',
            cb
        )
    }
}

new TaskFile()
