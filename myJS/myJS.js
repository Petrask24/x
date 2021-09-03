$(document).ready(function() {
    $(window).scroll(function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $("#to-top").slideDown();
        } else {
            $("#to-top").slideUp();
        }

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

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

function submitEmail() {
    console.log(
        $(".email").val(),
        "Email From " + $(".name").val(),
        $(".message").val()
    )
    Email.send({
        SecureToken : "b88f4d0c-c1d6-4b97-a06c-6f82bf6c8b4a",
        To : 'chris.petraskie@gmail.com',
        From : $(".email").val(),
        Subject : "Email From" + $(".name").val(),
        Body : $(".message").val()
    }).then(
      message => alert(message)
    );
}