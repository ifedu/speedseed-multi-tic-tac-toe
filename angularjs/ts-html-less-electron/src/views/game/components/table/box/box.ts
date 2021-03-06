import { module } from 'angular'

export default class Box {
    constructor() {
        module('myproject')
        .component('ssBox', {
            template: `/*<= include('box.html') >*/`,

            require: {
                'ssTable': '^ssTable',
            },

            controller() {
                this.push = () => {
                    if (this.xo !== undefined) return

                    this.ssTable.xo = (this.ssTable.xo === 'O') ? 'X' : 'O'

                    this.xo = this.ssTable.xo
                }
            }
        })
    }
}
