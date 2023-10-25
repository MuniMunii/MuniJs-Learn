// No 1
function outerFunction(){
    let initiator=0
    function Plus() {
        initiator++
        return initiator
    }
    return Plus
}
console.log(outerFunction());
console.log(outerFunction());
console.log(outerFunction());
// No 2
function outerFunctionWithThreeInner() {
    let initiator=[]
    function pushObject(object){
        initiator.push(object)
        return initiator
    }
    function unshiftObject(object){
        initiator.unshift(object)
        return initiator
    }
    function sliceObject(object) {
        if (typeof object === 'number') {
            // jangan lupa pake = agar di ke ganti 
            initiator=initiator.slice(0,object)
            return initiator
        }
        else{
            return 'invalid data type'
        }
    }
    return {
        pushObject:pushObject,
        unshiftObject:unshiftObject,
        sliceObject:sliceObject
    }
}
let arrayFunction=outerFunctionWithThreeInner()
console.log(arrayFunction.pushObject('Muni'));
console.log(arrayFunction.pushObject('Muniii'));
console.log(arrayFunction.pushObject('Muniiiii'));
console.log(arrayFunction.pushObject('Munii'));
console.log(arrayFunction.unshiftObject());
console.log(arrayFunction.sliceObject(1));

function personAccount(){
    let personAcc={
        firstname:'',
        lastname:'',
        income:0,
        expenses:0
    }
    function registerName(firstnameobj,lastnameobj){
        personAcc={
            firstname:firstnameobj,
            lastname:lastnameobj
        }
        return personAcc
    }
    function addIncome(number){
        return `You added ${personAcc.income=+number} into a Bank Account`
    }
    function addExpenses(number){
        return `You have ${personAcc.expenses=+number} Expenses left`
    }
    function getAccountInfo(){
        return personAcc
    }
    return {
        registerName:registerName,
        addIncome:addIncome,
        addExpenses:addExpenses,
        getAccountInfo:getAccountInfo
    }
}
let getBankCommand=personAccount()
console.log(getBankCommand.registerName('Ramzi','Akbar'));
console.log(getBankCommand.addExpenses(10000));
console.log(getBankCommand.addIncome(80000000));
console.log(getBankCommand.getAccountInfo());