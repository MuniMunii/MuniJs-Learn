// Kesalahan pada coding yang tadi salah Mohon teliti dengan benar cek typo nya jika masih gagal 
function calc() {
    var n1=parseInt(document.getElementById('num1').value);
    var n2=parseInt(document.getElementById('num2').value);
    var oper=document.getElementById('operation').value;

    if(oper === '+'){
    document.getElementById('Result').value=n1+n2;
    }
    if(oper === '-'){
    document.getElementById('Result').value=n1-n2;
    }
}