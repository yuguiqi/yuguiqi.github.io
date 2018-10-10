
var arr = [];

for(var i=0;i<5;i++){
    arr[i] = function(){
        return i;
    }
}
console.log(arr[0]());//5

for(let i=0;i<5;i++){
    arr[i] = function(){
        return i;
    }
}
console.log(arr[0]());//0

for(let i=0;i<5;i++){
    arr[i] = function(n){
        return n;
    }(i)
}
console.log(arr[0]);//0