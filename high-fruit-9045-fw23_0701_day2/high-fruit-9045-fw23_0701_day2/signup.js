let form=document.getElementById("form")
let heading=document.getElementsByTagName("h1")
//function showme() {
  //alert("Signin Successful")
  //window.location.href="./signup.html"
//}



let arr=JSON.parse(localStorage.getItem("account-data"))||[];
form.addEventListener("submit",(event)=>{
  event.preventDefault();
  alert("Signup Successful")
  window.location.href="./login.html"
 // heading.innerText="Signup Successful"
  let details={
    name:form.name.value,
    email:form.email.value,
    password:form.password.value,
  }
 
 
  arr.push(details)
    
 
  localStorage.setItem("account-data",JSON.stringify(arr))
})
  