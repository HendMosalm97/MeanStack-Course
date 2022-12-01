//***************************Question 1******************************** *//
//1-JavaScript has a runtime model based on an event loop, which is responsible for executing the code,
// collecting and processing events, and executing queued sub-tasks.

//2- How do you add an element at the begining of an array?
Array.unshift(element);
Array.splice(start_position, 0, new_element);
// How do you add one at the end?
Array.push(element);
Array.splice(start_position, arr.length-1, new_element);

//***************************Question 2******************************** *//

//1- output  ==> 3
//2- output  ==> 0,1,2,3,4
//3- output equel = ['baz']
//4- output equel = 1,"Hello",true
//5- output equel ==> true 
               // ==>['x','bwm'] ,['y',1000]

//***************************Question 3******************************** *//
//1- Create Function sumObjectValues() that will sum all values of 
//the fields that contain numbers . ensure that iteration is 
//done only over own property of the object  


function sumObjectValues(obj){
    let sum=0;
    for (let key in obj) 
    {
      if(typeof obj[key]=='number' && obj.hasOwnProperty(key))
      {
        sum+=obj[key];
      }
    }
        return sum;
}
  
//2- Show the execution of 3 asynchronous block of code, one after 
//the other in sequence 
function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise

.then(function(data) {
    console.log(data);

    return job(false);
})

.catch(function(error) {
    console.log(error);

    return 'Error caught';
})

.then(function(data) {
    console.log(data);

    return job(true);
});

//----------------another example----------------
window.setTimeout(function() {
    alert("!");
    window.setTimeout(function() {
        alert("!!");
    }, 1000);
}, 3000); 

//3- Get the maximum value from a numbers array along with its index 
let arr =[1,2,8,9,2];
function maximumvalue(nums){
    let maxValue=0;
for(var i in nums){
    if(nums[i]>maxValue){maxValue=nums[i];}
}
return maxValue;}
let x= maximumvalue(arr);
console.log(x);

//-4 Write a function which accepts two valid dates and returns the 
//difference between them as number of days 

function differencebetween2dates(startDate,endDate){
    const diffInMs   = new Date(endDate) - new Date(startDate)
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    console.log(diffInDays);
}
differencebetween2dates('1997-02-01','2022-12-1')

//5-Design a Calulator interface for 2 number inputs which can 
//perform sum, difference, product and dividend whenever invoked 
//on the same interface.
class Calulator{
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2
      
    }
     sum() {
        let result= this.num1+this.num2;
       return result;
    }
   difference() {
        let result= this.num1-this.num2;
        return result;
    }  
     product() {
        let result= this.num1*this.num2;
        return result;
    }
   divided() {
        if(this.num2!=0){
        let result= this.num1/this.num2;
        return result;}
        else{ return 'connot divided by zero';}
    }
   
}

function mycalulator(num1,num2,operation){
const c =new Calulator(num1,num2);
switch (operation){
    case '+':console.log( c.sum());
    break;
    case '-':console.log(c.difference());
    break;
    case '*':console.log(c.product());
    break;
    case '/':console.log(c.divided());
    break;
    default:console.log("there is error");
}
}
mycalulator(5,0,'/');
//6-Write a function which can return multiple values from a function
function returnmultiplevalues(num1,num2){
    const c =new Calulator(num1,num2);
    const obj={sum:c.sum(),difference:c.difference(),product:c.product(),divided:c.divided()};
    return obj;
    }
  console.log(  returnmultiplevalues(8,3));
//7- Write a function to reverse an array. For Example : 
//reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1] 
function reverse(arr){
   // console.log(arr.length);
const newarr=[];
for(var i in arr){
  j=(arr.length-1)-i
    newarr.push(arr[j]);
}
return newarr;
}
console.log(reverse([1, 2, 3, 4]));
//8- Write a function that converts an object into an array, where each 
//element represents a key-value pair in the form of an array. 
//For Example : 
// ({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]] (10 points)

function convertobjToarr(obj){
    const arr=[];
    for(var key in obj){
        arr.push([key,obj[key]]);
    }
return arr;
}
console.log(convertobjToarr({ a: 1, b: 2 }));











