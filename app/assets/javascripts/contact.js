var captcha_1 = 0;
var captcha_2 = 0;
var captcha_3 = 0;

$( document ).ready(function() {
    
    captcha_1 = Math.round(Math.random()*10) + 1;
    captcha_2 = Math.round(Math.random()*10) + 1;
    captcha_3 = captcha_1 + captcha_2;
    
    $("#captcha_label").html(captcha_1 + " + " + captcha_2 + " = ?");
    
    $('#contactForm').submit(function (evt) {
        evt.preventDefault();
        
        $("#bt_contact").attr("disabled", "disabled");
        
        if($("#contactEmail").val() == "" || $("#contactSubject").val() == "Select Subject" || $("#contactMessage").val() == "" || $("#captchaObject").val() == ""){
            $("#bt_contact").removeAttr("disabled");
            swal({   title: "Error!",   text: "All fields are required.",   type: "error" });
        }
        else {
            if(isEmail($("#contactEmail").val())){
                
                if(Number($("#captchaObject").val()) != captcha_3){
                    $("#bt_contact").removeAttr("disabled");
                    swal({   title: "Error!",   text: "Wrong captcha value. Please try again.",   type: "error" });
                }
                else {
                    var jqxhr = $.get( "/send_contact?email=" + $("#contactEmail").val() + "&subject=" + $("#contactSubject").val() + "&message=" + $("#contactMessage").val(), function() {
                    })
                    .done(function(data) {
                        $("#contactEmail").val("");
                        $("#contactMessage").val("");
                        $("#captchaObject").val("");
                        $("#bt_contact").removeAttr("disabled");
                        swal({   title: "Success!",   text: "Thanks for contacting us.",   type: "success" }, function(){ });
                    })
                    .fail(function() {
                        $("#bt_contact").removeAttr("disabled");
                        swal({   title: "Error!",   text: "An error occurs sending your message. Please try again.",   type: "error" });
                    });   
                }
           }
           else {
               $("#bt_contact").removeAttr("disabled");
               swal({   title: "Error!",   text: "A valid email is required.",   type: "error" });
           }
        }
    });
});

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}