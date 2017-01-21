function formStyling() {

    var newFormHTML = "";
    var formCont = $(".login-container");
    var form = formCont.find('form');
    
    var rembrField = formCont.find('input[name=rememberme]').parent(".field");
    var rembrInput = rembrField.find('input');
    var hidenField = formCont.find('input[name=act]');
    var submitBtn = formCont.find('input[type=submit]');
    
    rembrField.remove();
    hidenField.remove();
    submitBtn.remove();

    newFormHTML = '<div class="row">'+
                        form.html()+
                        '<div class="field">'+
                            submitBtn.get(0).outerHTML+
                        '</div>'+
                    '</div>'+
                    '<div class="row">'+
                        '<div class="field">'+
                            '<label class="rembrme">'+
                            rembrInput.get(0).outerHTML+
                            rembrInput.get(1).outerHTML+
                            'Remember Me'+
                            '</label>'+
                        '</div>'+
                        '<div class="field">'+
                            '<a href="http://dev.tncertification.net/forgot_password.php">'+
                                'Forgot Password?'+
                            '</a>'+
                        '</div>'+
                    '</div>';
    
    form.html("")
    form.append(newFormHTML);

    formCont.find(".fieldCaption").hide();
    formCont.find(".field").addClass('col-md-3');
    formCont.find("input[type=submit]").parent(".field").removeClass('col-md-3');
    formCont.find("input[type=submit]").parent(".field").addClass('col-md-2');
    formCont.find("input[type=submit]").addClass('btn');
    formCont.find("input[type=submit]").val("Log In");
    formCont.find("input[name=email]").attr("placeholder", "Email Address");
    formCont.find("input[name=password]").attr("placeholder", "Password");

}

function detailsBlockStyling() {
    $('.info-block a.action').addClass('btn');
    $('.info-block tr td:first-child').addClass('col-md-4');
    $('.info-block tr td:last-child').addClass('col-md-8');
}