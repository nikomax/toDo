var toDoItems = document.querySelectorAll('.js-todo-item');
var list = document.querySelector('.js-list');
var closeBtns = document.getElementsByClassName('close-btn');
var addBtn = document.querySelector('.js-add-btn');
var toDoInput = document.querySelector('.js-input');
var itemsDone = document.querySelectorAll('.is-checked');
var filterDoneBtn = document.querySelector('.js-filter-done');
var filterAllBtn = document.querySelector('.js-filter-all');
var filterToDoBtn = document.querySelector('.js-filter-to-do');
var notDoneItems = document.querySelectorAll('.js-todo-item:not(.is-checked)');

function updItemsArr() {
    toDoItems = document.querySelectorAll('.js-todo-item');
    itemsDone = document.querySelectorAll('.is-checked');
    notDoneItems = document.querySelectorAll('.js-todo-item:not(.is-checked)');
    console.log(toDoItems);
}

for ( var i = 0; i < toDoItems.length; i++) {
    var btnClose = document.createElement('button');
    btnClose.className = 'close-btn';
    btnClose.innerHTML = 'x';
    toDoItems[i].appendChild(btnClose);
}

function addCloseEvent() {
    for (var i = 0; i < closeBtns.length; i++) {
        closeBtns[i].addEventListener('click', function() {
            var removedItem = this.parentElement;
            removedItem.remove();
        });
    }
}

addCloseEvent();

list.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('is-checked');
        updItemsArr();
    }
}, false);

function newElement() {
    var newItem = document.createElement('li');
    newItem.classList.add('js-todo-item','list__item');
    var inputText = toDoInput.value;
    newItem.innerHTML = inputText + '<button class="close-btn">x</button>';
    if (inputText.length === 0) {
        return;
    } else {
        document.querySelector('.js-list').appendChild(newItem);
        updItemsArr();
    }
    document.querySelector('.js-input').value = '';
    addCloseEvent();
}

toDoInput.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
        newElement();
    }
});

addBtn.addEventListener('click', newElement);

function filter(items) {
    list.innerHTML = '';
    for ( var i = 0; i < items.length; i++) {
        var item = items[i];
        list.appendChild(item);
    }
}

filterDoneBtn.addEventListener('click', function () {
    filter(itemsDone);
});

filterAllBtn.addEventListener('click', function () {
    filter(toDoItems);
});

filterToDoBtn.addEventListener('click', function () {
    filter(notDoneItems);
});