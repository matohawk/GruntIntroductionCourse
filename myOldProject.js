var i = 0;

var myMainTitle = document.getElementsByClassName('my-main-title');
myMainTitle[0].style.position = 'relative';

setInterval(
    function(){
        if(i != 0){
            myMainTitle[0].style.left="100px";
            i = 0;
        } else {
            myMainTitle[0].style.left="0";
            i = 1;
        }
},500);
