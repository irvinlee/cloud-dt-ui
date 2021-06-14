// for presentation purposes only... will remove later
(
    function($) {
        $(document).on('click', '.drawer-toggle', function() {
            var parent = $(this).parents('.comp-drawer:first');
            if(parent) {
                if(parent.hasClass('open')) {
                    parent.removeClass('open');
                } else {
                    parent.addClass('open');
                }
            }
        });
    }
)(jQuery);