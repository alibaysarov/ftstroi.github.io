
export const burger =(burger, menu)=>{
	let burgerBtn=document.querySelector(burger),
	menuPanel=document.querySelector(menu);
	burgerBtn.addEventListener('click',(e)=>{
		burgerBtn.classList.toggle('active')
		menuPanel.classList.toggle('active')
		document.body.classList.toggle('lock')
	})
	
}
