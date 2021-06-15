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

        $(document).on('click', '.burger-menu-toggle', function() {
            var parent = $(this).parents('.mobile-menu:first');
            if(parent) {
                if(parent.hasClass('open')) {
                    parent.removeClass('open');
                } else {
                    parent.addClass('open');
                }
            }
        });

        $(document).on('click', '.add-text-options button', function() {
            document.location.href = '/index-text-with-selected-element.html';
        });

        $(document).on('click', '.site-btn-extra-options', function(){
            document.location.href = '/index-design-options.html';
        });

        $(document).on('click', '.site-btn-save', function(){
            document.location.href = '/index-save-design-popup.html';
        });
        
        $(document).on('click', '.site-btn-download', function(){
            document.location.href = '/index-download-popup.html';
        });
        
        $(document).on('click', '.site-btn-share', function(){
            document.location.href = '/index-share-popup.html';
        });
        
        $(document).on('click', '.popup-close-btn', function() {
            $(this).closest('.open').removeClass('open');
        });

        $(document).on('click', '.accordion-header', function() {
            var parent = $(this).parent();
            if(parent.hasClass('open')) {
                parent.removeClass('open');
            } else {
                parent.addClass('open');
            }
        });
    }
)(jQuery);