var cart=JSON.parse(localStorage.getItem("cart"))||[]
    var showItem = JSON.parse(localStorage.getItem("showItem"))
    var productImageDiv = document.createElement("div")
    productImageDiv.setAttribute("class","show-item-image-div")
    var image = document.createElement("img")
    image.setAttribute("src", showItem.image);
    image.setAttribute("class","show-item-image")
    productImageDiv.append(image)

    var productDetailDiv=document.createElement("div");
    productDetailDiv.setAttribute("class","show-item-productDetail-div")

    var title = document.createElement("p")
    title.innerText = showItem.title;
    title.setAttribute("class","show-item-title")
    
    
    var price = document.createElement("p")
    price.innerHTML = "&#8377;  "+showItem.price;
    price.setAttribute("class","show-item-price")
    var rating = document.createElement("div")
    rating.setAttribute("class", "rating")
    rating.setAttribute("class","show-item-rating")
    rating.innerHTML = "<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span>"

    var addToCart=document.createElement("button");
    addToCart.setAttribute("class","show-item-addToCart")
    addToCart.innerText="Add to Cart";
    addToCart.addEventListener("click",function(){
        cart.push((showItem))
        localStorage.setItem("cart",JSON.stringify(cart))
        var cartCount=JSON.parse(localStorage.getItem("cartCount"))
        cartCount+=1;
        localStorage.setItem("cartCount",JSON.stringify(cartCount))
        document.querySelector("#mycart-count").innerHTML=cartCount;
    })
    var qty=document.createElement("input")
    qty.setAttribute("class","show-item-qty")
    qty.value=showItem.qty;
    var Qtydiv=document.createElement("div")
    Qtydiv.setAttribute("class","show-item-Qtydiv")

    Qtydiv.append(qty,addToCart)
    productDetailDiv.append(title,rating,price,Qtydiv)

    document.querySelector("#show-Item").append(productImageDiv,productDetailDiv)