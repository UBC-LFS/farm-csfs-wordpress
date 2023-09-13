// Cusdom slideshow
(function() {
    var slideshow_slides = document.getElementById('slideshow-slides');
    var slideshow_dots = document.getElementById('slideshow-dots');
    var slides = slideshow_slides.children;
    var dots = slideshow_dots.children;
        
    var slide_index = 0;
    show_slides();
    
    function show_slides() {
        make_slides_none();
        slide_index++;
        
        if (slide_index > slides.length) { slide_index = 1; }
        remove_active_slide();    
        slides[slide_index-1].style.display = 'block';
        dots[slide_index-1].classList.add('active');
        setTimeout(show_slides, 7000); // Call every 7 seconds
    }
    
    function remove_active_slide() {
        for (var i = 0; i < dots.length; i++) { 
            if (dots[i].classList.contains('active')) { dots[i].classList.remove('active'); }
        }
    }
    
    function make_slides_none() {
        for (var i = 0; i < slides.length; i++) { 
            slides[i].style.display = 'none'; 
        }
    }
    
    function get_slide(e) {
        remove_active_slide();
        make_slides_none();
        
        var slide = e.target;
        var slide_id = slide.querySelector('.slide-id').innerText;
        
        for (var i = 0; i < slides.length; i++) {
            var sid = slides[i].querySelector('.slide-id').innerText;
            if (sid === slide_id) { slides[i].style.display = 'block'; }
        }
        slide.classList.add('active');
    }
    
    slideshow_dots.querySelectorAll('.dot').forEach(function(item) {
        item.addEventListener('click', get_slide);
    });
})();