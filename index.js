//Assign Value in the Object
let home= document.getElementById("home_score");
let guest= document.getElementById("guest_score");
let dominant = document.getElementById("dominant_score");
let Home_Score =0;
let Guest_Score =0;

//Home Score
function OnePoint(){
Home_Score +=1;
home.innerText=Home_Score;
}
function TwoPoint(){
 Home_Score +=2;
 home.innerText=Home_Score;
}
function ThreePoint(){
    Home_Score +=3;
    home.innerText=Home_Score;
}

//Guest Score
function G_OnePoint(){
    Guest_Score +=1;
    guest.innerText=Guest_Score;
}
function G_TwoPoint(){
     Guest_Score +=2;
     guest.innerText=Guest_Score;
}
function G_ThreePoint(){
     Guest_Score +=3;
     guest.innerText=Guest_Score;
}






    