`use-strict`;
//selecting elements
const form = document.querySelector(`#fruit`);
const demo = document.querySelector(`#demo`);
const btnAdd = document.querySelector(`#btn`);
const basket = document.querySelector(`#basket`);


btnAdd.addEventListener(`click`, function () {
  let fruitName = form.elements[`fruitName`];
  let fruit = fruitName.value;
  // alert(fruit);
   basket.innerHTML = fruit;
});
