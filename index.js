function signup(userName){
    let array = ["Priya","Komal","Kirti","Vishakha"]

    if(array.includes(userName)){
        return "User Already Registered, Please Login"
    }

    array.push(userName);
    return "Signup Successful, Please Login";
}

console.log(signup("Priya"));
console.log(signup("Kavya"));