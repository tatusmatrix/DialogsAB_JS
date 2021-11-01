//myGreeting_anonymous();  // būs kļūda - vēl nedrīkst izmantot
//myGreeting();
function myGreeting() {
  alert('hello');
}

const myGreeting_anonymous = function() {
    alert('hello');
  }
//myGreeting();
//myGreeting_anonymous();

const poga = document.querySelectorAll(`button`);
console.log(document.getElementById('me').innerHTML);

for (let i = 0; i < poga.length; i++) {
  poga[i].addEventListener(`click`, function () {
    alert(`Hello From ${poga[i].textContent} index Of button :)`);
    console.log(poga[i]);
  });
}

document.getElementById('me').innerHTML = "Don't press me";

/*
const myButton_get_me = document.getElementById('me');
const myButton_get_me_also = document.getElementById('me_also');

myButton_get_me.onclick = function () {
  alert('hello from get element (me)');
}

myButton_get_me_also.onclick = function () {
  alert('hello from get element (me also)');
}
*/

//const myButton = document.querySelectorAll('button');
/*
myButton.forEach(onclick = function (element, index, array) {
  console.log(array);
  alert('hello from selector (all buttons - '+index+' - element)');
});
*/
/*
myButton.forEach((element, index, array) => onclick = function (element, index, array) {
    alert('hello from selector (all buttons)'); 
    console.log(array);
    console.log(index);
    //alert('hello from selector (all buttons '+ index + ')');    
 });
*/