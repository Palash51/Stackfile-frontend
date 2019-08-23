var api;
if(window.location.host === 'admin.com'){
    api = 'https://admin.com';
}
else if(window.location.host === 'domaintest.club'){
    api = 'https://bg.domain.club';
}else{
    api = 'http://3.15.171.10:8080';
}
