const $ = require('jquery')

function getImage(src) {
    return $('<img>')
        .attr('src', src)
        .attr('class', 'card-img-top')
}

module.exports = getImage
