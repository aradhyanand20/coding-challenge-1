
const regex1 = /^https\:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/gi;
const url = "https://www.linkedin.com/in/john_doe12345";
const found = regex1.test(url);
if(found){
    console.log("found");
}
else{
console.log("Not found");

}