$( document ).ready(function() {
    $('#emailForm').submit(function (evt) {
        evt.preventDefault();
    });
    
    $('#initialModal').on('show.bs.modal', function (e) {
      $(".modal-dialog").addClass("custom-modal");
    })
    
    $('#initialModal').on('hide.bs.modal', function (e) {
      $(".modal-dialog").removeClass("custom-modal");
    })
});

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function createEmail(){
   if($("#email").val() != ""){
       if(isEmail($("#email").val())){
            var jqxhr = $.get( "/suscribe?email=" + $("#email").val(), function() {
                $("#email").val("");
            })
            .done(function(data) {
                if(data.error){
                    swal({   title: "Error!",   text: data.error,   type: "error" });
                }
                else {
                    swal({   title: "Success!",   text: "Now you are suscribed.",   type: "success" });
                }
                
            })
            .fail(function() {
                swal({   title: "Error!",   text: "error.",   type: "error" });
            });
       }
       else {
           swal({   title: "Error!",   text: "Yikes! A valid email is required.",   type: "error" });
       }
       
   }
    else {
        swal({   title: "Error!",   text: "Oh snap! You have not provided a valid email.",   type: "error" });
    }
}

function loadPopUp(){
    if(!$.cookie('popup')){
        $.cookie('popup', '1', { expires: 7 });   
        
        $("#btnModal").removeAttr("disabled");
        $("#initialModal").modal();
    }
}

function createModalEmail(){
   $("#btnModal").attr("disabled", "disabled");
   if($("#emailModal").val() != ""){
       if(isEmail($("#emailModal").val())){
            var jqxhr = $.get( "/suscribe?email=" + $("#emailModal").val(), function() {
                $("#emailModal").val("");
            })
            .done(function(data) {
                if(data.error){
                    $("#btnModal").removeAttr("disabled");
                    swal({   title: "Error!",   text: data.error,   type: "error" });
                }
                else {
                    $("#initialModal").modal("hide");
                    swal({   title: "Success!",   text: "Now you are suscribed.",   type: "success" });
                }
                
            })
            .fail(function() {
                $("#btnModal").removeAttr("disabled");
                swal({   title: "Error!",   text: "error.",   type: "error" });
            });
       }
       else {
           $("#btnModal").removeAttr("disabled");
           swal({   title: "Error!",   text: "A valid email is required.",   type: "error" });
       }
       
   }
    else {
        $("#btnModal").removeAttr("disabled");
        swal({   title: "Error!",   text: "The email field is required.",   type: "error" });
    }
}