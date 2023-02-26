//your code here
let image = document.getElementById("image");
let fullName = document.getElementById("fullName");
let additionalInfo = document.getElementById("additionalInfo");
let getAnoutherUser = document.getElementById("getUser");

let age;
let email;
let phone;
 
getAnoutherUser.addEventListener("click", function(){
    fetch("https://randomuser.me/api/")
    .then((responce) => responce.json())
    .then((data)=>{
        let user = data.results[0];
        image.src = user.picture.large;
        fullName.innerText =  user.name.title + " " + user.name.first + " " + user.name.last;
        age = user.dob.age;
        email = user.email;
        phone = user.phone;
        additionalInfo.innerHTML = "";
    })
})
 
let ageButton = document.querySelector('[data-attr="age"]')
let emailButton = document.querySelector('[data-attr="email"]')
let phoneButton = document.querySelector('[data-attr="phone"]')
 
ageButton.addEventListener("click", function(){
    additionalInfo.innerHTML = age;
})
 
emailButton.addEventListener("click", function(){
    additionalInfo.innerHTML = email; 
})
 
phoneButton.addEventListener("click", function(){
    additionalInfo.innerHTML = phone; 
})
 
getAnoutherUser.click();