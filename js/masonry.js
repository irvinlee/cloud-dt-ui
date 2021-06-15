function resizeGridItems(gridClassName){
    document.querySelectorAll(gridClassName).forEach(function(grid) {
        grid.querySelectorAll(':scope > li').forEach(function(item) {
            var rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
            var rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
            var rowSpan = Math.ceil((item.querySelector('img').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
            item.style.gridRowEnd = "span "+rowSpan;
        });
    });
 }



document.addEventListener('DOMContentLoaded', resizeGridItems('.comp-dynamic-photo-grid'), false);