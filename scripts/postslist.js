let arr = document.getElementsByClassName('del');
// Get the modal
var modal = document.getElementById("myModal-d");

for(let i=0; i<arr.length; i++)
{
    arr[i].addEventListener('click', ()=>{
        modal.style.display = "block";
        document.getElementById('yes').addEventListener('click', ()=>{
            document.getElementsByClassName('post')[i].style.display='none'; 
            modal.style.display = "none";
            document.getElementById('post-5').style.position='static';
        });

        document.getElementById('no').addEventListener('click', ()=>{
            modal.style.display = "none";
        });

});
}

let myModel = document.getElementById('myModal');
let close = document.getElementById('close1');
let signUp = document.getElementById('sign-up');
signUp.addEventListener('click', ()=>{
    myModel.style.display = "block";
});
close.addEventListener('click', ()=>{
    myModel.style.display = 'none';
});

let myModel1 = document.getElementById('myModal-1');
let close1 = document.getElementById('close2');
let signIn = document.getElementById('sign-in');
signIn.addEventListener('click', ()=>{
myModel1.style.display = "block";
});
close1.addEventListener('click', ()=>{
    myModel1.style.display = 'none';
});

let arrDot = document.getElementsByClassName('dot');
for(let i=0; i<arrDot.length; i++){
    arrDot[i].addEventListener('click', ()=>{
        window.location.assign("../html/post.html");
    });
}

document.getElementById('switch-button').addEventListener('click', ()=>{
    myModel.style.display = "block";
    myModel1.style.display = 'none';
});
close.addEventListener('click', ()=>{
    myModel.style.display = 'none';
});