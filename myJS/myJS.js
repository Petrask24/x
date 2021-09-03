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
      
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    } 
})

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

function submitEmail() {
    var modal = document.getElementById("myModal");

    // https://smtpjs.com/
    Email.send({
        SecureToken : "70c2b688-f393-47ce-9505-f2e43015f560",
        To : 'chris.petraskie@gmail.com',
        From : $(".email").val(),
        Subject : "Email From " + $(".name").val(),
        Body : $(".message").val()
    }).then(
        modal.style.display = "block"
    );
}