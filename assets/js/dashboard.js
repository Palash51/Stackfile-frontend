$(document).ready(function(){
    var total_connection;
    $.ajax({
        url: api+'/v1/dashboard',
        method: 'GET',
        headers: {
            Authorization: 'Token ' + localStorage.getItem('Token')
        },
        contentType: 'application/json',
        async: false,
        success: function(data){
            $('#total_images').text(data.data.image_count);
            $('#other_file_count').text(data.data.other_file_count);
            $('#overall_count').text(data.data.overall_count);
            // $('#vendor').text(data.data.total_vendor);
            // total_connection = data.data.total_connection
        },
        error: function(err){
            console.log(err);
        }
    });

    // $('#show-stats').on('click', function(){
    //     $('#stats-body').html('');
    //     var html = '';
    //     $.each(total_connection, function(data, item){
    //         html += tableData(data, item)
    //     });
    //     $('#stats-body').append(html);
    //     $('#show-stats-modal').modal('show');
    // });
    var html = '';
    $.each(total_connection, function(data, item){
        html += tableData(data, item)
    });
    $('#stats-body').append(html);
    $('#show-stats-modal').modal('show');


    function tableData(data, item){
        return '<tr><td>'+ data + '</td><td>' + item[0] + '</td><td>'+ item[1] +'</tr>';
    }
})