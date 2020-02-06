/*console.log("HEllo");
let mystring:string;
let myNumber:number;
mystring="TypeScript"
myNumber=120;
console.log(mystring);
console.log(myNumber);*/
/*let mydata:any;
mydata="heloo"+""+"welcome";
console.log(mydata);
mydata=12.34;
console.log(mydata);
let mystring:string;
mystring="welcome to chennai";
console.log(mystring.slice(0,3));
let myNumber:number;
myNumber=22;
console.log(myNumber.toString()+"my result");
let MysArray:string[];
let MynArray:number[];
MysArray=["siddu","TypeScript"];
MynArray=[1,2,3,4,5];
console.log(MysArray);
console.log(MynArray);
console.log(MynArray[1]);
for(var n=0;n<MynArray.length;n++)
{
    console.log(MynArray[n]);
}
MysArray.forEach(function(value)
{console.log(value);})*/
/*let myTuple:[string,number,number]
myTuple=["TypeScript",1,4];
console.log(myTuple);
let myvar:void;
myvar=undefined;
console.log(myvar);
let myvar1=null;
console.log(myvar1);
console.log(myTuple.pop());
myTuple.push(23);
console.log(myTuple);*/
/*enum MyEnum{sunday=0,Monday,Tuesday,Wednesday}
console.log(MyEnum.Tuesday);
//functions
function addfunction(num1:any,num2:any):number
{
    return (num1+num2);
}
console.log(addfunction(34,56));
function addfunction1(num1:any,num2:any):any
{
    return (num1+num2);
}
console.log(addfunction1("hi","manu"));

function addnumber(num1:any,num2:any):number
{
    if(typeof num1=='string'&& typeof num2=='string')
    {
        let x:number;
        let y:number;
        x=parseInt(num1);
        y=parseInt(num2);
        //return(parseInt(num2));
        return (x+y);
    }
    else
    return(num1+num2);
   
}
console.log(addfunction("hi","hlooo"));*/

/*interface myInterface
{
    Name: string;
    Title: string;
}
function Ifunction(mydata:myInterface):string
{
    return(mydata.Name+" "+mydata.Title);
}
let dat={Name:"Ravi",Title:"Associate"}
console.log(Ifunction(dat));*/

class User
{
    Id:number;
    Name:string;
    Email:string;
    Age:number;
    constructor (id:number,name:string,email:string,age:number)
    {
        this.Id=id;
        this.Name=name;
        this.Email=email;
        this.Age=age;
        console.log("User Created");
    }

}
let FirstUser=new User(1,"Jane","jane@cts.com",21)
console.log(FirstUser.Id+" "+FirstUser.Email+" "+FirstUser.Name+" "+FirstUser.Age);

class User1
{
    private Id:number;
    private Name:string;
    private Email:string;
    private age:number;
    constructor(id:number,name:string,email:string,age:number)
    {
        this.Id=id;
        this.Name=name;
        this.Email=email;
        this.age=age;
        console.log("usr created");

    }
    register()
    {
    console.log(this.Name+"SuccesfullyRegistered");
    console.log(FirstUser.Id+""+FirstUser.Name+""+FirstUser.Email+""+FirstUser.Age);
    }
    getAge(id:number):number
    {
        if(this.Id==id)return this.age;
        else return 0;

    }
}
let firstUser1=new User1(1,"ram","r@agmail.com",21);
firstUser1.register();
console.log(firstUser1.getAge(1));
