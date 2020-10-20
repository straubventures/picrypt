//Goal: turn a piece of text into a picture.

function Image(name, link, originalText, file) {
    this.name = name,
        this.originalText = originalText,
        this.link = link
}

function uploadPic(e, link, text, time) {
    var img = document.createElement("img");
    img.src = link.value;
    img.alt = text.value;
    var src = document.getElementById("header");
    src.appendChild(img);
    setTimeout(function () {
        img.remove();
    }, time * 1000)
    e.reset();

}
function picrypt(userName, userText, userPicLink, file) {
    let newObj = new Image(
        this.name = userName,
        this.link = userPicLink,
        this.originalText = userText,
        this.file = file)
    console.log(newObj)
}
function resetForm() {
    document.getElementById('form').reset()
}

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name")
    let link = document.getElementById("link")
    let text = document.getElementById("text")
    let time = document.getElementById('time')
    uploadPic(e, link, text, time.value)
    picrypt(name.value, link.value, text.value, file.value)
    e.preventDefault();
    e.srcElement.reset();




});

