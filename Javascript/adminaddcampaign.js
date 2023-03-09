let div=document.createElement('div');
div.classList.add('campain-list');

let containerDiv=document.querySelector('.container');
containerDiv.appendChild(div);

let submitBtn=document.getElementById('btn');
submitBtn.addEventListener('click',display);

function display(){
    let cname=document.getElementById('cname').value;
    let mobno=document.getElementById('mobno').value;
    var start_d = document.getElementById("dstart").value;
    var end_d = document.getElementById("dend").value;
    var time_f = document.getElementById("timef").value;
    var time_t = document.getElementById("timet").value;
    let add=document.getElementById('add').value;

    // alert(cname+" "+mobno+" "+start_d+" "+end_d+" "+time_f+" "+time_t+" "+add);

    let html=`    <div class="card">
    <img src="/Images/BloodDonationCamp.jpg">
    <div class="campaign-details">
        <div class="cname">${cname}</div></div>
        <div class="remove-card>
        <button class="remove-card">X</button>
        </div></div>`;

        div.insertAdjacentHTML('beforeend',html)
}