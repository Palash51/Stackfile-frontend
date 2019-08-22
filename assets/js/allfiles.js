$(document).ready(function(){

    var payment_table = $('.file-table').DataTable({
        "oLanguage": {
            "oPaginate": {
                "sFirst": "<i class='fas fa-step-backward'></i>", // This is the link to the first page
                "sPrevious": "<i class='fas fa-caret-left'></i>", // This is the link to the previous page
                "sNext": "<i class='fas fa-caret-right'></i>", // This is the link to the next page
                "sLast": "<i class='fas fa-step-forward'></i>" // This is the link to the last page
            }
        },
        "pagingType": "full_numbers",
        'destroy': true,
        'searching': false,
        'deferRender': true,
        dom: 'Bfrtip',
        buttons: [
            'csv'
        ],
        'ajax': {
            method: "GET",
            url: api+'/v1/file',
            headers: {
                "Authorization": 'Token ' + localStorage.getItem('Token')
            },
            contentType: 'application/json',
            cache: true,
            data: function (data) {
                return data['data']
            },
        },
        'columns': [
            {
                "data": "file_url",
                "render": function(data, type, row, meta){
                if(type === 'display'){
                    data = '<a href="' + data + '">'+row.file_url+'</a>';
                }

                return data;
                }
            },
            {
                "data": "description"
            }
        ]
    });
});