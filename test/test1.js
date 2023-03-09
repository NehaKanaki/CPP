let submitBtn=document.getElementById('btn');
submitBtn.addEventListener('click',display);

function display(){
    var input = document.getElementById("d1").value;
    var input1 = document.getElementById("t1").value;
    // alert(input+" "+ input1);
    document.write( input+""+input1);
}