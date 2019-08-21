$(document).ready(function(e){
    // e.preventDefault();

    $('#seacrh_form').submit(function(e){
        e.preventDefault()
        // var query = document.getElementById('txtSearch').value;
        var query = $('#txtSearch').val();
         
        console.log(query);
        var body = {
            'search_text' : $('#txtSearch').val(),
            'csrfmiddlewaretoken' : $("input[name=csrfmiddlewaretoken]").val()
        } 
        $.ajax({
        method: "POST",
        contentType: 'application/json',

        url: api+'/v1/search/question',

        data: JSON.stringify(body),
        

        success: function(data){
            // console.log(data);
            test(data)
                
            },
        error:function (xhr, ajaxOptions, thrownError){
            console.log(xhr);
            alert(xhr.status);
            // alert("Error : "+thrownError);
        }  
        });
    });

    function test(data){
        console.log(data);
        var marked_url_table = $('.ask-question-table').DataTable({
        "oLanguage": {
            "oPaginate": {
                "sFirst": "<i class='fas fa-step-backward'></i>", // This is the link to the first page
                "sPrevious": "<i class='fas fa-caret-left'></i>", // This is the link to the previous page
                "sNext": "<i class='fas fa-caret-right'></i>", // This is the link to the next page
                "sLast": "<i class='fas fa-step-forward'></i>" // This is the link to the last page
            }
        },
        "pagingType": "full_numbers",
        // 'destroy': true,
        'searching': false,
        'deferRender': true,
        // dom: 'Bfrtip',
        buttons: [
            'csv'
        ],
        
        'data': data.data,
        'columns': [
            {
                "data": "url",
            }
        ]
    });
    }
    

});

// $('#txtSearch').keyup(function() {
//     console.log("ayaaa h");
//     var s = $('#txtSearch').val();

//     alert(s);
    // $.ajax({
    //     type: "GET",
    //     url: api+"/v1/search/question",
    //     data: {
    //         'search_text' : $('#txtSearch').val()
    //     },
    //     // success: searchSuccess,
    //     // dataType: 'html'

    //     success: function(d){
    //             console.log(d.data[0].url);
    //             return d.data
                
    //         },
    //         error: function(d){
    //             alert('error');
                
    //         }

    // });
// });














// $(document).ready(function(){
     
//     var ask_question_table = $('.ask-question-table').DataTable({
//         "oLanguage": {
//             "oPaginate": {
//                 "sFirst": "<i class='fas fa-step-backward'></i>", // This is the link to the first page
//                 "sPrevious": "<i class='fas fa-caret-left'></i>", // This is the link to the previous page
//                 "sNext": "<i class='fas fa-caret-right'></i>", // This is the link to the next page
//                 "sLast": "<i class='fas fa-step-forward'></i>" // This is the link to the last page
//             }
//         },
//         "pagingType": "full_numbers",
//         'destroy': true,
//         'searching': false,
//         'deferRender': true,
//         dom: 'Bfrtip',
//         buttons: [
//             'csv'
//         ],
//         'ajax' : {
//             type: "GET",
//             url: api+"/v1/search/question",
//             data: {
//                 'search_text' : $('#txtSearch').val()
//             },
//             contentType: 'application/json',
//             cache: true,
//             data: function (data) {
//                 console.log(data);
//                 return data['data']
//             },
//         },

//         'columns': [
//             {
//                 "data": "url",
//             }
//         ]
//     });


// });



    // function searchButton() {
    //     var input = document.getElementById('txtSearch');
    //     console.log(input);
    // };

    //  $('#txtSearch').keyup(function(e) {

    //     var s = $('#txtSearch').val();

    //     alert(s);
    //     $.ajax({
    //         type: "GET",
    //         url: api+"/v1/search/question",
    //         data: {
    //             'search_text' : $('#txtSearch').val()
    //         },
    //         // success: searchSuccess,
    //         // dataType: 'html'

    //         success: function(d){
    //                 console.log(d.data[0].url);
    //                 return d.data
                    
    //             },
    //             error: function(d){
    //                 alert('error');
                    
    //             }

    //     });
    // });



    // function searchSuccess(data, textStatus, jqXHR)
    // {
    //     // $('#search-results').html(data)
    //     console.log(jqXHR);
    // }

  //   function searchOpen() {
  //     var search = $('#txtSearch').val()
  //     console.log(search);
  //     var data = {
  //         search: search
  //     };
  //     $.ajax({
  //         method: 'GET',
  //         url: api+'/v1/search/question',
  //         data: data,
  //         data: function (data) {
  //             console.log(data);
  //             return data['data']
  //         },
          
          
  //     });
  // }
