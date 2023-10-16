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

// No 4
class Statistics{
    constructor(ages){
        this.ages=ages = ages || [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
    }
    count(){
        return this.ages.length
    }
    sum(){
        let sumNum=this.ages.reduce((a,b)=>a+b)
        return sumNum
    }
    min(){
        let Min=Math.min(...this.ages)
        return Min
    }
    max(){
        let Max=Math.max(...this.ages)
        return Max
    }
    range(){
        let Range=this.max()-this.min()
        return Range
    }
    mean(){
        // kalo pake math.floor jadi 29 karna hasil nya 29.76 jadi kita gunakan math.ceil akan di bulatkan ke integer terdekat seperti 30
        let meanData=Math.ceil(this.sum()/this.count())
        return meanData
    }
    mode(){
        let objectMap={}
        let initialized=0
        let mode;
        this.ages.forEach(element => {
            objectMap[element]=(objectMap[element]||0)+1
            if (objectMap[element] > initialized) {
                initialized=objectMap[element]
                mode=element
            }
        });
        return {mode,count:initialized}
    }
    median(){
        let sortAge=this.ages.sort((a,b)=>a-b);
        if (sortAge.length % 2 === 0) {
            let number1=sortAge[sortAge.length/2]-1
            let number2=sortAge[sortAge.length/2]
            let result=(number1+number2)/2
            return result
        }
        else{
            return sortAge[Math.floor(sortAge.length/2)]
        }
    }
    variance(){
        let square=this.ages.map(value=>Math.pow(value - this.mean(),2))
        let variance=square.reduce((a,b)=>a+b,0)/this.ages.length
        return variance
    }
    varianceDeviation(){
        return Math.sqrt(this.variance())
    }
    Description(){
        console.log(
            `
            Count=${this.count()}\n
            Sum=${this.sum()}\n
            Min=${this.min()}\n
            Max=${this.max()}\n
            Median=${this.median()}\n
            Mean=${this.mean()}\n
            Mode=${JSON.stringify(this.mode())}\n
            Variance=${this.variance()}\n
            VarianceDeviation=${this.varianceDeviation()}\n`
        );
    }
}
let newStat=new Statistics();
newStat.Description()

// No 5 Masalah dan solusi di nomor ini
let addDate=new Date()
class personAccount{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
        this.date=addDate.getUTCFullYear()
        this.incomes=0;
        this.expenses=0;
        // kita pakai array untuk menyimpan object dan deskripsi nya
        this._incomesInfo=[];
        this._expensesInfo=[];
    }
    get getIncomes(){
        // disini kita memakai reduce untuk menghitung incomes di array object account info
        // a itu mewakili accumulator jadi a+b.incomes dan initial/Nilai Awaal nya 0
        let totalIncomes=this._incomesInfo.reduce((a,b)=>a+b.incomes,0)
        return `Balance Incomes: ${totalIncomes}`;
    }
    get incomesInfo(){
        return this._incomesInfo
    }
    get expensesInfo(){
        return this._expensesInfo;
    }
    get getExpenses(){
        // caranya sama seperti yang ada di line 111
        let totalExpenses=this._expensesInfo.reduce((a,b)=>a+b.expenses,0)
        return `Expenses: ${totalExpenses}`;
    }
    accountBalance(){
        console.log(`${this.getIncomes}\n${this.getExpenses}`);
    }
    accountInfo(){
        console.log(`\nFirst Name : ${this.firstName}\nLast Name : ${this.lastName}\nAccountCreated : ${this.date}`);
    }
    set addIncomes({incomes,Description}){
        // kita atur dulu this.incomes ke dalam parameter incomes yang akan di masukan ke object
        this.incomes=incomes
        this._incomesInfo.push({incomes:this.incomes,Description,date:addDate.getMonth()})
    }
    set addExpenses({expenses,Description}){
        // sama seperti yang ada di line 134
        this.expenses=expenses
        this._expensesInfo.push({expenses:this.expenses,Description,Date:addDate.getMonth})
    }
}
let ramjiBank=new personAccount('Ramzi','Akbar')
ramjiBank.addIncomes={incomes:10000,Description:'salary'}
ramjiBank.addExpenses={expenses:20000,Description:'Prive'}
ramjiBank.addIncomes={incomes:10000}
ramjiBank.accountInfo();
console.log(ramjiBank._incomesInfo);
console.log(ramjiBank.getIncomes);
console.log(ramjiBank._expensesInfo);
console.log(ramjiBank.getExpenses);
ramjiBank.accountBalance()