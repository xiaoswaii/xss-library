$(document).ready(function(){
    document.querySelector('#login').style.display='none';
    document.querySelector('#suggestion').style.display='none';
    document.querySelector('#table').style.display='none';
    document.cookie="from swaii=H333kinggg is Happpyyy"
});

var suggestion=[];
var adminName = 'admin';

function addSuggest() {
    var book = $('#book').val();
    suggestion.push(book);
    console.log(suggestion)
    alert('送給管理員咯XDDD')
}

function login() {
    var user = $('#user').val();
    var pass = $('#pass').val();
    if(user === adminName && pass ===adminName) {
        document.querySelector('#login').style.display='none';
        document.querySelector('#table').style.display='block';
        $('#table-body').empty();
        for(var i = 0 ; i < suggestion.length; i++){
            $('#table-body').append(`<tr><td>${suggestion[i]}</td></tr>`)
        }
    }
    else {
        alert('GETTT Lostt PLZZZ!!!')
    }
}

$('#home').click(function(){
    document.querySelector('#login').style.display='none';
    document.querySelector('#suggestion').style.display='none';
    document.querySelector('#table').style.display='none';
    document.querySelector('#main-page').style.display='block';
    console.log('home')
})

$('#admin').click(function(){
    document.querySelector('#login').style.display='block';
    document.querySelector('#suggestion').style.display='none';
    document.querySelector('#table').style.display='none';
    document.querySelector('#main-page').style.display='none';
    console.log('home')
})

$('#push').click(function(){
    document.querySelector('#login').style.display='none';
    document.querySelector('#suggestion').style.display='block';
    document.querySelector('#table').style.display='none';
    document.querySelector('#main-page').style.display='none';
    console.log('home')
})