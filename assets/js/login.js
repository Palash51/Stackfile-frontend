$(document).ready(function(){

    $('.lds-dual-ring').hide()
    $('#signin').on('click', function(){
        var email = $('#email').val();
        var password = $('#password').val();
        
        if(email.length > 0 && password.length > 0){
            // $('#signin').prop('disabled', true)
            // $('.signin').hide();
            // $('.lds-dual-ring').show();
            var data = {
                username: email,
                password: password,
                roles: 3,
            }
            $.ajax({
                url: api+'/v1/signin',
                method: "POST",
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function(data){
                    var token = data.data.token
                    console.log(token);
                    localStorage.setItem('Token', token)
                    sessionStorage.setItem('token', token);
                    window.location = '../HTML/dashboard.html'
                },
                error: function(err){
                    showNotification(err.responseJSON.errors)
                    $('#signin').prop('disabled', false)
                    $('.signin').show();
                    $('.lds-dual-ring').hide();
                }
            })
        }
        else{
            showNotification('Enter email or password')
        }
    }) 
});

function showNotification(data){
    $.notify({
        icon: 'glyphicon glyphicon-warning-sign',
        title: '<strong>Warning: </strong>',
        message: data,
    },
    {
        element: 'body',
        position: null,
        type: "danger",
        allow_dismiss: true,
        newest_on_top: false,
        showProgressbar: false,
        placement: {
            from: "top",
            align: "right"
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5000,
        timer: 1000,
        url_target: '_blank',
        mouse_over: null,
        animate: {
            enter: 'animated bounceIn',
		    exit: 'animated bounceOut'
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: 'class',
        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<span data-notify="icon"></span> ' +
		    '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
        '</div>' 
    }
    )
}