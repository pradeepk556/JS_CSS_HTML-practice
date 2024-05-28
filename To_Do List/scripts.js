
let title = document.getElementById('title');
let description = document.getElementById('description');

function addItem() {
    let items = localStorage.getItem('items');
    if (items == null) {
        itemsObj = []
    }
    else {
        itemsObj = JSON.parse(items);
    }
    itemsObj.push([title.value, description.value]);
    title.value = "";
    description.value = "";
    localStorage.setItem('items', JSON.stringify(itemsObj));
    showItems();
}


function deleted(index) {
    let items = localStorage.getItem('items');

    itemsObj = JSON.parse(items);
    itemsObj.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(itemsObj));

    showItems();
}

function showItems() {
    let items = localStorage.getItem('items');
    if (items == null) {
        itemsObj = []
    }
    else {
        itemsObj = JSON.parse(items);
    }
    let rows = "";
    itemsObj.forEach((element, index) => {
        rows += `<tr>
                    <td>${index + 1}</td>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td>
                        <buttton class="deleteButton"  onclick="deleted(${index})">Delete</button>
                    </td>
                </tr>`;
    });
    document.querySelectorAll(".items")[0].innerHTML = rows;
}

function clearAll() {
    if (confirm("Are you sure you want's to clear all your items ?")) {
        localStorage.clear();
        showItems();
    }
}