document.querySelector(".callbtn").addEventListener("click",function(){
	document.querySelector(".callbtn").style.animationName = "hideCallBtn";
	document.querySelector(".callbtn").style.animationDuration = "0.8s";
	document.querySelector("#form-div").style.animationName = "showEnquiryForm";
	document.querySelector("#form-div").style.animationDuration= "0.8s";
	 var y =setInterval(hide,400);
	 function hide()
	 {
       document.querySelector("#form-div").style.display = "block";
       document.querySelector(".callbtn").style.display = "none";
       clearInterval(y);
	 }
	})

	document.querySelector("#cross-btn").addEventListener("click",function(){
    document.querySelector(".callbtn").style.animationName = "showCallBtn";
	document.querySelector(".callbtn").style.animationDuration = "0.8s";
	document.querySelector("#form-div").style.animationName= "hideEnquiryForm";
	document.querySelector("#form-div").style.animationDuration= "0.8s";
	var x=	setInterval(timer,400);
	 function timer()
	 {
       document.querySelector("#form-div").style.display = "none";
       document.querySelector(".callbtn").style.display = "block";
       clearInterval(x);
	 }
	})
