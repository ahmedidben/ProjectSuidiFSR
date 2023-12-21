function presnt(){
    let T=['T','h','i','s',' ','i','s',' ','b','i','l','d',' ','B','y',' ','I','D','B','E','N','A','D','I','.','.','.','\n ',' T','H','A','N','K','S',' ','F','O','R',' ','U','S','I','N','G',' ','O','U','R',' ','S','I','T','E','\n',' ','W','E',' ','H','O','P','E',' ','Y','O','U',' ','E','N','J','O','Y',' ','I','T','\n',' ','I','F',' ','Y','O','U',' ','H','A','V','E',' ','A','N','Y',' ','P','R','O','B','L','E','M',' ','C','O','N','T','A','C','T',' ','U','S',' ','A','T','\n',' ','I','D','B','E','N','A','D','I','@','G','M','A','I','L','.','C','O','M','  ', '\n',' ','T','H','A','N','K','S',' ','A','G','A','I','N','\n',' ','I','D','B','E','N','A','D','I',' ','T','E','A','M',' ', ':',')'];
    let i=0;

    var x = setInterval(function(){
        document.getElementById('cont').innerHTML+=T[i];
        i++;
        if(i==T.length){
            clearInterval(x);
        }
     },50);
    setTimeout(function(){
        document.getElementById('cont').style.opacity=0.5;
        document.images[0].style.display='none';
    },9500);
    setTimeout(function(){
        document.getElementById('cont').style.display='none';
        document.body.style.background='initial';
        document.getElementById("im").style.display='none';
        
    },10500);
    setTimeout(function(){
        window.location.href='index.html';
    },10600);
}