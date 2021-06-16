
function resizeGridItems(gridClassName){
    var grid = document.querySelector(gridClassName);
    var items = document.querySelectorAll(gridClassName + ' > li');
    var itemsArray = Array.prototype.slice.call(items);

    itemsArray.forEach(function(item) {
        var rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        var rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
        var rowSpan = Math.floor((item.querySelector('img').getBoundingClientRect().height + rowGap)/(rowHeight + rowGap));
        item.style.gridRowEnd = "span "+rowSpan;
    });
 }



document.addEventListener('DOMContentLoaded', resizeGridItems('.comp-masonry-grid.fixed-columns'), false);
document.addEventListener('resize', resizeGridItems('.comp-masonry-grid.fixed-columns'));