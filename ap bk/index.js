var but =document.getElementById("view");
var flscrn = document.createElement("div");
var fl=0;

but.onclick = function()
{
    window.open("view.html");
}

var newWidth = window.innerWidth;
    var newHeight = window.innerHeight; 
    if(newHeight < 464 || newWidth <1059  && fl==0)
    {
        flscrn.innerHTML=`<div style="position:fixed;height: 100%;width: 100%;z-index: 2;top: 0;background-color: aliceblue;color: black;text-align: center;font-size: 2rem;"> This website can be viewed in desktop  only <br> if it is a desktop screen then maximize</div>`;
        document.body.appendChild(flscrn);
        fl=1;
    }


window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight; 
    if(newHeight < 464 || newWidth <1059  && fl==0)
    {
        flscrn.innerHTML=`<div style="position:fixed;height: 100%;width: 100%;z-index: 2;top: 0;background-color: aliceblue;color: black;text-align: center;font-size: 2rem;"> This website can be viewed in desktop  only <br> if it is a desktop screen then maximize</div>`;
        document.body.appendChild(flscrn);
        fl=1;
    }
    if(newHeight >= 464 && newWidth >= 1059 && fl==1)
    {
        document.body.removeChild(flscrn);
        fl=0;
    }
});

// 464 1059
