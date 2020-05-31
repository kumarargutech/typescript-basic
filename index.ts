function sum(x: number, y: number) {
    return x+y;
}

const result = sum(5, 10);

let strOne: string = "Typescript";

//strOne = 10;

let booleanValue: boolean = true;

//booleanValue = "Typescript";

// Array

let arrayItem: Array<number | boolean | string> = [ "One", "Two", "Three", 12, true, "Four", "Five", "Six", false, 20];

//Tuble

let tubleArray: [string, number] = [ "One", 1];

// Union

let unionType: ( number | string | boolean );

unionType = "One";

unionType = 12;

unionType = true;

let normalType: string = "One";

console.log("Array Result: ", arrayItem);

console.log("Result Log: ", result);

// any

let anyType: any = "Welcome";

anyType = 2;

anyType = true;

/**
 * ***********************************************
 * Session II
 */


 enum ColorConstant {
    ORANGE,
    GREEN = handleValue()    
}

function handleValue():number {
    return 50
}

console.log("Enum Value Green : ", ColorConstant.GREEN);
console.log("Enum Value Orange: ", ColorConstant.ORANGE);


enum CarConstant {
    CAR1 = "Honda",
    CAR2 = "Farrai"
}


console.log("Enum Value: ", CarConstant.CAR1);

//  {
//      GREEN = 0,
//      ORANGE =1,
//      BLUE = 2
//  }


// Interface

interface StudentInfo {
    firstName: string,
    lastName: string,
    mobile: number,
    location: string,
    getFirstName: () => string,
    getMobileNumber: () => number    
}

class Student implements StudentInfo {
    firstName: string;
    lastName: string;
    mobile: number;
    location: string;

    constructor(fname: string, lname: string, mobile: number, location: string) {
        this.firstName = fname;
        this.lastName = lname;
        this.mobile = mobile;
        this.location = location;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getMobileNumber(): number {
        return this.mobile;
    }
}

let studentObj = new Student("Kumar", "R", 9090909090, "Erode");

let firstName = studentObj.getFirstName();

let mobileNumber = studentObj.getMobileNumber();

console.log("Get Student First Name: ", firstName);

console.log("Get Student Mobile Number: ", mobileNumber);