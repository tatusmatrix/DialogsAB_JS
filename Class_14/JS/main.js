draw();

const myButton_get_me = document.getElementById('me');
const myButton_get_me_also = document.getElementById('me_also');

const myButton_select_me = document.querySelector('#me');
const myButton_select_me_also = document.querySelector('#me_also');

// const myButton = document.querySelectorAll('button');
// const myButton = document.querySelectorAll('#me');

/*
//var a='';
 myButton.forEach((element, index, array) => onclick = function () {
    alert('hello from selector (all buttons)'); 
     //console.log(array);
     //a = a + index;
     //console.log(a);
     //alert('hello from selector (all buttons '+ index + ')');    
 });
*/

myButton_select_me.onclick = function () {
    alert('hello from select (me)');
}
myButton_select_me_also.onclick = function () {
    alert('hello from select (me also)');
}

myButton_get_me.onclick = function () {
    alert('hello from get element (me)');
}
myButton_get_me_also.onclick = function () {
    alert('hello from get element (me also)');
}

function help() {
    alert('hello from selector (all buttons)');
}


//console.log(typeof("me"));
//console.log(typeof('me'));
//console.log("me" === 'me');
