import { LitElement, html } from 'lit-element'

import * as style from './table.style'
import './box/box.component'

class Component extends LitElement {
    constructor() {
        super()
    }

    static get styles() {
        return [{
            cssText: style
        }]
    }

    render() {
        const line = html`
            <div class="line">
                <ss-box></ss-box>
                <ss-box></ss-box>
                <ss-box></ss-box>
            </div>
        `

        return html`
            <div class="table">
                ${line}
                ${line}
                ${line}
            </div>
        `
    }
}

customElements.define('ss-table', Component)
