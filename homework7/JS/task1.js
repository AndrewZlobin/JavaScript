/*Написать функцию, которая будет осуществлять сортировку
 таблицы из  предыдущего дз по значениям столбца при нажатии на название этого столбца.*/

// Из предыдущего дз берем массив articles и функцию, которая создает из массива таблицу
// Поменяем в description текст, чтобы по данному свойству можно было сортировать

let articles = [
    {
        id: 1,
        title: "JS",
        description: "Клиентская сторона сервера",
        author: "Михаил"
    },
    {
        id: 2,
        title: "PHP",
        description: "Серверная сторона",
        author: "Александр"
    },
    {
        id: 3,
        title: "HTML",
        description: "Разметка страницы",
        author: "Петр"
    },
    {
        id: 4,
        title: "CSS",
        description: "Стили для страницы",
        author: "Василий"
    },
    {
        id: 5,
        title: "MySQL",
        description: "Базы данных",
        author: "Иннокентий"
    }
];

function newTableGenerator (arr) {
    let div = document.getElementById("for_table");
    console.log(div);
    let createTable = document.createElement('table');
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    console.log(thead);
    div.appendChild(createTable);
    createTable.appendChild(thead);
    createTable.appendChild(tbody);
    createTable.setAttribute('border', '2');
    let captionRow = thead.insertRow();
    console.log(thead);
    console.log(arr[0]);
    for (let prop in arr[0]) {
        let cell = captionRow.insertCell();
        cell.innerText = prop.toUpperCase();
        cell.classList.add('caption-cell');
    }
    for (let i = 0; i < arr.length; i++) {
        let row = tbody.insertRow();
        for (let prop in arr[i]) {
            let anotherCell = row.insertCell();
            anotherCell.innerText = arr[i][prop];
            anotherCell.classList.add('content-cell');
        }
    }

    let clickable = document.getElementsByClassName("caption-cell");
    let cellElems = document.getElementsByClassName("content-cell");
    console.log(cellElems);

    for (let i = 0; i < cellElems.length; i++) {
        //clickable[i].addEventListener("click", someFunction);
        clickable[i].addEventListener("click", someFunction);

        function someFunction(event) {
            let eventTarget = event.target.innerHTML;
            console.log(eventTarget);
            let htmlDocumentToArray = arr.slice();
            console.log(htmlDocumentToArray);
            htmlDocumentToArray.sort(function (first, second) {
                //let var1 = first[eventTarget];
                //let var2 = second[eventTarget];
                if (eventTarget < htmlDocumentToArray) {
                    return -1;
                }
                if (eventTarget > htmlDocumentToArray) {
                    return 1;
                }
                return 0;
            });
            for (let i = 0; i < htmlDocumentToArray.length; i++) {
                tbody.remove();

                let newTBody = document.createElement("tbody");
                createTable.appendChild(newTBody);
                let newRow = newTBody.insertRow();

                for (let prop in htmlDocumentToArray[i]) {
                    let newCell = newRow.insertCell();
                    newCell.innerText = htmlDocumentToArray[i][prop];
                    newCell.classList.add('content-cell');
                    console.log(htmlDocumentToArray[i][prop]);
                }

            }
        }
    }
}

/* for (let i=0; i<=(sortTable.length-1); i++) {
            let tr=document.createElement('tr');
            //самовыпил строк
            let removeTr=document.getElementById(i);
            removeTr.remove();

            for (let key in sortTable[i]){
                let td=document.createElement('td');
                td.innerText=sortTable[i][key];
                tr.appendChild(td);
            }
            tr.setAttribute('id',i);
            table.appendChild(tr);*/



newTableGenerator(articles);

/*function sortBooks(arr) {
    arr.sort(function (a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
    return arr;
}*/



//     genContent: function () {
//         for (let i = 0; i < this.data.length; i++) {
//             let row = this.table.insertRow();
//             for (let key in this.data[i]) {
//                 let cell = row.insertCell();
//                 cell.innerText = this.data[i][key];
//                 cell.classList.add('content-cell');
//             }
//         }
//     },
//     getTable: function (arr_data) {
//         this.init(arr_data);
//         this.genCaption();
//         this.genContent();
//         return this.table;
//     }
// };

// let tableContainer = document.getElementById("for_table");
// tableContainer.appendChild(tableGenerator.getTable(articles));

// function createHtmlFromArray(arr) {
//     let allTable = document.getElementsByTagName("table");
//     let table = allTable[0];
//     let rowKeys = table.insertRow(0);
//     table.setAttribute("border", "2");
//     table.setAttribute("id","grid");
//     let arrZeroIndex = arr[0];
//     console.log(arrZeroIndex);
//     let objectKeys = Object.keys(arrZeroIndex);
//     console.log(objectKeys[0]);
//     for (let i = 0; i < objectKeys.length; i++) {
//         let cellKeys = rowKeys.insertCell(i);
//         cellKeys.innerText = objectKeys[i];
//         cellKeys.setAttribute("class", "header-row");
//         console.log(cellKeys);
//     }
//     for (let i = 0; i < arr.length; i++) {
//         let rowOther = table.insertRow();
//         console.log(rowOther);
//         let object = arr[i];
//         for (let key in object) {
//             cellOther = rowOther.insertCell();
//             cellOther.setAttribute("class", "other-elems");
//             cellOther.innerText = object[key];
//         }
//     }
// }
// //createHtmlFromArray(articles);
// console.log(articles[0].author);
//
// //let newObjectKeys = Object.keys(articles[0]);
// newObjectKeys = document.querySelectorAll(".header-row");
// console.log(newObjectKeys);
//
// for (let i = 0; i < newObjectKeys.length; i++) {
//     console.log(newObjectKeys[i]);
//     newObjectKeys[i].addEventListener('click', sortByClick);
// }
//
// function sortByClick() {
//     for (let i = 0; i < articles.length; i++) {
//         console.log(articles[i].title);
//         console.log(typeof articles[i].title);
//
//     }
//
// }