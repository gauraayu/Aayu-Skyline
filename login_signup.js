let signup=()=>{
    let sname=document.querySelector("#name").value
    let sno=document.querySelector("#no").value
    let smail=document.querySelector("#email").value
   
    let spw=document.querySelector("#pw").value
    let scpw=document.querySelector("#cpw").value
    


    let errorname=document.querySelector("#errorname")
    let errormobile=document.querySelector("#errormobile")
    let erroremail=document.querySelector("#erroremail")
    let errorpassword=document.querySelector("#errorpassword")
    let errorconfirmpassword=document.querySelector("#errorconfirmpassword")
    // error handling or form validation that we have put all the input
    if (sname==="") {
        errorname.innerHTML="Please enter your name"
        errorname.style.color="red"
        document.querySelector("#name").placeholder="Enter name please"
        document.querySelector("#name").focus()
        return false;
    }

   if(isNaN(sno)){
        errormobile.innerHTML="Please enter a valid number";
        return false;
      }
      else if (sno==="") {
        errormobile.innerHTML="Please enter your mobile no"
        errormobile.style.color="red"
        return false;
    }

      else if(sno.length!=10){
        errormobile.innerHTML="Please enter a 10 digit number";
        return false;
      }

      if (smail==="") {
        erroremail.innerHTML="Please enter your email"
        erroremail.style.color="red"
        return false;
    }

      else if(!(smail.includes('@') && smail.includes('.com'))){
        erroremail.innerHTML="Please enter a valid email";
        return false;
      }
      
      if (spw==="") {
        errorpassword.innerHTML="Please enter your password"
        errorpassword.style.color="red"
        return false;
    }

    
    else if (scpw==="") {
      errorconfirmpassword.innerHTML="Please confirm your password";
    
      errorconfirmpassword.style.color="red"
      return false;
  }

      else if(spw!==scpw){
        document.querySelector("#cpw").value="";
        document.querySelector("#cpw").focus()
        errorconfirmpassword.innerHTML="Password and confirm password should be same";
       
        return false;
      }


      else if(!(
        spw.match(/[1234567890]/) &&
        spw.match(/[!@#$%^&*()]/) &&
        spw.match(/[a-z]/) &&
        spw.match(/[A-Z]/)
      ))
      {
        errorpassword.innerHTML="Password should have at least one uppercase letter, one lowercase letter, one digit"
         return false;
      }
    
    
    // local storage m value save kroi h 
    localStorage.setItem("name",sname)
    localStorage.setItem("email",smail)
    localStorage.setItem("no",sno)
    localStorage.setItem("pw",spw)
    localStorage.setItem("cpw",scpw)
    
    // if(spw==cpw ){
    //     // jump to login page
    //     location.href="flight_login.html";
    // }
    // else{
    // alert("incorrect password")
    // }
    
    
    
    location.href="flight_login.html"
    // page ko refresh krne s rokne k lie return false krte
    return false;
    }
    let login=()=>{
        let loginname=document.querySelector("#loginname").value
        let loginpw=document.querySelector("#loginpw").value
        // now we have to match that the name and pw is matching this then login or else show default
        let localname=localStorage.getItem("name")
        let localpw=localStorage.getItem("pw")
    
        if(loginname==localname && loginpw==localpw){
            // jump to home page
            location.href="index.html";
        }
    else{
        alert("login failed")
    }
    
        return false;
    }
    VANTA.CLOUDS({
      el: ".cloud",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00
    })