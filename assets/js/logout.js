$(document).ready(function(){
    
    $('#logout').on('click', function(){
        console.log('working')
        localStorage.removeItem('Token');
        window.location = '../index.html'
    });
});