import 'jasmine'

describe('Component: user', () ->
    check = false

    beforeEach(() ->
        check = true
    )

    it('check test', () ->
        expect(check).toBe(true)
    )
)
