(function(){
    const doc = document;
    let pic1 = doc.querySelector("#first div")
    let leftdiv = doc.querySelector("#second div div #left div")
    let rightdiv = doc.querySelector("#second div div #right div")


    pic1.addEventListener("mouseover",function(){
        pic1.style.border = "20px solid green";
    });
    pic1.addEventListener("mouseout",function(){
        pic1.style.border = "20px solid transparent";
    });
    leftdiv.addEventListener("mouseover",function(){
        leftdiv.style.opacity = 0.8;
    });
    leftdiv.addEventListener("mouseout",function(){
        leftdiv.style.opacity = 1;
    });
    rightdiv.addEventListener("mouseover",function(){
        rightdiv.style.opacity = 0.8;
    });
    rightdiv.addEventListener("mouseout",function(){
        rightdiv.style.opacity = 1;
    });
})();
