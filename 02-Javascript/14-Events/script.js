// console.log("Hello world");

// onclick
// onmouseover
// onmouseout
// onchange
// onsubmit

// addeventlistner
// event.preventdefault()
// event.stopPropagation()


// function testing(){
//     console.log("testing...");
    
// }


// const head = document.querySelector("#head");

// head.addEventListener("click" , testing)


// const btn = document.querySelector('.btn');

// btn.addEventListener('click' , function (){
//     console.log("working...");
    
// })


// btn.addEventListener('mouseover' , function (){
//     console.log("mouse in..");
    
// })

// btn.addEventListener('mouseout' , function (){
//     console.log("mouse out...");
    
// // })

// const img = document.querySelector("#img");

// img.addEventListener('mouseover' , function(){
//     console.log("mouse over...");
//     img.src = "https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940171g57vp25a8k.png"
    
// })
// img.addEventListener('mouseout' , function(){
//     console.log("mouse out...");
//     img.src = "https://toppng.com/uploads/preview/light-bulb-on-off-png-115539402943y50vxr5yi.png"
// })


// const input = document.getElementById("input");

// input.addEventListener("input", function () {
//     console.log("change..." , input.value);
// });


// const email  = document.querySelector("#email")
// const password  = document.querySelector("#password")
// const form = document.querySelector("#form")


// form.addEventListener("submit" , function(event){
//     console.log(event);
//     event.preventDefault()
    
//     console.log(email.value);
//     console.log(password.value);
    
// })

//bubbling
// capturing


// const ul = document.querySelector(".images")
// const li = document.querySelector("#image-2")
// const a = document.querySelector("#link-1")


// ul.addEventListener("click" , function (event){
//     if(event.target.tagName === "IMG"){
//         event.target.parentNode.remove()
//         return
//     }
//     console.log(event.target.tagName);

    
//     // console.log("ul clicked...");
    
// } , true)


// li.addEventListener("click" , function (event){
//     // event.stopPropagation()
//     console.log("li clicked");
     
// } , true)


// a.addEventListener("click" , function (event){
//     event.preventDefault()
    
// })