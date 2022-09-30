export const form=()=>{
	let formName=document.querySelector('.js-user-name');
	let submitBtn=document.querySelector('.js-form-submit');
	let userMail=document.querySelector('.js-user-mail');
	let inputs=document.querySelectorAll('input');
	inputs.forEach((input)=>{
		input.addEventListener('focus',()=>{
			input.classList.remove('error')
		})
	})
	formName.addEventListener('input', ()=>{
		formName.value=formName.value.replace(/[^a-zа-яё\s]/gi, '');
	})

	submitBtn.addEventListener('click',(e)=>{
		e.preventDefault();
		let emailFilter=/^[a-z0-9_.-]+@([a-z0-9-]+\.)+[a-z]{2,6}$/i
		if (emailFilter.test(userMail)) {
			console.log(true)
		}else {
			console.log(false)
			formName.value='';
			userMail.value='';
			userMail.placeholder="Неверный адрес эл.почты"
			userMail.classList.add('error');
		}


	})
	window.addEventListener('click',(e)=>{
		if (userMail.classList.contains('error') && e.target!=submitBtn) {
			userMail.classList.remove('error');
			userMail.placeholder="Ваш email"
		}
	})
		
	
}