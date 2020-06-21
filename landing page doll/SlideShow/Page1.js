
$("#SlideShowButton").css('position', 'fixed');
$("#SlideShowButton").css('z-index', '10000');
$("#SlideShowButton").css('bottom', '0px');
$("#SlideShowButton").css('padding', '20px');
$("#SlideShowButton a").css('height', '50px');
$("#SlideShowButton a").css('width', '55px');
$("#SlideShowButton a").css('font-size', '25px');
$("#SlideShowButton a").css('background-color', 'white');
$("#SlideShowButton a").css('border', '2px solid black');
$("#SlideShowButton a").css('opacity', '0.5');
$("#SlideShowButton i").css('padding-top', '6px');
$("#SlideShowButton a").hover(function(){
    $(this).css("opacity", "1");
    }, function(){
    $(this).css("opacity", "0.5");
  });
function preSlide() {
    var idPage = $("#idPage").val();
    if (idPage == 3) {
        window.location.href = '../Desktop24/index.html';
    }
    else if (idPage == 4) {
        window.location.href = '../DesktopBst/index.html';
    }
    else if (idPage == 5) {
        window.location.href = '../iMac16/Page1.html';
    }
    else if (idPage == 6) {
        window.location.href = '../iMac17/Page1.html';
    }
    else if (idPage == 7) {
        window.location.href = '../iMac18/Page1.html';
    }
    else if (idPage == 8) {
        window.location.href = '../iMac19/Page1.html';
    }
    else if (idPage == 9) {
        window.location.href = '../iMac20/Page1.html';
    }
    else if (idPage == 10) {
        window.location.href = '../iMac21/Page1.html';
    }
    else if (idPage == 1) {
        window.location.href = '../iMac22/Page1.html';
    }
    else if (idPage == 2) {
        window.location.href = '../iMac23/Page1.html';
    }
}

function nextSlide() {
    var idPage = $("#idPage").val();
    if (idPage == 1) {
        window.location.href = '../Desktop24/index.html';
    }
    else if (idPage == 2) {
        window.location.href = '../DesktopBst/index.html';
    }
    else if (idPage == 3) {
        window.location.href = '../iMac16/Page1.html';
    }
    else if (idPage == 4) {
        window.location.href = '../iMac17/Page1.html';
    }
    else if (idPage == 5) {
        window.location.href = '../iMac18/Page1.html';
    }
    else if (idPage == 6) {
        window.location.href = '../iMac19/Page1.html';
    }
    else if (idPage == 7) {
        window.location.href = '../iMac20/Page1.html';
    }
    else if (idPage == 8) {
        window.location.href = '../iMac21/Page1.html';
    }
    else if (idPage == 9) {
        window.location.href = '../iMac22/Page1.html';
    }
    else if (idPage == 10) {
        window.location.href = '../iMac23/Page1.html';
    }
}

function pauseSlide() {
    var IsPause = localStorage.getItem("IsPause");
    if (IsPause == "true") {
        console.log(IsPause);
        localStorage.setItem("IsPause", "false");
        $('#pauseButton').html('<i class="fa fa-pause"></i>');
        setTimeout(changePage, 5000);
    } else if (IsPause == "false") {
        console.log(IsPause);
        localStorage.setItem("IsPause", "true");
        $('#pauseButton').html('<i class="fa fa-caret-right"></i>');
        $("#pauseButton i").css('font-size', '39px');
    }
}

var IsHideCloseButton = localStorage.getItem("IsHideCloseButton");
if (IsHideCloseButton == "" || IsHideCloseButton == null) {
    localStorage.setItem("IsHideCloseButton", "true");
} else if (IsHideCloseButton == "true") {
    $('#closeButton').html('<i class="fa fa-plus"></i>');
    $("#preButton").hide();
    $("#pauseButton").hide();
    $("#nextButton").hide();
} else if (IsHideCloseButton == "false") {
    $('#closeButton').html('<i class="fa fa-minus"></i>');
    $("#preButton").show();
    $("#pauseButton").show();
    $("#nextButton").show();
}
function closeSlide(){
    if($('#preButton').is(':hidden'))
    {  
        $("#preButton").show();
        $("#pauseButton").show();
        $("#nextButton").show();
        $('#closeButton').html('<i class="fa fa-minus"></i>');
        localStorage.setItem("IsHideCloseButton", "false");
    }else{
        $("#preButton").hide();
        $("#pauseButton").hide();
        $("#nextButton").hide();
        $('#closeButton').html('<i class="fa fa-plus"></i>');
        localStorage.setItem("IsHideCloseButton", "true");
    }
}

var IsPause = localStorage.getItem("IsPause");
if (IsPause == "" || IsPause == null) {
    localStorage.setItem("IsPause", "false");
} else if (IsPause == "true") {
    $('#pauseButton').html('<i class="fa fa-caret-right"></i>');
    $("#pauseButton i").css('font-size', '40px');
} else if (IsPause == "false") {
    $('#pauseButton').html('<i class="fa fa-pause"></i>');
}

function changePage() {
    var idPage = $("#idPage").val();
    var IsPause = localStorage.getItem("IsPause");
    if (IsPause == "false") {
        if (idPage == 1) {
            window.location.href = '../Desktop24/index.html';
        }
        else if (idPage == 2) {
            window.location.href = '../DesktopBst/index.html';
        }
        else if (idPage == 3) {
            window.location.href = '../iMac16/Page1.html';
        }
        else if (idPage == 4) {
            window.location.href = '../iMac17/Page1.html';
        }
        else if (idPage == 5) {
            window.location.href = '../iMac18/Page1.html';
        }
        else if (idPage == 6) {
            window.location.href = '../iMac19/Page1.html';
        }
        else if (idPage == 7) {
            window.location.href = '../iMac20/Page1.html';
        }
        else if (idPage == 8) {
            window.location.href = '../iMac21/Page1.html';
        }
        else if (idPage == 9) {
            window.location.href = '../iMac22/Page1.html';
        }
        else if (idPage == 10) {
            window.location.href = '../iMac23/Page1.html';
        }
    }
}
setTimeout(changePage, 5000);