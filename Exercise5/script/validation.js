//Username Validation
const nameInput = document.getElementById('username');

nameInput.addEventListener('input', () => {
  nameInput.setCustomValidity('');
  nameInput.checkValidity();
});

nameInput.addEventListener('invalid', () => {
  if(nameInput.value === '') {
    nameInput.setCustomValidity('Enter your username!');
  } else {
    nameInput.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
  }
});


//pw strength
const password1= document.getElementById('password1');

password1.addEventListener('input', ()=>{
    password1.setCustomValidity('');
    password1.checkValidity();
} );

password1.addEventListener('invalid', () => {
  if(password1.value === '') {
    password1.setCustomValidity('Enter your password!');
  } else {
    password1.setCustomValidity('Passwords Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters. Try again!');
  }
});

//passwords match

const password2 = document.getElementById('password2');


password2.addEventListener('input', () =>{
  password2.setCustomValidity('');
  let valid = password1.value == password2.value;
	if (!valid) {
		password2.setCustomValidity("Passwords should match (and they don't)");
	} else {
		password2.setCustomValidity("");
	}
});


const creditNum=document.getElementById('ccnum');

creditNum.addEventListener('input', ()=>{
  creditNum.setCustomValidity('');
  creditNum.checkValidity();
} );

creditNum.addEventListener('invalid', () => {

if(creditNum.value === '') {
  creditNum.setCustomValidity('Enter your credit card Number!');
} else {
  creditNum.setCustomValidity('Credit card number must be between 13-16 digits. Try again!');
  
}
});