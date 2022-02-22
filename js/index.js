//IT IS LINKED TO THE INDEX.HTML FILE//

// *********PRODUCT CODE:BY PARVEJ***********START*****//
var productData=JSON.parse(localStorage.getItem("productData"));
productData.map(function(elem,index,arr){
    var div=document.createElement("div");
    div.setAttribute("class","product-div")
    var imgDiv=document.createElement("div")
    var img=document.createElement("img");
    img.setAttribute('src',elem.image)
    img.setAttribute('class',"product-image")
    imgDiv.append(img)
    console.log(elem.image)
    var title=document.createElement("strong");
    title.innerText=elem.title
    title.setAttribute("class","product-title")
    var price=document.createElement("h2");
    price.innerText=elem.price;
    price.setAttribute("class","product-price")

    div.append(imgDiv,title,price);
    document.querySelector("#products").append(div)
})


// *********PRODUCT CODE:BY PARVEJ***********END*****//

console.log("start coding now!")
console.log("Rise up");

console.log('Another Conole from harsh');

