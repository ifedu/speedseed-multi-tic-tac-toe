import { Element as PolymerElement } from '@polymer/polymer/polymer-element'

const css = require('./box.style')
const html = require('./box')

let xo = 'O'

class SSBox extends PolymerElement {
    static get template() {
        return `
            <style>${css}</style>
            ${html}
        `
    }

    static get properties() {
        return {
            hide: {
                value: 'hide'
            }
        }
    }

    constructor() {
        super()
    }

    push (e) {
        if (this.xo !== undefined) return

        xo = (xo === 'O') ? 'X' : 'O'

        this.hide = ''

        this.xo = xo
        this.src = `assets/${xo}.png`
    }
}

customElements.define('ss-box', SSBox)
