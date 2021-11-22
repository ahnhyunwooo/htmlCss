function changeImage(num) {
    var image = $('.header_container');
    if(num==1){
        image.css({"background":"url(./img/1.jpg"});
        image.css({"background-position":"center"});
        image.css({"background-size":"cover"});
    }else if(num==2){
        image.css({"background":"url(./img/2.jpg"});
        image.css({"background-position":"center"});
        image.css({"background-size":"cover"});
    }else if(num==3){
        image.css({"background":"url(./img/3.jpg"});
        image.css({"background-position":"center"});
        image.css({"background-size":"cover"});
    }else if(num==4){
        image.css({"background":"url(./img/4.jpg"});
        image.css({"background-position":"center"});
        image.css({"background-size":"cover"});
    }else if(num==5){
        image.css({"background":"url(./img/5.jpg"});
        image.css({"background-position":"center"});
        image.css({"background-size":"cover"});
    }else{
        image.css({"background":"url(./img/6.jpg"});
        image.css({"background-position":"center"});
        image.css({"background-size":"cover"});
    }
}