function myname(malaika):string{
    return malaika
}

console.log(myname("malaika")) 

function chai(water:number, teabag:number, sugar:number, milk:number):number{
    let chai = water + teabag + sugar + milk
    return chai
}
console.log (chai(1, 1, 2, 1))

function sum(a:number,b:number,c:number,d:number):number{
    let sum = 1 + 4 + 2 + 2
    return sum
}

console.log (sum(1,4,2,2))

function myteacher(){
    let myteacher:string = ( "sir okasha , sir ubaid , sir asharib , miss hafsa" )
    return myteacher
}
let myteachers:string = myteacher()
console.log(myteachers)

function myresult(english:number, urdu:number, math:number, computer:number):string{

    
if (english >= 30){
    console.log("pass")
}else if (urdu >= 30){
    console.log ("pass")
}else if (math >= 30 ){
    console.log("pass")
}else if (computer >= 30){
    console.log("pass")
}else{
    console.log ("fail")
}return "myresult"
}
myresult(70,20,56,90)

function Ramzancodingnight(timing:number):number{
     

if (timing === 11){
    console.log("you are on time")
 }else{
console.log ("watch recording")
}return timing
}
Ramzancodingnight(11)