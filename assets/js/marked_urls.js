$(document).ready(function(){

    var marked_url_table = $('.marked-url-table').DataTable({
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
            url: api+'/v1/marked',
            // headers: {
            //     "Authorization": 'Token ' + localStorage.getItem('Token')
            // },
            contentType: 'application/json',
            cache: true,
            data: function (data) {
                console.log(data);
                return data['data']
            },
        },
        'columns': [
            {
                "data": "url",
                "render": function(data, type, row, meta){
                if(type === 'display'){
                    console.log(row.url);
                    data = '<a href="' + data + '">'+row.url+'</a>';
                }

                return data;
                }
            },
            {
                "data": "created_at"
            }
        ]
    });
});