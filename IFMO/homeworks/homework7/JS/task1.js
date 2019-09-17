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

    let newTableGenerator = {
        init: function(data) {
            this.table =document.createElement('table');
            this.table.setAttribute('border', '1');
            this.data = data;
            console.log(this);
        },
        genCaption: function() {
            let captionRow = this.table.insertRow();
            for(key in this.data[0]){
                let cell = captionRow.insertCell();
                cell.innerText = key;
                console.log(key);
                cell.classList.add('caption-cell');
            }
        },
        genContent: function() {
            for (let i = 0; i < this.data.length; i++) {
                let row = this.table.insertRow();
                for(let key in this.data[i]){
                    let cell = row.insertCell();
                    cell.innerText = this.data[i][key];
                    cell.classList.add('content-cell');
                }
            }
        },

        getTable: function(data) {

            this.init(data);
            this.genCaption();
            this.genContent();
            return this.table;
        }
    };

//newTableGenerator(articles);

