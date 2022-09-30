export const subMenu=(subMenuClass)=>{
	if (window.matchMedia('(max-width:700px)').matches) {
	let subMenuItem=document.querySelectorAll(subMenuClass),
	subMenuLink=document.querySelector(`${subMenuClass}>a`),
	subMenuContent=document.querySelector(`${subMenuClass}>ul`);

	subMenuItem.forEach((item)=>{
		item.addEventListener('click',(e)=>{
		e.preventDefault();
		subMenuContent.classList.toggle('active')

	})
	})
}
}