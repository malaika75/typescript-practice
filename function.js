function myname(malaika) {
    return malaika;
}
console.log(myname("malaika"));
function chai(water, teabag, sugar, milk) {
    var chai = water + teabag + sugar + milk;
    return chai;
}
console.log(chai(1, 1, 2, 1));
function sum(a, b, c, d) {
    var sum = 1 + 4 + 2 + 2;
    return sum;
}
console.log(sum(1, 4, 2, 2));
function myteacher() {
    var myteacher = ("sir okasha , sir ubaid , sir asharib , miss hafsa");
    return myteacher;
}
var myteachers = myteacher();
console.log(myteachers);
function myresult(english, urdu, math, computer) {
    if (english >= 30) {
        console.log("pass");
    }
    else if (urdu >= 30) {
        console.log("pass");
    }
    else if (math >= 30) {
        console.log("pass");
    }
    else if (computer >= 30) {
        console.log("pass");
    }
    else {
        console.log("fail");
    }
    return "myresult";
}
myresult(70, 20, 56, 90);
function Ramzancodingnight(timing) {
    if (timing === 11) {
        console.log("you are on time");
        return timing;
    }
    else {
        console.log("watch recording");
        return timing;
    }
}
Ramzancodingnight(11);
