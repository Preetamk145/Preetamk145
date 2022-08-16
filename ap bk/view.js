var but1 =document.getElementById("f1");
var but2 =document.getElementById("f2");
var but3 =document.getElementById("f3");
var but4 =document.getElementById("f4");
var but5 =document.getElementById("f5");
var but6 =document.getElementById("f6");
var close =document.createElement("button");
var flscrn = document.createElement("div");
but1.onclick= function()
{
    flscrn.innerHTML =`<div style="height:100vh;width:100vw;background-color:rgb(144, 143, 143);opacity: 80%;position: fixed;top: 0;z-index:1;">
    </div>
    <div style="width: 48vw;height:90vh; position: fixed;top: 6%;margin: 10px;background-color:rgb(87, 88, 89); z-index: 1;">
    <img src="images/interior.jpg" alt="" style="height: 85vh;width: 45vw;padding:2%;" >
    </div>
    <div style="width: 48vw;height:90vh;position: fixed;right: 0%;top: 6%;margin: 10px;background-color:rgb(87, 88, 89);z-index: 1;text-align:center;color:aliceblue; ">
        <h1>1 BHK Apartment </h1>
        <p> Spacious house <br> Hot water inside <br> 2 4-wheeler parking area <br> 25% off offer closes soon</p>
        <p> Status : Unbooked - 1001 1002 1003 1004</p>
            <a href="book.html" style=" background-color: aliceblue ;text-decoration: none;height:8vh;width:13vw;position:fixed;top: 60%;right: 18%;padding:3vh 0vw 0vh 0vw;">Book</a>
    </div>`
    close.innerHTML= `<button id=\"cross\" style=\"position:fixed ;top:0;right:1%;background:none;margin:5px;width:35px;height:35px;z-index: 1;\"><i class=\"fa fa-close\"></i></button>`;
    document.body.appendChild(flscrn);
    document.body.appendChild(close)
    
}

but2.onclick= function()
{
    flscrn.innerHTML =`<div style="height:100vh;width:100vw;background-color:rgb(144, 143, 143);opacity: 80%;position: fixed;top: 0;z-index:1;">
    </div>
    <div style="width: 48vw;height:90vh; position: fixed;top: 6%;margin: 10px;background-color:rgb(87, 88, 89); z-index: 1;">
    <img src="images/interior.jpg" alt="" style="height: 85vh;width: 45vw;padding:2%;" >
    </div>
    <div style="width: 48vw;height:90vh;position: fixed;right: 0%;top: 6%;margin: 10px;background-color:rgb(87, 88, 89);z-index: 1;text-align:center;color:aliceblue; ">
        <h1>1 BHK Apartment </h1>
        <p> Spacious house <br> Hot water inside <br> 2 4-wheeler parking area <br> 25% off offer closes soon</p>
        <p> Status : Unbooked -2001 2002 2003 2004</p>

            <a href="book.html" style=" background-color: aliceblue ;text-decoration: none;height:8vh;width:13vw;position:fixed;top: 60%;right: 18%;padding:3vh 0vw 0vh 0vw;">Book</a>
    </div>`
    close.innerHTML= `<button id=\"cross\" style=\"position:fixed ;top:0;right:1%;background:none;margin:5px;width:35px;height:35px;z-index: 1;\"><i class=\"fa fa-close\"></i></button>`;
    document.body.appendChild(flscrn);
    document.body.appendChild(close)
    
}
but3.onclick= function()
{
    flscrn.innerHTML =`<div style="height:100vh;width:100vw;background-color:rgb(144, 143, 143);opacity: 80%;position: fixed;top: 0;z-index:1;">
    </div>
    <div style="width: 48vw;height:90vh; position: fixed;top: 6%;margin: 10px;background-color:rgb(87, 88, 89); z-index: 1;">
    <img src="images/interior.jpg" alt="" style="height: 85vh;width: 45vw;padding:2%;" >
    </div>
    <div style="width: 48vw;height:90vh;position: fixed;right: 0%;top: 6%;margin: 10px;background-color:rgb(87, 88, 89);z-index: 1;text-align:center;color:aliceblue; ">
        <h1>1 BHK Apartment </h1>
        <p> Spacious house <br> Hot water inside <br> 2 4-wheeler parking area <br> 25% off offer closes soon</p>
        <p> Status : Unbooked - 3001 3002 3003 3004</p>
            <a href="book.html" style=" background-color: aliceblue ;text-decoration: none;height:8vh;width:13vw;position:fixed;top: 60%;right: 18%;padding:3vh 0vw 0vh 0vw;">Book</a>
    </div>`
    close.innerHTML= `<button id=\"cross\" style=\"position:fixed ;top:0;right:1%;background:none;margin:5px;width:35px;height:35px;z-index: 1;\"><i class=\"fa fa-close\"></i></button>`;
    document.body.appendChild(flscrn);
    document.body.appendChild(close)
    
}
but4.onclick= function()
{
    flscrn.innerHTML =`<div style="height:100vh;width:100vw;background-color:rgb(144, 143, 143);opacity: 80%;position: fixed;top: 0;z-index:1;">
    </div>
    <div style="width: 48vw;height:90vh; position: fixed;top: 6%;margin: 10px;background-color:rgb(87, 88, 89); z-index: 1;">
    <img src="images/interior.jpg" alt="" style="height: 85vh;width: 45vw;padding:2%;" >
    </div>
    <div style="width: 48vw;height:90vh;position: fixed;right: 0%;top: 6%;margin: 10px;background-color:rgb(87, 88, 89);z-index: 1;text-align:center;color:aliceblue; ">
        <h1>1 BHK Apartment </h1>
        <p> Spacious house <br> Hot water inside <br> 2 4-wheeler parking area <br> 25% off offer closes soon</p>
        <p> Status : Unbooked -4001 4002 4003 4004</p>
            <a href="book.html" style=" background-color: aliceblue ;text-decoration: none;height:8vh;width:13vw;position:fixed;top: 60%;right: 18%;padding:3vh 0vw 0vh 0vw;">Book</a>
    </div>`
    close.innerHTML= `<button id=\"cross\" style=\"position:fixed ;top:0;right:1%;background:none;margin:5px;width:35px;height:35px;z-index: 1;\"><i class=\"fa fa-close\"></i></button>`;
    document.body.appendChild(flscrn);
    document.body.appendChild(close)
    
}
but5.onclick= function()
{
    flscrn.innerHTML =`<div style="height:100vh;width:100vw;background-color:rgb(144, 143, 143);opacity: 80%;position: fixed;top: 0;z-index:1;">
    </div>
    <div style="width: 48vw;height:90vh; position: fixed;top: 6%;margin: 10px;background-color:rgb(87, 88, 89); z-index: 1;">
    <img src="images/interior.jpg" alt="" style="height: 85vh;width: 45vw;padding:2%;" >
    </div>
    <div style="width: 48vw;height:90vh;position: fixed;right: 0%;top: 6%;margin: 10px;background-color:rgb(87, 88, 89);z-index: 1;text-align:center;color:aliceblue; ">
        <h1>1 BHK Apartment </h1>
        <p> Spacious house <br> Hot water inside <br> 2 4-wheeler parking area <br> 25% off offer closes soon</p>
        <p> Status : Unbooked -5001 5002 5003 5004</p>
            <a href="book.html" style=" background-color: aliceblue ;text-decoration: none;height:8vh;width:13vw;position:fixed;top: 60%;right: 18%;padding:3vh 0vw 0vh 0vw;">Book</a>
    </div>`
    close.innerHTML= `<button id=\"cross\" style=\"position:fixed ;top:0;right:1%;background:none;margin:5px;width:35px;height:35px;z-index: 1;\"><i class=\"fa fa-close\"></i></button>`;
    document.body.appendChild(flscrn);
    document.body.appendChild(close)
    
}
but6.onclick= function()
{
    flscrn.innerHTML =`<div style="height:100vh;width:100vw;background-color:rgb(144, 143, 143);opacity: 80%;position: fixed;top: 0;z-index:1;">
    </div>
    <div style="width: 48vw;height:90vh; position: fixed;top: 6%;margin: 10px;background-color:rgb(87, 88, 89); z-index: 1;">
    <img src="images/interior.jpg" alt="" style="height: 85vh;width: 45vw;padding:2%;" >
    </div>
    <div style="width: 48vw;height:90vh;position: fixed;right: 0%;top: 6%;margin: 10px;background-color:rgb(87, 88, 89);z-index: 1;text-align:center;color:aliceblue; ">
        <h1>1 BHK Apartment </h1>
        <p> Spacious house <br> Hot water inside <br> 2 4-wheeler parking area <br> 25% off offer closes soon</p>
        <p> Status : Unbooked -6001 6002 6003 6004</p>
            <a href="book.html" style=" background-color: aliceblue ;text-decoration: none;height:8vh;width:13vw;position:fixed;top: 60%;right: 18%;padding:3vh 0vw 0vh 0vw;">Book</a>
    </div>`
    close.innerHTML= `<button id=\"cross\" style=\"position:fixed ;top:0;right:1%;background:none;margin:5px;width:35px;height:35px;z-index: 1;\"><i class=\"fa fa-close\"></i></button>`;
    document.body.appendChild(flscrn);
    document.body.appendChild(close)
    
}

close.onclick = function()
{
    document.body.removeChild(flscrn)
    document.body.removeChild(close)
};