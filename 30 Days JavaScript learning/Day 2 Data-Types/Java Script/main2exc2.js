let para1="The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
let para2="Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
//No1
console.log(para1);
//No2
console.log(para2);
//No3
let test1=9.82
console.log(typeof test1);
//No4
console.log(parseInt(test1));
//No5
console.log(typeof 9.85);
//No6
let python='python'
let jargon='jargon'
console.log(python.match('on'),jargon.match('on'));
//No7
let text2='I hope this course is not full of jargon'
console.log(text2.match('jargon'));
//No8
let randomnum=Math.random()
let random=randomnum*100
console.log(random);
//No9
let randomnum50=Math.random()
let random50=randomnum50*50 + 50
console.log(random50);
//No10
let randomnum22=Math.random()
let random2=randomnum*255
console.log(random2);
//No11
let numjava=Math.random('javaScript')
console.log(numjava);
//No12
console.log('Day 1\t1\t1\t1')
console.log('Day 1\t2\t4\t8')
console.log('Day 3\t1\t3\t7\t28')
console.log('Day 4\t3\t5')
//No13
let text="You cannot end a sentence with because because its conjuction"
console.log(text.substring(31,46));

//No14
let text3='love is the best thing in this world. Some found their love and some are still looking for their love.'
let text3love=/love/gi
console.log(text3.match(text3love));
//No15
let text2bcs=/because/gi
console.log(text.match(text2bcs));
//No16
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const sentencefix=sentence.replace(/[^\w\s]/g,'')
console.log(sentencefix);
console.log(sentencefix.match(/and/gi));
//No17
const earn=5000
const salary=10000
const courses=15000
const total=earn+salary+courses
console.log(total);