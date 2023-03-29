function getUserDetails(firstName,lastName,email){
    const userDetails = `Name: ${firstName} ${lastName}, Email: ${email}`
    return userDetails;
}

const userInfo = getUserDetails("John","Doe","johanwier@gmail.com")
console.log(userInfo)

// Default Parameter
function getUserDetails1(firstName, lastName, email="None given"){
    const userDetails = `Name: ${firstName} ${lastName}, Email: ${email}`
    return userDetails; 
}

const newUserInfo = getUserDetails1("Pete","p")
console.log(newUserInfo);