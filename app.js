// simple to do list add

const listItem = document.querySelectorAll('.list-item');

// for(let i = 0; i < listItem.length; i++){
//     let item = listItem[i];
//     item.addEventListener('click', function (event) {
//        event.target.parentNode.removeChild(event.target)
//     })
// }

const mainList = document.querySelector('.list');
mainList.addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target)
})

// add elements 

const btn = document.getElementById('btn');
btn.addEventListener('click', function (event) {
    var listParent = document.querySelector('.list');
    var newAddName = document.createElement('li');
    newAddName.innerText = 'Next Player';
    listParent.appendChild(newAddName);
})