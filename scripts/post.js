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

let titleInnertext = document.getElementById('title-text').innerHTML;
let paraInnertext = document.getElementById('post-tt').innerHTML;
let updated = document.createElement('span');
updated.innerText =`UPDATED: `;
let updatedPara = document.createElement('p');
updatedPara.innerText = 'UPDATED:';
// document.getElementsByClassName('post-title')[0].innerHTML = 'hi';
let edit = document.getElementById('edit-button');
edit.addEventListener('click', ()=>{
    edit.style.display = 'none';
    document.getElementById('save-button').style.display='block';
    document.getElementById('title-text').style.border ="1px solid rgb(250, 80, 108)";
    document.getElementById('post-tt').style.border ="1px solid rgb(250, 80, 108)";
    document.getElementById('post-text').contentEditable='true';
    document.getElementById('title').contentEditable='true';
});
document.getElementById('save-button').addEventListener('click', ()=>{
    edit.style.display='block';
    document.getElementById('save-button').style.display='none';
    document.getElementById('title-text').style.border ="none";
    document.getElementById('post-tt').style.border ="none";
    document.getElementById('post-text').contentEditable='false';
    document.getElementById('title').contentEditable='false';
    if(titleInnertext !== document.getElementById('title-text').innerHTML){
        document.getElementById('title-text').insertBefore(updated,document.getElementById('title-text').childNodes[0]);
        }
        if(paraInnertext !== document.getElementById('post-tt').innerHTML){
        document.getElementById('post-tt').insertBefore(updatedPara,document.getElementById('post-tt').childNodes[0]);
}
});

let likeCount = 0;
let likeMsg =document.getElementById('like-count');
let Liked = '<span><i class="fa fa-thumbs-up" aria-hidden="true"></i></span> Liked';
document.getElementById('like-button').addEventListener('click', ()=>{
    likeCount++;
    let like = `${likeCount} person likes this!`;
    likeMsg.innerHTML = like;
    document.getElementById('like-button').innerHTML = Liked;
});

let inputVal = document.getElementById('input-value');
document.getElementById('comment-button').addEventListener('click', ()=>{
    if(inputVal.value === '' || inputVal.value ===  'Leave a comment...')
{
alert('Please leave your comment on the text box!');
}
else{
    console.log('working');
    const para = document.createElement("p");
    const node = document.createTextNode(inputVal.value);
    para.appendChild(node);
    document.getElementById("myDIV").insertBefore(para,document.getElementById("myDIV").childNodes[0]);
   }
});

document.getElementById('switch-button').addEventListener('click', ()=>{
    myModel.style.display = "block";
    myModel1.style.display = 'none';
});
close.addEventListener('click', ()=>{
    myModel.style.display = 'none';
});





