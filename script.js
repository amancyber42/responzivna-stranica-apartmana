(function($) { "use strict";

    //Page cursors
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px",
        t.style.top = n.clientY + "px",
        e.style.left = n.clientX + "px",
        e.style.top = n.clientY + "px",
        i.style.left = n.clientX + "px",
        i.style.top = n.clientY + "px"
    });

    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

    // Background animation
    var pos = 0;
    window.setInterval(function(){
        pos++;
        document.getElementsByClassName('moving-image')[0].style.backgroundPosition = pos + "px 0px";
    }, 18);

    $(document).ready(function() {
        function changeBackground(imageUrl) {
            $('.moving-image').css('background-image', 'url(' + imageUrl + ')');
        }
        
        // Postavi početnu sliku
        var initialBg = $('.case-study-name:nth-child(1) .hover-target').data('bg-image');
        changeBackground(initialBg);
        
        $('.case-study-name').on('mouseenter', function() {
            var index = $(this).index() + 1;
            var bgImage = $(this).find('.hover-target').data('bg-image');
            
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            
            $('.case-study-images li:nth-child(' + index + ')').addClass("show");
            $(this).addClass('active');
            
            changeBackground(bgImage);
        });
        
        $('.case-study-name:nth-child(1)').trigger('mouseenter');
    });

})(jQuery);