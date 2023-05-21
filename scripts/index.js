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
let myModel2 = document.getElementById('myModal-2');
let close2 = document.getElementById('close3');
let post = document.getElementById('create-post');
post.addEventListener('click', ()=>{
    myModel2.style.display = "block";
});
close2.addEventListener('click', ()=>{
    myModel2.style.display = 'none';
});

document.getElementById('switch-button').addEventListener('click', ()=>{
    myModel.style.display = "block";
    myModel1.style.display = 'none';
});
close.addEventListener('click', ()=>{
    myModel.style.display = 'none';
});