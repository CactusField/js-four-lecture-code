/*const heading1 = document.querySelector('h1');
console.log(heading1);

const paragraph = document.getElementById('some-text')
console.log(paragraph);


const listItems = document.getElementsByTagName('li');
console.log(listItems);


const classItems = document.querySelectorAll('.ordered-item');
console.log(classItems)*/


//function clickme(){
//    alert('Wow!');
//}





//MINI PROJECT CODE//



const todoinput = document.getElementById('todo-input');
let todoinputvalue = '';

todoinput.addEventListener('change' , function(event){
    todoinputvalue = event.target.value;
})


function createtodo(){
    //1. create a list item
    //2. give list item text content from the input above
    //3. add and event to the li that allows the user to remove it



    const newtodo = document.createElement('li');
    newtodo.innertext = todoinputvalue;

    newtodo.addEventListener('click' , function(){
        newtodo.remove();
    })

    document.querySelector('#task-list').appendChild
    (newtodo);

    todoinput.value
}