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
    imgDiv.setAttribute("class","imgDiv")

    var ratingDiv=document.createElement("div");
    ratingDiv.setAttribute("class","ratingDiv")
    var line1=document.createElement("div")
    line1.setAttribute("class","line1 line")
    
    var rating=document.createElement("div")
    rating.setAttribute("class","rating")
    rating.innerHTML="<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span>"
    var line2=document.createElement("div");
    line2.setAttribute("class","line2 line")
    ratingDiv.append(line1,rating,line2)
    var title=document.createElement("p");
    title.innerText=elem.title
    title.setAttribute("class","product-title")
    var price=document.createElement("h2");
    price.innerText=elem.price;
    price.setAttribute("class","product-price")

    var cartDiv=document.createElement("div")
    cartDiv.setAttribute("class","cartDiv")

    var cartBtn=document.createElement("button")
    var cartBtnHeart=document.createElement("a")
    cartBtnHeart.setAttribute("href","#")
    cartBtnHeart.setAttribute("class","fa-solid fa-heart")

    var cartBtnCompare=document.createElement("a")
    cartBtnCompare.setAttribute("href","#")
    cartBtnCompare.setAttribute("class","fa-solid fa-signal")

    cartBtn.setAttribute("class","cartBtn")
    var cartlogo=document.createElement("span")
    var cartText=document.createElement("span")
    cartText.innerText="Add to cart"
    cartlogo.setAttribute("class","fa-solid fa-cart-shopping")
    cartBtn.append(cartlogo,cartText)

    var productDetail=document.createElement("div")
    productDetail.setAttribute("class","productDetail")
    productDetail.append(title,ratingDiv,price,cartDiv)
    cartDiv.append(cartBtnHeart,cartBtn,cartBtnCompare)
    div.append(imgDiv,productDetail);
    document.querySelector("#products").append(div)
})


// *********PRODUCT CODE:BY PARVEJ***********END*****//

