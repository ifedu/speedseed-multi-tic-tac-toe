        // import { existsSync } from 'fs'
import { mergeWith } from 'lodash'
import { extname } from 'path'
import * as webpack from 'webpack'

        // import { core, paths, tpl, webpackOptions, Task } from 'root/core/seed'
import { core, paths } from 'root/core/seed'

export class TplInclude {
    root: string = process.cwd()
    routeFile: string
    webpackOptions: any = {}

    constructor(routeFile: string) {
        this.routeFile = routeFile

        const WebpackOptionsCoreInclude = require('root/core/webpack.options-include').default

        const webpackOptionsCoreInclude: any = new WebpackOptionsCoreInclude()
        mergeWith(this.webpackOptions, webpackOptionsCoreInclude.options, core.concatArr)
    }
// class TplInclude extends Task {
    // private cb: any
    // private isFirstCB: boolean
    // private routeFiles: any = []

    extractFile() {
        // this.cb = cb

        // return '<div>HOLA MUNDO</div>'
        console.log('EXT')
        return new Promise((resolve) => {
            return webpack(
                this.getWebpackOptions(),
                this.webpackCb.bind(this, resolve)
            )
        })

        // return '<LALA></LALA>'
    }

    private getWebpackOptions(): any {
        const common: any = this.getWebpackCommonOptions()

        if (core.args.dev) {
            mergeWith(common, this.webpackOptions.dev, core.concatArr)
        }

        if (core.args.dist) {
            mergeWith(common, this.webpackOptions.dist, core.concatArr)
        }

        return common
    }

    private getWebpackCommonOptions() {
        const common: any = {
            context: this.root,
            entry: this.getEntry(),

            output: {
                filename: '[name].js',
                path: `${this.root}/${paths.build.dir}`,
            },

            // plugins: this.getPlugins(),
        }

        // if (core.args.electron) {
        //     common.target = 'electron-renderer'
        // }

        mergeWith(common, this.webpackOptions.common, core.concatArr)

        return common
    }

    // private getPlugins() {
    //     if (core.args.one) return []

    //     const plugins: any = [
    //         new webpack.optimize.CommonsChunkPlugin({
    //             filename: 'commons.js',
    //             name: 'commons'
    //         }),
    //     ]

    //     this.addPlugin(plugins, `${this.root}/${paths.build.vendor.dll}`)

    //     return this.getPluginsMin(plugins)
    // }

    // private addPlugin(plugins: any, route: string) {
    //     const exist = existsSync(route)

    //     if (exist) {
    //         plugins.push(
    //             new webpack.DllReferencePlugin({
    //                 context: this.root,
    //                 manifest: require(route),
    //             })
    //         )
    //     }
    // }

    private getEntry() {
        const entry: any = {}

        const val: string = this.routeFile.replace(this.root, '')
        const ext: string = extname(val)
        const prop: string = val
                    .replace(paths.src.dir, '')
                    .replace(ext, '')
                    .substring(2)

        entry[prop] = `.${val}`

        return entry
    }

    private getEntryEach(entry: any, routeFile: string, i: number) {
    }

    private webpackCb (resolve: any, err: any, stats: any) {
        // console.log(err)
        // console.log(stats)
        let value = stats.compilation.modules[0]._source._value
        value = value.substr(18, value.length - 19)

        console.log('CB', value)
        return resolve(value)
    //     if (err) console.log(err)
    //     if (stats.hasErrors()) console.log(stats.toString({colors: true, reasons: true}))

    //     if (!this.isFirstCB) {
    //         this.isFirstCB = true

    //         this.cb()
    //     }

    //     if (Task.reload) {
    //         return this.gulp.start('reload')
    //     }
    }
}
