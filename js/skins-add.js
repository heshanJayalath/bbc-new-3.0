const inputText = document.querySelector('#skin-txt');
const myButton = document.querySelector('.skin-add-btn');
const list = document.querySelector('.skin-addition ul');

myButton.addEventListener('click',(e)=>{
    if(inputText.value !=""){
        e.preventDefault();

        const myLi =document.createElement('li');
        myLi.innerHTML = inputText.value;
        list.appendChild(myLi);

        const mySpan = document.createElement('span');
        mySpan.innerHTML='x';
        myLi.appendChild(mySpan);
    }
    const close = document.querySelectorAll('span');
    for(let i=0; i<close.length; i++){
        close[i].addEventListener('click',()=>{
            close[i].parentElement.style.opacity=0;
            setTimeout(()=>{
                close[i].parentElement.style.display ='none';
            },500)
        });
    }
    inputText.value="";
})