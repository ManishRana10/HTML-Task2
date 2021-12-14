const button= document.getElementById("btn");
const body= document.body;
const colors =['red','purple','pink','yellow','blue','green'];
button.addEventListener('click',changeBackground)

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');




function changeBackground()
{
    const colorsIndex = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorsIndex]
    
}

form.addEventListener('submit',e=>{
    e.preventDefault();
    validateInputs();
});
  const setError = (element , message)=>{
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector('.error');

      errorDisplay.innerText = message;
      inputControl.classList.add('error');
      inputControl.classList.remove('success');
  }
  const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
  };

 const isValidEmail = email =>{
    
        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(String(email).toLowerCase()); 
 }
const validateInputs= () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    if(usernameValue===''){
        setError(username,'Username is required');
    }
    else{
        setSuccess(username);
    }
    if(emailValue===''){
        setError(email,'Email is required');
    }
    else if(!isValidEmail(emailValue)){
        setError(email,'Provie a valid email address')
    }
    else{
        setSuccess(email);
    }
    if(passwordValue===''){
        setError(password,'Password is required');
    }
    else if(passwordValue.length<8){
        setError(password,'Password must be atleast 8 characters')
    }
    else{
        setSuccess(password);
    }
    if(password2Value===''){
        setError(password2,'Please confirm your password');
    }
    else if(password2Value!==passwordValue){
        setError(password2,"Passwords doesn't match");
    }
    else{
        setSuccess(password2);
    }
};