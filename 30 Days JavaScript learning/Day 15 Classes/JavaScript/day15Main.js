// No 1 2 dan 3
class Animal{
    constructor(name,age,color,legNum){
        this.name=name
        this.age=age
        this.color=color
        this.legNum=legNum
    }
}
class Cat extends Animal{
    constructor(name,age,color,legNum,Type){
        super(name,age,color,legNum)
        this.Type=Type
    }
    Purr(){
        return 'Nyaaaaaaaaaaaaaaaaaaaa'
    }
}
class Dog extends Animal{
    Bark(){
        return 'Bark Bark'
    }
}
let Doggi=new Dog('nyochio',3,'orange',4);
let Catty=new Cat('nyochi',4,'White',4,'ScottishFold')
console.log(Catty);
console.log(Catty.Purr());
console.log(Doggi);
console.log(Doggi.Bark());