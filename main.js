canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image="racing.jpg";
car1_image="car1.png";
car1_x=10;
car1_y=10;
car1_width=120;
car1_height=70;

car2_image="car2.png";
car2_x=10;
car2_y=130;
car2_width=120;
car2_height=70;

function addimage(){
    bg_imgtag=new Image();
    bg_imgtag.onload=uploadbackground;
    bg_imgtag.src=background_image;
    car1_imgtag=new Image();
    car1_imgtag.onload=uploadcar;
    car1_imgtag.src=car1_image;

      bg_imgtag=new Image();
    bg_imgtag.onload=uploadbackground;
    bg_imgtag.src=background_image;
    car2_imgtag=new Image();
    car2_imgtag.onload=uploadcar;
    car2_imgtag.src=car2_image;
}
function uploadbackground(){
ctx.drawImage(bg_imgtag,0,0,canvas.width,canvas.height);
}
function uploadcar(){
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height);

    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38'){
        up();
        console.log ("upkeypressed");
    }
    if(keypressed=='37'){
        left();
        console.log ("leftkeypressed");
    }
    if(keypressed=='39'){
        right();
        console.log ("rightkeypressed");
    }
    if(keypressed=='40'){
        down();
        console.log ("downkeypressed");
    }
}
function up(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        console.log("when up pressed y="+car1_y);
        uploadbackground();
        uploadcar();
    }
}
function down(){
    if(car1_y<=500){
        car1_y=car1_y+10;
        console.log("when down pressed y="+car1_y);
        uploadbackground();
        uploadcar();
    }
}
function right(){
    if(car1_x<=700){
        car1_x=car1_x+10;
        console.log("when right pressed x="+car1_x);
        uploadbackground();
        uploadcar();
    }
}
function left(){
    if(car1_x>=0){
        car1_x=car1_x-10;
        console.log("when left pressed x="+car1_x);
        uploadbackground();
        uploadcar();
    }
}




