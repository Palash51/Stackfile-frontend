$(document).ready(function(){

	$('#singlebutton').on('click', function(){


        var data, xhr;
        var token = localStorage.getItem('Token');
        data = new FormData();
        data.append( 'file_url', $( '#filebutton' )[0].files[0] );
        data.append('description', $('#description').val());
        data.append('checkbox', $('#checkbox').prop( "checked"));
        xhr = new XMLHttpRequest();
        
        // xhr.setRequestHeader('Authorization', 'Token '  + token);
        xhr.open( 'POST', 'https://e502ed05.ngrok.io/v1/file', true );
        xhr.setRequestHeader('Authorization', 'Token' + token);
        
        xhr.onreadystatechange = function ( response ) {};
        xhr.send(data);

        e.preventDefault();
        
        // var formData = new FormData($('#filebutton')[0]);
        // const file = document.querySelector('.input-file');
        // console.log(file);
        // alert(file);

        // var file_data = $('#filebutton').prop('files')[0];   
        // var form_data = new FormData();                  
        // form_data.append('file', file_data);
        // console.log(file_data);
        // alert(form_data); 

        // var fd = new FormData();
        // fd.append('fname', 'test.wav');
        // fd.append('data', soundBlob);                      
        
        // $.ajax({
        //     type: 'post',
        //     url: api+'/v1/file',
        //     cache: false,
        //     contentType: false,
        //     processData: false,
        //     data: fd,
        //     success: function (response) {
        //         console.log(response);
        //     },
        //     error: function (err) {
        //         console.log(err);
        //     }
        // });





		// var description = $('#description').val();
  //       var file_url = $('#filebutton').val();
  //       var checkbox = $('#checkbox').prop( "checked");;
        
        
  //       var data = {
  //           description: description,
  //           file_url: file_url,
  //           can_share: checkbox
  //       }
        
		// $.ajax({
  //       url: api+'/v1/file',
  //       method: 'POST',
  //       headers: {
  //           Authorization: 'Token ' + localStorage.getItem('Token')
  //       },
  //       contentType: 'application/json',
  //       data: JSON.stringify(data),
  //       async: false,
  //       success: function(data){
  //       	alert("Your file has been uploded Successfully");
  //       },
  //       error: function(err){
  //           console.log(err);
  //       	}
  //   	});

	})


});