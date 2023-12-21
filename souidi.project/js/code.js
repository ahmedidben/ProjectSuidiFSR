function swipimgL(){
   let imag= document.getElementById("headimg");
   imag.src='img/3_0.jpg'
}
function swipimgR(){
    let imag= document.getElementById("headimg");
    imag.src='img/900-02_1.jpg'
 }
 let i=0;
function NW(){
   let a= document.getElementById("news1").value;
   var table=["controle finale de S3 a 2024/01/02 ","Imortant!:controle finale de S3 a 2024/01/02 ","controle finale de S3 a 2024/01/02!!!! "];
   if(i<3){
         document.getElementById("news1").innerHTML=table[i];
         setTimeout(function(){
            document.getElementById("news1").style.opacity="0.4";
            document.getElementById("news1").style.backgroundColor="#eee";
         },3000);
         setTimeout(function(){
            document.getElementById("news1").style.opacity="1";
            document.getElementById("news1").style.backgroundColor="red";
         },6000);
         i++;
      }
     else{
         i=0;
     }
   setInterval(NW,9000);

}