(function ($) {
    $(document).ready(function () {
       const $list = $('.list').isotope({
            // options
           itemSelector: '.list__item',
           layoutMode: 'masonry'
        });

        $('.main-nav').on('click', '.main-nav__item', function() {
            const $this = $(this);
            const filterValue = $(this).data('filter');
            $list.isotope({filter: filterValue});
            });
    });
})(jQuery);