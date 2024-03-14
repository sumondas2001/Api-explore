const user = {id:1, name: 'sumon', location:'noakhali'};
// console.log(user)
const jsonStringify = JSON.stringify(user);
// console.log(jsonStringify);

const shop = {
   oner:'jon',
   location:'dhaka',
   address:{
     street:'bjoasu',
     city:'mnjia',
     country : 'bd',
   },
   products :['laptop', 'moblie', 'computer', 'mic','keybored'],
   revenue : 10000,
   isOpen : true,
   isNew : false

};
// console.log(shop)
const shopJson = JSON.stringify(shop);
console.log(shopJson);

const jonParse = JSON.parse(shopJson);
console.log(jonParse);

