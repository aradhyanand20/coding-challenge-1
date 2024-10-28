
const regex1 = /^(http:\/\/|https:\/\/)[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]+(\.[a-zA-Z]+)+$/;;
const url = "http://example.com";
const found = regex1.test(url);
if(found){
    console.log("It is valid");
}
else{
    console.log("Invalid");
    
}

