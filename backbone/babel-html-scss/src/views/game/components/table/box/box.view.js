import $ from 'jquery'

import { BoxCollection } from './box.collection'

export const BoxView = Backbone.View.extend({
    el: 'ss-box',

    events: {
        'mousedown': 'push',
    },

    initialize() {
        this.collection = new BoxCollection()
    },

    push() {
        const $img = this.$el.find('img')
        console.log(this.$el)
        console.log(this.collection)
        console.log(this.model)
        // if ($img.hasClass('hide') === false) return

        // const mark = (this.mark === 'X') ? 'O' : 'X'

        // $img
        // .removeClass('hide')
        // .attr('src', `assets/${this.mark}.png`)
    }
})
