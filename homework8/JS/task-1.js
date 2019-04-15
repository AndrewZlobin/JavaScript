let mainForm = document.forms.homework;
mainForm.addEventListener("submit", submitNewComment);

function submitNewComment(event) {
    event.preventDefault();

    let formData = new FormData(this);
    let com = formData.get("text");

    if (com) {
        let span = document.createElement("span");
        console.log(span);

        let avatarOfComment = document.createElement("img");
        avatarOfComment.setAttribute("height", "50px");
        avatarOfComment.setAttribute("weight", "50px");
        avatarOfComment.setAttribute("src", "img/anapa_park.jpg");
        span.appendChild(avatarOfComment);

        let comment = mainForm.elements.text.value;
        console.log(comment);

        let newComment = document.createElement("textarea");
        newComment.innerText=comment;
        newComment.setAttribute("class", "new-comment");
        newComment.setAttribute("rows", "8");
        newComment.setAttribute("cols", "75");
        console.log(newComment);
        span.appendChild(newComment);

        let timeDate = document.createElement("p");
        let date = new Date();
        timeDate.innerText = date;
        console.log(timeDate);
        span.appendChild(timeDate);

        document.body.appendChild(span);
    }

}
