function hello(){
    window.location = "wouldyoulike.html";
}
function no(){
    window.location = "no.html";
}
function commitrickroll(){
    window.location = "https://www.youtube.com/watch?v=clwgJ_T2cdQ"
}
function yes(){
    window.location = "memes.html";
}
var picture = new Array(
"39 buried 0 found meme.jpg",
"abbey and ms hazeldeen.jpg",
"accidentally restarting the soviet ubnion meme.jpg",
"big eye anime girl meme.jpg",
"cheating on each other with each other meme.jpg",
"child neglect.jpg",
"florida eat your familty frist meme.jpg",
"glonk spirit animal meme.jpg",
"hears music meme.jpg",
"how to care for your among us meme.jpg",
"i used to be uglier meme.jpg",
"internet argument meaning.jpg",
"introverts meme.jpg",
"its the rizz man meme.jpg",
"newfie lifestages.jpeg",
"rick roll author meme.jpg",
"shrek backwards meme.jpg",
"shrek goofy meme.jpg",
"skipping the stairs meme.jpg",
"strategy games them vs me.jpg",
"sus cleaning bear meme.jpg",
"tattoo removal.jpg",
"thank god im athiest thank who meme.jpg",
"too small to play violin.jpg",
"whatever daddy wants daddy gets.jpg",
"when i sit down with a zip up hoodie meme.jpg",
"where is my birth certificate meme.jpg",
"wtf car is that.jpg",
"bed monster.jpg",
"japanese is easy meme.jpg",
"nuclear bomb meme.jpg",
"PeppaPigAldridge2009.jpg",
"vegan pain.jpg",
"uh jeff meme.jpg",
"sexy barney.jpeg",
"pen clicking meme.jpg",
"wow an fire.jpeg");

function meme(){
    var randomnumber = Math.floor(Math.random() * picture.length);
    document.getElementById("memepic").src = picture[randomnumber];
}