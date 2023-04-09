let userdata=JSON.parse(localStorage.getItem("account-data"))||[];

let signin=document.getElementById("signinbtn").addEventListener('click', function (elem) {
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
  let logger = new login();
  logger.login(email, password) 
  localStorage.setItem("account-data", JSON.stringify(userdata))

})
class login{

 login(email, password){
  var count=0;
    userdata.forEach(element => {
        if(email== element.email && password==element.password){
            alert("Login Successfull")
            
            window.location.href="index.html"
          }
          if(email== element.email && password!=element.password ){
            alert("Wrong Credential")
          }
          if(email!= element.email ){
            count++
          }  
        });
        if(count==userdata.length){
          alert("User doesn't exist, Sign Up")
          window.location.href="signup.html"
    }
 }

}