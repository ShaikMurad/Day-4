


var obj1 = { name : "Person 1", age  :  5};
var obj2 = {age  :  5,name : "Person 1"};
var compare = JSON.stringify(obj1)===JSON.stringify(obj2)
console.log(compare);



var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/all')
request.send();
request.onload = function (){
var data = JSON.parse(request.response)
// console.log(data);

for (var i=0; i<data.length; i++){
    console.log(data[i].name, data[i].region, data[i].subregion, data[i].population);
}
for (var i=0; i<data.length; i++){
    console.log(data[i].flags);
}

}