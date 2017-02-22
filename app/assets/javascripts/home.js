$( document ).ready(function() {
    $('#emailForm').submit(function (evt) {
        evt.preventDefault();
    });
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
           swal({   title: "Error!",   text: "A valid email is required.",   type: "error" });
       }
       
   }
    else {
        swal({   title: "Error!",   text: "The email field is required.",   type: "error" });
    }
}