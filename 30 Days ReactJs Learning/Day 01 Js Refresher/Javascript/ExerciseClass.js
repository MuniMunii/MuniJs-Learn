console.log('================Class=================');
class Animal{
    constructor(name,age,color,leg){
        this.name=name
        this.age=age
        this.color=color
        this.leg=leg
    }
}
let DogClass=new Animal('Muni',4,'Red',2)
let CatClass=new Animal('Muna',3,'Yellow',4)
console.log(DogClass);
console.log(CatClass);
class Mammal extends Animal{
    constructor(name,age,color,leg,habitats){
        super(name,age,color,leg)
        this.habitats=habitats
    }
}
let Whale=new Mammal('Whalu',20,'Blue',2,'Sea')
console.log(Whale);

class Statistic{
    constructor(ages){
        this.ages=ages||[31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
    }
    Count(){
        return this.ages.length
    }
    Sum(){
        let SumNumber=this.ages.reduce((a,b)=>a+b)
        return SumNumber
    }
    GetMinAges(){
        const Min=Math.min(...this.ages)
        return Min
    }
    GetMaxAges(){
        const Max=Math.max(...this.ages)
        return Max
    }
    Range(){
        const Range=this.GetMaxAges()-this.GetMinAges()
        return Range
    }
    Mean(){
        let Mean=Math.ceil(this.Sum()/this.Count())
        return Mean
    }
    Mode(){
        let ObjectMap={}
        let Init=0
        let Mode;
        this.ages.forEach(Count => {
            ObjectMap[Count]=(ObjectMap[Count]||0)+1
            if (ObjectMap[Count]>Init) {
                Init=ObjectMap[Count]
                Mode=Count
            }
        });
        return {Mode,Count:Init}
    }
    Median(){
        const SortAges=this.ages.sort((a,b)=>a-b)
        if (SortAges%2===0) {
            let FirstHalf=SortAges[SortAges.length/2]-1
            let LastHalf=SortAges[SortAges.length/2]
            let Result=(FirstHalf+LastHalf)/2
            return Result
        }
        else{
            let Result=SortAges[Math.floor(SortAges.length/2)]
            return Result
        }
    }
    Variance(){
        let Square=this.ages.map(value=>Math.pow(value-this.Mean(),2))
        let Variance=Square.reduce((a,b)=>a+b,0)/this.Count()
        return Variance
    }
    Std(){
        let Std=Math.sqrt(this.Variance()).toFixed(1)
        return Std
    }
    Describe(){
        return `\nCount=${this.Count()}\n
        Sum= ${this.Sum()}\n
        Min= ${this.GetMinAges()}\n
        Max= ${this.GetMaxAges()}\n
        Median= ${this.Median()}\n
        Mean= ${this.Mean()}\n
        Mode= ${JSON.stringify(this.Mode())}\n
        Variance= ${this.Variance()}\n
        VarianceDeviation= ${this.Std()}\n`
    }
}
let newStatistic=new Statistic
console.log(newStatistic.Describe());
console.log('=======================================');