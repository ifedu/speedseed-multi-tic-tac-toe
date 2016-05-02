import { join } from 'path'

import { core, paths } from 'root/core/seed'

import { TplInclude } from './tpl-include'

export default class Tpl {
    args: any = core.args
    context: string
    paths: any = paths

    include(file: any) {
        console.log('INC')
        let routeFile = join(this.context, file)

        const tplInclude: any = new TplInclude(routeFile)

        return new Promise((resolve) => {
            const extractFile: any = tplInclude.extractFile()
            console.log('extractFile', extractFile)

            return extractFile.then((data: any) => {
                console.log('RES', data)

                return resolve(data)
            })
        })
        // return extractFile

        // return extractFile.then((resolve: any) => {
        //     return '<LALA></LALA>'
        //     // return resolve('<LALA></LALA>')
        // })

        // console.log(extractFile)
        // return extractFile
    }
}
