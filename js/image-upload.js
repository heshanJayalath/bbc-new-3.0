const wrapper = document.querySelector('.wrapper');
const defaultBtn = document.querySelector('#default-btn');
const fileName = document.querySelector('.file-name');
const cancelBtn = document.querySelector('#cancel-btn');
const customBtn = document.querySelector('#custom-btn');
const img = document.querySelector('.photo');
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

function defaultBtnActive(){
    defaultBtn.click();
}
defaultBtn.addEventListener("change", function(){
    const file = this.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload=function(){
            const result =reader.result;
            img.src = result;
            wrapper.classList.add('active');
        }
        cancelBtn.addEventListener("click",function(){
            img.src="";
            wrapper.classList.remove('active');
        })
        reader.readAsDataURL(file);
    }
    if(this.value){
        let valueStore = this.value.match(regExp);
        fileName.textContent = valueStore;
    }
});


