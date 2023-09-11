// Cusdom slideshow
(function() {
    var slide_index = 0;
    show_slides();
    function show_slides() {
        var slideshow_slides = document.getElementById('slideshow-slides');
        var slideshow_dots = document.getElementById('slideshow-dots');
        
        var slides = slideshow_slides.children;
        var dots = slideshow_dots.children;
        for (var i = 0; i < slides.length; i++) { slides[i].style.display = 'none'; }
        slide_index++;
        
        if (slide_index > slides.length) { slide_index = 1; }
        for (var i = 0; i < dots.length; i++) { 
            if (dots[i].classList.contains('active')) { dots[i].classList.remove('active'); }
        }
        slides[slide_index-1].style.display = 'block';
        dots[slide_index-1].classList.add('active');
        setTimeout(show_slides, 5000); // Call every 5 seconds
    }
})();