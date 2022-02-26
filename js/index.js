//IT IS LINKED TO THE INDEX.HTML FILE//

// *********PRODUCT CODE:BY PARVEJ***********START*****//
var productData=JSON.parse(localStorage.getItem("productData"));
var cart=JSON.parse(localStorage.getItem("cart"))||[]
var cartCount=JSON.parse(localStorage.getItem("cartCount"))
document.querySelector("#mycart-count").innerHTML=cartCount;
productData.map(function(elem,index,arr){
    var div=document.createElement("div");
    div.setAttribute("class","product-div")

    var imgDiv=document.createElement("div")
    var img=document.createElement("img");
    img.setAttribute('src',elem.image)
    img.setAttribute('class',"product-image")
    imgDiv.append(img)
    imgDiv.setAttribute("class","imgDiv")
    imgDiv.addEventListener("click",function () {
        localStorage.setItem("showItem",JSON.stringify(elem))
        document.location='showItem.html'
    })

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
    price.innerHTML="&#8377;  "+elem.price;
    price.setAttribute("class","product-price")

    var cartDiv=document.createElement("div")
    cartDiv.setAttribute("class","cartDiv")

    var cartBtn=document.createElement("button")
    var cartBtnHeart=document.createElement("a")
    cartBtn.addEventListener("click",function (){
        cart.push(elem)
        localStorage.setItem("cart",JSON.stringify(cart))
        cartCount+=1;
        localStorage.setItem("cartCount",JSON.stringify(cartCount))
        document.querySelector("#mycart-count").innerHTML=cartCount;
    })
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
// *****************CART POPOU CODE: BY PARVEJ****************//
document.querySelector("#mycart").addEventListener("click",function (){
    document.querySelector("#cart").style.display="block";
    var cart=JSON.parse(localStorage.getItem("cart"))
    document.querySelector("#cartItems").innerHTML=""
    cart.map(function(elem,index,arr){
    var cartItem=document.createElement("div");
    cartItem.setAttribute("class","cart-item")
    var productImageDiv = document.createElement("div")
    productImageDiv.setAttribute("class","cart-item-image-div")
    var image = document.createElement("img")
    image.setAttribute("src", elem.image);
    image.setAttribute("class","cart-item-image")
    productImageDiv.append(image)
    
    var productDetailDiv=document.createElement("div");
    productDetailDiv.setAttribute("class","cart-item-productDetail-div")

    var title = document.createElement("p")
    title.innerText = elem.title;
    title.setAttribute("class","cart-item-title")
    
    
    var price = document.createElement("p")
    price.innerText = "Price :"+elem.price
    price.setAttribute("class","cart-item-price")
    var rating = document.createElement("div")
    rating.setAttribute("class", "rating")
    rating.setAttribute("class","cart-item-rating")
    rating.innerHTML = "<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span>"

    var qty=document.createElement("input")
    qty.setAttribute("class","cart-item-qty")
    
    qty.value=elem.qty;
    var Qtydiv=document.createElement("div")
    Qtydiv.setAttribute("class","cart-item-Qtydiv")

    Qtydiv.append(qty)
    productDetailDiv.append(title,price,Qtydiv)
    cartItem.append(productImageDiv,productDetailDiv)
    document.querySelector("#cartItems").append(cartItem)
    })
    var sum=cart.reduce(function (acc,el,index,arr) {
        return acc+el.price
    },0)
    document.querySelector("#cart-totalPrice").innerHTML="Total Price: "+sum;
    localStorage.setItem("cartTotalPrice",JSON.stringify(sum));
})

document.querySelector("#close-cart").addEventListener("click",function (){
    document.querySelector("#cart").style.display="none";
})

document.querySelector("#cart-checkOut").addEventListener("click",function () {
    window.location.href="checkout.html";
})
// *********PRODUCT CODE:BY PARVEJ***********END*****//
function brandChecker(index) {

    var brandData = JSON.parse(localStorage.getItem('brands'))[index]
    localStorage.setItem('brandData', JSON.stringify(brandData))
}
