function sum(x, y) {
    return x + y;
}
var result = sum(5, 10);
var strOne = "Typescript";
//strOne = 10;
var booleanValue = true;
//booleanValue = "Typescript";
// Array
var arrayItem = ["One", "Two", "Three", 12, true, "Four", "Five", "Six", false, 20];
//Tuble
var tubleArray = ["One", 1];
// Union
var unionType;
unionType = "One";
unionType = 12;
unionType = true;
var normalType = "One";
console.log("Array Result: ", arrayItem);
console.log("Result Log: ", result);
// any
var anyType = "Welcome";
anyType = 2;
anyType = true;
/**
 * ***********************************************
 * Session II
 */
var ColorConstant;
(function (ColorConstant) {
    ColorConstant[ColorConstant["ORANGE"] = 0] = "ORANGE";
    ColorConstant[ColorConstant["GREEN"] = handleValue()] = "GREEN";
})(ColorConstant || (ColorConstant = {}));
function handleValue() {
    return 50;
}
console.log("Enum Value Green : ", ColorConstant.GREEN);
console.log("Enum Value Orange: ", ColorConstant.ORANGE);
var CarConstant;
(function (CarConstant) {
    CarConstant["CAR1"] = "Honda";
    CarConstant["CAR2"] = "Farrai";
})(CarConstant || (CarConstant = {}));
console.log("Enum Value: ", CarConstant.CAR1);
var Student = /** @class */ (function () {
    function Student(fname, lname, mobile, location) {
        this.firstName = fname;
        this.lastName = lname;
        this.mobile = mobile;
        this.location = location;
    }
    Student.prototype.getFirstName = function () {
        return this.firstName;
    };
    Student.prototype.getLastName = function () {
        return this.lastName;
    };
    Student.prototype.getMobileNumber = function () {
        return this.mobile;
    };
    return Student;
}());
var studentObj = new Student("Kumar", "R", 9090909090, "Erode");
var firstName = studentObj.getFirstName();
var mobileNumber = studentObj.getMobileNumber();
console.log("Get Student First Name: ", firstName);
console.log("Get Student Mobile Number: ", mobileNumber);
