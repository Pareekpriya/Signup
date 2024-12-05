let array = ["Priya","Komal","Kirti","Vishakha"]
function signup(userName){
   
    if(array.includes(userName)){
        return "User Already Registered, Please Login"
    }

    array.push(userName);
    return "Signup Successful, Please Login";
}

console.log(signup("Priya"));
console.log(signup("Kavya"));


function login(userName,password){
    let array = ["Priya","Komal","Kirti","Vishakha"]
    
    if(array.includes(userName)){
        if(password=="Emp@123"){
        return "Login Sucessfull...."
        }
        else{
         return "Wrong password...."
        }
    }
    else{
        return "User Not Found, Please Signup"
    }
}

console.log(login("Priya",1234));
console.log(login("Kavya",1235));
console.log(login("Priya","Emp@123"))
