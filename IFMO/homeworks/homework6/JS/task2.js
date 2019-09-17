let articles = [
    {
        id: 1,
        title: "JS",
        description: "Описание",
        author: "Михаил"
    },
    {
        id: 2,
        title: "PHP",
        description: "Описание",
        author: "Александр"
    },
    {
        id: 3,
        title: "HTML",
        description: "Описание",
        author: "Петр"
    },
    {
        id: 4,
        title: "CSS",
        description: "Описание",
        author: "Василий"
    },
    {
        id: 5,
        title: "MySQL",
        description: "Описание",
        author: "Иннокентий"
    }
];

function createHtmlFromArray(arr) {
    let allTable = document.getElementsByTagName("table");
    let table = allTable[0];
    let rowKeys = table.insertRow(0);
    table.setAttribute("border", "2");
    let arrZeroIndex = arr[0];
    console.log(arrZeroIndex);
    let objectKeys = Object.keys(arrZeroIndex);
    console.log(objectKeys);
    for (let i = 0; i < objectKeys.length; i++) {
        let cellKeys = rowKeys.insertCell(i);
        cellKeys.innerText = objectKeys[i];
        cellKeys.setAttribute("class", "header-row");
        console.log(cellKeys);
    }
    for (let i = 0; i < arr.length; i++) {
        let rowOther = table.insertRow();
        console.log(rowOther);
        let object = arr[i];
        for (let key in object) {
            cellOther = rowOther.insertCell();
            cellOther.setAttribute("class", "other-elems");
            cellOther.innerText = object[key];
        }
    }
}
createHtmlFromArray(articles);