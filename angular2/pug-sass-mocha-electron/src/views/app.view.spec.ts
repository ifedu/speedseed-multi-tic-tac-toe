import 'mocha'
import { assert } from 'chai'

describe('Component: app', () => {
    let check: boolean

    beforeEach(() => {
        check = true
    })

    it('check test', () => {
        assert.equal(check, true)
    })
})
