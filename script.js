document.addEventListener('DOMContentLoaded', ()=>{
	const toggleArea = document.querySelector('.toggle__area'),
			basicPrice = document.querySelector(".price-1"),
	 		profPrice = document.querySelector(".price-2"),
			masterPrice = document.querySelector(".price-3");

	toggleArea.addEventListener('click', () =>{
		if (toggleArea.classList.contains('monthly')){
			toggleArea.classList.remove('monthly');
			toggleArea.classList.add('annually');
			basicPrice.innerHTML = `<span class="price price-1">$ <span class="num">199.99</span></span>`;
			profPrice.innerHTML = `<span class="price price-2">$ <span class="num">249.99</span></span>`;
			masterPrice.innerHTML = `<span class="price price-3">$ <span class="num">399.99</span></span>`;
		} else {
			toggleArea.classList.remove('annually');
			toggleArea.classList.add('monthly');
			basicPrice.innerHTML = `<span class="price price-1">$ <span class="num">19.99</span></span>`;
			profPrice.innerHTML = `<span class="price price-2">$ <span class="num">24.99</span></span>`;
			masterPrice.innerHTML = `<span class="price price-3">$ <span class="num">39.99</span></span>`;
		}
	})

	
})