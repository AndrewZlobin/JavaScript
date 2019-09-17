let elem = document.getElementById("button");
elem.addEventListener("click", addComment);

function addComment() {
    let commentValue = document.getElementById('newComment').value;
    if (!commentValue) {
        alert("Нет комментария, заполните поле!");
        return;
    }
    if (commentValue) {
        let comment = document.createElement("p");
        comment.innerText = commentValue;
        comment.classList.add("commentP");
        let fieldset = document.getElementById("comFieldset");
        let div = document.createElement("div");
        div.classList.add("commentDiv");
        let date = new Date();
        let comDate = document.createElement("p");
        comDate.classList.add('comDate');
        comDate.innerText = date;
        let comName = document.createElement("p");
        comName.classList.add("comName");
        comName.innerText = "by Author";
        let comAva = document.createElement("img");
        comAva.setAttribute("src", "img/");
        comAva.setAttribute("alt", "NOPE!");
        //fieldset.insertBefore(div, fieldset.firstChild);
        div.appendChild(comAva);
        div.appendChild(comName);
        div.appendChild(comDate);
        div.appendChild(comment);
        fieldset.appendChild(div);
    }
}