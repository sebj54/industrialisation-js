// TODO: Import replaceImages (local)
// TODO: Replace anonymous functions: " function() " → " () => "
// TODO: Create tests

const $ = require('jquery')

function getImage(src) {
    return $('<img>')
        .attr('src', src)
        .attr('class', 'card-img-top')
}

function replaceImages() {
    const width = 500
    const height = 250

    $('.card-img-top').each(function(index) {
        const src = `https://picsum.photos/${width}/${height}?${index}`
        const $img = getImage(src)
        const $card = $(this).parent()

        $card.css('padding-top', `${height / width * 100}%`)

        $(this)
            .before($img)
            .detach()

        $card.find('[data-toggle="modal"]').click(function() {
            const $clone = $img.clone()
            $clone.attr('class', 'img-fluid')

            $('#modal-body').html($clone)
        })
    })
}

module.exports = function() {
    $(function() {
        replaceImages()
    })
}
