//Goal: turn a piece of text into a picture.

function Image(name, link, originalText, file) {
    this.name = name,
        this.originalText = originalText,
        this.link = link
}


function uploadPic(link, text) {
    var img = document.createElement("img");
    img.src = link.value;
    img.alt = text.value;
    var src = document.getElementById("header");
    src.appendChild(img);
}
function picrypt(userName, userText, userPicLink, file) {
    let newObj = new Image(
        this.name = userName,
        this.link = userPicLink,
        this.originalText = userText,
        this.file = file)
    console.log(newObj)
}

document.getElementById("form").addEventListener("submit", function (e) {

    let name = document.getElementById("name")
    let link = document.getElementById("link")
    let text = document.getElementById("text")
    uploadPic(link, text)
    e.preventDefault()
    picrypt(name.value, link.value, text.value, file.value)
});

