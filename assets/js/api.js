var api;
if(window.location.host === 'admin.altarjoy.com'){
    api = 'https://bg.altarjoy.com';
}
else if(window.location.host === 'bbstaging.club'){
    api = 'https://bg.bbstaging.club';
}else{
    api = '3.15.171.10:8080';
}
