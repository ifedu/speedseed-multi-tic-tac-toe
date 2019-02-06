import { LitElement, html } from 'lit-element'

import * as style from './box.style'

let xo = 'O'

class Component extends LitElement {
    constructor() {
        super()

        this.hide = 'hide'
    }

    static get properties() {
        return {
            hide: { type: String, reflect: true },
            src: { type: String, reflect: true },
        }
    }

    static get styles() {
        return [{
            cssText: style
        }]
    }

    render() {
        return html`
            <div class="box" @click='${this.push}'>
                <img class="${this.hide}" src="${this.src}">
            </div>
        `
    }

    push() {
        if (this.xo !== undefined) return

        xo = (xo === 'O') ? 'X' : 'O'

        this.hide = ''

        this.xo = xo
        this.src = `assets/${xo}.png`
    }
}

customElements.define('ss-box', Component)
