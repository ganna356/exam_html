var users=[];

function isvalidsignup()
{
  var username=document.getElementById("signname").value;
  var password=document.getElementById("signpass").value;
  var age=document.getElementById("signAge").value;
  var tel=document.getElementById("signtel").value;
  function isstrongpass(password)
  {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,8}$/;
    return regex.test(password);
  }

  if(username.length >5 && username.length<10 && isstrongpass(password) && age>18 && age<60 && tel.length==11)
  {
    users.push({username:username , password:password});
    alert("Sign UP Successfully   please click on sign in");
 return true;
  }
  else{
    alert("Sign Up Failed !");
    return false;
  }
}

function isvalidlogin()  {
    var username=document.getElementById("logname").value;
  var password=document.getElementById("logpass").value;
  for(var i=0; i<username.length ;i++)
  {
    console.log(users);
    if(users[i].username===username && users[i].password===password)
    {alert("Log IN Successfully");
       window.location.href=("review.html");
        return true;

}
else{
  window.alert("login failed!");
  return false;
}
}
  }

  function update(){
    var u= document.getElementById("newname").value;
var p=document.getElementById("newpass").value;
for(var i=0;i<users.length;i++)
{
if(users[i].username==u)
{users[i].password=p;
alert("Update Successfully")

}
else{alert("In Valid!")}
}
}



  
