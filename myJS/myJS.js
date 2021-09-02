$(document).ready(function() {
    $(window).scroll(function() {
        let d = document.documentElement;
        let st = d.scrollTop || $(body).scrollTop;
        let sh = d.scrollHeight || $(body).scrollHeight;
    
        let percent = st / (sh - d.clientHeight) * 100;
    
        $(".progress-bar-inner").width(percent + "%");
    
        // console.log(percent);
    })

    $(".hamburger").click(function() {
        if ($("#check").is(':checked')) {
            $(".nav-ul").slideDown({
                start: function() {
                    $(this).css({
                        display: "flex"
                    })
                }
            });
        } else {
            $(".nav-ul").slideUp();
        }
    })

    $("nav ul a").click(function() {
        if ($(".hamburger").is(":visible")) {
            $("#check").click();
        }
    })

})