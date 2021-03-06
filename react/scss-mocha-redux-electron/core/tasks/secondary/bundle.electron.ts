import { mergeWith } from 'lodash'
import * as webpack from 'webpack'

import { core, paths, tpl, webpackOptions, Task } from 'root/core/seed'

class TaskFile extends Task {
    private cb: any
    private isFirstCB: boolean
    private routeFiles: any = []

    private files: any = paths.electron.index

    constructor() {
        super(__filename)
    }

    protected init(cb: any) {
        this.cb = cb

        webpack(
            this.getWebpackOptions(),
            this.webpackCb
        )
    }

    private getWebpackOptions(): any {
        const common = this.getWebpackCommonOptions()

        if (core.args.dev) {
            mergeWith(common, webpackOptions.dev, core.concatArr)
        }

        if (core.args.dist) {
            mergeWith(common, webpackOptions.dist, core.concatArr)
        }

        return common
    }

    private getWebpackCommonOptions() {
        const common = {
            target: 'electron-main',
            entry: `./${paths.electron.index}`,
            output: {
                filename: 'index.js',
                path: `${this.root}/${paths.electron.tmp.dir}`,
            },

            node: {
                __dirname: false,
            },

            context: this.root,
        }

        mergeWith(common, webpackOptions.common, core.concatArr)

        return common
    }

    private webpackCb = (err: any, stats: any) => {
        if (err) console.log(err)
        if (stats.hasErrors()) console.log(stats.toString({colors: true, reasons: true}))

        if (!this.isFirstCB) {
            this.isFirstCB = true

            this.cb()
        }
    }
}

new TaskFile()
