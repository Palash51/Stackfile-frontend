$(document).ready(function(){

  $('#singlebutton').on('click', function(e){
    e.preventDefault();
    var data, xhr;
    var token = localStorage.getItem('Token');
    
    data = new FormData();
    data.append( 'file_url', $( '#filebutton' )[0].files[0] );
    data.append('description', $('#description').val());
    data.append('can_share', $('#checkbox').prop( "checked"));
    xhr = new XMLHttpRequest();
    
    
    xhr.open( 'POST', api+'/v1/file', true );
    xhr.setRequestHeader('Authorization', 'Token '  + token);
    
    
    xhr.onreadystatechange = function ( response ) {
      if (this.status == 200) {
            alert("You have successfully Uploaded File");
        }
    };
    xhr.send(data);

    
  })
}); 
