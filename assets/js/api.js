var api;
if(window.location.host === 'admin.altarjoy.com'){
    api = 'https://bg.altarjoy.com';
}
else if(window.location.host === 'bbstaging.club'){
    api = 'https://bg.bbstaging.club';
}else{
    api = 'https://b284d577.ngrok.io';
}
