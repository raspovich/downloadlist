var gifs = [
    "images/1.gif",
    "images/2.gif",
    "images/3.gif",
    "images/4.gif",
    "images/5.gif",
    "images/6.gif"
]

function randImg() {
    var size = gifs.length
    var x = Math.floor(size * Math.random())
    document.getElementById('gif').src = gifs[x];
}

randImg();