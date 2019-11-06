function verander() {
    //hide foto 1
    document.getElementById("foto1").style.display= "none";
    //show foto 2
    document.getElementById("foto2").style.display="block";
    document.getElementById("foto2").style.margin="0 auto";
    
}

//en dan voor elke foto
function verander2() {
    //hide foto 1
    document.getElementById("foto2").style.display= "none";
    //show foto 2
    document.getElementById("foto3").style.display="block";
    document.getElementById("foto3").style.margin="0 auto";
}
function verander3() {
    //hide foto 1
    document.getElementById("foto3").style.display= "none";
    //show foto 2
    document.getElementById("foto4").style.display="block";
    document.getElementById("foto4").style.margin="0 auto";
}
function verander4() {
    //hide foto 1
    document.getElementById("foto4").style.display= "none";
    //show foto 2
    document.getElementById("foto1").style.display="block";
    document.getElementById("foto1").style.margin="0 auto";
}

datum= new Date()
document.getElementById("vandaag").innerHTML = datum.getDate() + "-" + (datum.getMonth()+1)
    + "-" + datum.getFullYear();

    var likes=0, dislikes=0;

//Functions to increase likes and immediately calculate bar widths
function like(){
	likes++;
	calculateBar();
}
function dislike(){
	dislikes++;
	calculateBar();
}

//Calculates bar widths
function calculateBar(){
	var total= likes+dislikes;
    //Simple math to calculate percentages
	var percentageLikes=(likes/total)*100;
	var percentageDislikes=(dislikes/total)*100;

    //We need to apply the widths to our elements
	document.getElementById('likes').style.width=percentageLikes.toString()+"%";
	document.getElementById('dislikes').style.width=percentageDislikes.toString()+"%";
    
    //We add the numbers on the buttons, just to show how to
    document.getElementById('likeButton').value="Like ("+likes.toString()+")";
    document.getElementById('dislikeButton').value="Disike ("+dislikes.toString()+")";

}

calculateBar();

