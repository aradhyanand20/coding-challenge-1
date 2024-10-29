
let storeList ={
    "item1":20,
    "item2":10,
    "item3":43,
}
 const rate = 80;
 function convertedPriceToINR(items,price){
      let NewList = {};
      Object.keys(items).map(key =>{
        NewList[key] = items[key]*rate;
      });
      return NewList;
 }
 let storeItemtoINR= convertedPriceToINR(storeList,rate);
 console.log(storeItemtoINR);