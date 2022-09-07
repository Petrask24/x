$(document).ready(function() {
    $(window).scroll(function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $("#to-top").slideDown();
        } else {
            $("#to-top").slideUp();
        }
        calcPercent();
    })

    // Get the modal
    const modalSuccess = document.getElementById("myModal-success");
    const modalError = document.getElementById("myModal-error");

    // Get the <span> element that closes the modal
    const spanSuccess = $("#modal-success-close");
    const spanError = $("#modal-error-close");

    // When the user clicks on <span> (x), close the modal
    $(spanSuccess).click(function() {
        $(modalSuccess).css({
            display: "none"
        })
    });
    $(spanError).click(function() {
        $(modalError).css({
            display: "none"
        })
    });

    // When the user clicks anywhere outside of the modal, close it
    $(window).click(function(event) {
        if (event.target == modalSuccess) {
            $(modalSuccess).css({
                display: "none"
            })
        }
        else if (event.target == modalError) {
            $(modalError).css({
                display: "none"
            })
        }
    });

    $(".hamburger").click(function() {
        if ($("#check").is(':checked')) {
            $(".nav-ul").slideDown({
                start: function() {
                    $(this).css({
                        display: "flex"
                    })
                }
            });
            $(".contact-us").hide();
        } else {
            $(".nav-ul").slideUp();
            $(".contact-us").show();
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
    // calcPercent();
} 

function calcPercent() {
    let d = document.documentElement;
    let st = d.scrollTop || $(body).scrollTop;
    let sh = d.scrollHeight || $(body).scrollHeight;
    let percent = st / (sh - d.clientHeight) * 100;
    $(".progress-bar-inner").width(percent + "%");
}

function submitEmail() {
    const modal = $("#myModal");

    // https://smtpjs.com/
    Email.send({
        SecureToken : "70c2b688-f393-47ce-9505-f2e43015f560",
        To : 'chris.petraskie@gmail.com',
        From : $(".email").val(),
        Subject : "Email From " + $(".name").val(),
        Body : $(".message").val()
    }).then(
        message => openModal(message)
    );
}

function openModal(message) {
        const modalSuccess = $("#myModal-success");
        const modalError = $("#myModal-error");
        if (message == "OK") {
        // Get the modal
        modalSuccess.css({
            display: "block"
        })
    }
    else {
        $("#modal-error").text(message);
        // Get the modal
        modalError.css({
            display: "block"
        })
    }
}