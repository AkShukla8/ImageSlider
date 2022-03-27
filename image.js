

$(document).ready(function () {

    $('.button').click(function () {

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if (filter == 'All') {
            $('.Image').show(400);
        } else {
            $('.Image').not('.' + filter).hide(200);
            $('.Image').filter('.' + filter).show(400);
        }

    });

    $('.gallery').magnificPopup({

        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }

    });

});

