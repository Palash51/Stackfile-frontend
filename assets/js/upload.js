$(document).ready(function(){

	$('#singlebutton').on('click', function(){
		var description = $('#description').val();
        var file_url = $('#filebutton').val();
        var checkbox = $('#checkbox').prop( "checked");;
        
        
        var data = {
            description: description,
            file_url: file_url,
            can_share: checkbox
        }
        
		$.ajax({
        url: api+'/v1/file',
        method: 'POST',
        headers: {
            Authorization: 'Token ' + localStorage.getItem('Token')
        },
        contentType: 'application/json',
        data: JSON.stringify(data),
        async: false,
        success: function(data){
        	alert("Your file has been uploded Successfully");
        },
        error: function(err){
            console.log(err);
        	}
    	});

	})


});