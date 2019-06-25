const getImage = require('../assets/js/getImage')
const $ = require('jquery')

const src = 'https://picsum.photos/200/200'

test('should have a length of 1', () => {
    const image = getImage(src)

    expect(image).toHaveLength(1)
})

test('should be an object', () => {
    const image = getImage(src)

    expect(typeof image).toBe('object')
})

test('should be a jQuery object', () => {
    const image = getImage(src)

    expect(image instanceof $).toBe(true)
})

test('should have an src attribute', () => {
    const image = getImage(src)

    expect(image.attr('src')).toBe(src)
})

test('should have .card-img-top class', () => {
    const image = getImage(src)

    expect(image.is('.card-img-top')).toBe(true)
})
