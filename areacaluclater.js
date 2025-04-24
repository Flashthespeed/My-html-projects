var choice =prompt("welcome to Area Calcuter. \n please enter your choice. \n 1. Area of Circle \n 2. Area of Rectangle \n 3. Area of Triangle \n 4. Exit");
if (choice == 1) {
    var l =prompt("enter lenghth ");
    var b =prompt("enter breadth ");
    var result = Number(l) * Number(b);
    alert("Area is " + result);
}
if (choice == 2) {
    var h =prompt("enter lenghth ");
    var b =prompt("enter breadth ");
    var result = Number(h) * Number(2);
    alert("Area is " + result);
}
if (choice == 3) {
    var r =prompt("enter base ");
    var result = 3.14*(Number(b) * Number(h)) / 2;
    alert("Area is " + result);
}
if (choice == 4) {
    var h =prompt("enter height ");
    var cb =prompt("enter corresponding base ");
    var result = Number(h) * Number(cb)
    alert("Area is " + result)
}