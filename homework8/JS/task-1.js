let mainForm = document.forms.homework;
mainForm.addEventListener("submit", submitNewComment);

function submitNewComment(event) {
    event.preventDefault();

    let formData = new FormData(this);
    let com = formData.get("text");

    if (com) {
        let spanContainerForComments = document.createElement("spanContainerForComments");
        console.log(spanContainerForComments);

        let avatarOfComment = document.createElement("img");
        avatarOfComment.setAttribute("height", "50px");
        avatarOfComment.setAttribute("weight", "50px");
        avatarOfComment.setAttribute("src", "img/anapa_park.jpg");
        spanContainerForComments.appendChild(avatarOfComment);

        let textFromComment = mainForm.elements.text.value;
        console.log(textFromComment);

        let newComment = document.createElement("textarea");
        newComment.innerText=textFromComment;
        newComment.setAttribute("class", "new-comment");
        newComment.setAttribute("rows", "8");
        newComment.setAttribute("cols", "75");
        console.log(newComment);
        spanContainerForComments.appendChild(newComment);

        let timeDate = document.createElement("p");
        let date = new Date();
        timeDate.innerText = date;
        console.log(timeDate);
        spanContainerForComments.appendChild(timeDate);

        document.body.appendChild(spanContainerForComments);
    }

}
