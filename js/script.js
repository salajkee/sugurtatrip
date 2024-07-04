// Hamburger menu
try {
	const hamburger = document.querySelector('.hamburger');
	const dropdown = document.querySelector('.dropdown');

	hamburger.addEventListener('click', () => {
		if (hamburger.classList.contains('hamburger--active')) {
			hamburger.classList.remove('hamburger--active');
			dropdown.classList.remove('dropdown--active');
		} else {
			hamburger.classList.add('hamburger--active');
			dropdown.classList.add('dropdown--active');
		}
	});

	// Обработчик клика по всему документу
	document.addEventListener('click', event => {
		const isClickInsideHamburger = hamburger.contains(event.target);
		const isClickInsideDropdown = dropdown.contains(event.target);

		// Если клик был вне hamburger или dropdown
		if (!isClickInsideHamburger && !isClickInsideDropdown) {
			hamburger.classList.remove('hamburger--active');
			dropdown.classList.remove('dropdown--active');
		}
	});
} catch (e) {}

// Выбор тарифа
try {
	new Datepicker('#multi', {
		// ranged: true,
		within: true,
	});
} catch (e) {}

// Select country
try {
	const selects = document.querySelectorAll('.select');

	selects.forEach(select => {
		const selectBtn = select.querySelector('.select__btn');
		const selectContent = select.querySelector('.select__content');
		const options = select.querySelectorAll('.options__item');
		const searchInput = select.querySelector('.select__content-search input');

		selectBtn.addEventListener('click', function () {
			select.classList.toggle('select--active');
		});

		options.forEach(option => {
			option.addEventListener('click', function () {
				const text = option.textContent;
				selectBtn.querySelector('span').textContent = text;
				select.classList.remove('select--active');
			});
		});

		searchInput.addEventListener('input', function (e) {
			const searchText = e.target.value.trim().toLowerCase();
			options.forEach(option => {
				const optionText = option.textContent.toLowerCase();
				if (optionText.includes(searchText)) {
					option.style.display = 'block';
				} else {
					option.style.display = 'none';
				}
			});
		});

		document.addEventListener('click', function (e) {
			if (!select.contains(e.target)) {
				select.classList.remove('select--active');
			}
		});
	});
} catch (e) {}

// Datepicker
try {
	const date = document.querySelector('.item__date');
	const datePickerDay = date.querySelector('.datepicker__day');

	if (date.dataset.value) {
		date.textContent = date.dataset.value;
	} else {
		date.textContent = date.dataset.text;
	}

	datePickerDay.addEventListener('click', e => {
		console.log(e.target);
	});
} catch (e) {}

// Homepage - Blog carousel
try {
	new Swiper('.blog__slider', {
		breakpoints: {
			320: {
				slidesPerView: 'auto',
				spaceBetween: 20,
			},
			993: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	});
} catch (e) {}

// Whyarewe tabs
try {
	const tabs = document.querySelectorAll('.tabs__list');
	const tabContents = document.querySelectorAll('.tabcontent');

	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			tabs.forEach(tab => tab.classList.remove('tabs__list--active'));

			tab.classList.add('tabs__list--active');

			tabContents.forEach(content => content.classList.add('hide'));
			tabContents[index].classList.remove('hide');
		});
	});
} catch (e) {}

// Whyarewe FAQ Accordion
try {
	const faq = document.querySelector('.faq');
	const items = faq.querySelectorAll('.faq__list-item');
	const itemHeads = faq.querySelectorAll('.item__head');

	itemHeads.forEach(itemHead => {
		itemHead.addEventListener('click', () => {
			const item = itemHead.parentNode;
			const isActive = item.classList.contains('active');

			items.forEach(item => {
				item.classList.remove('active');
				item.lastElementChild.style.height = 0;
			});

			if (!isActive) {
				item.classList.add('active');
				item.lastElementChild.style.height = `${item.lastElementChild.scrollHeight}px`;
			}
		});
	});
} catch (e) {}

// Selectionpage Card Accordion
try {
	const selectionList = document.querySelector('.selection__list');
	const items = selectionList.querySelectorAll('.selection__list-item');
	const itemBtn = selectionList.querySelectorAll('.item__arrow');

	itemBtn.forEach(btn => {
		btn.addEventListener('click', () => {
			const item = btn.parentNode.parentNode;
			const isActive = item.classList.contains('active');

			if (!isActive) {
				item.classList.add('active');
				item.lastElementChild.style.height = `${item.lastElementChild.scrollHeight}px`;
			} else {
				item.classList.remove('active');
				item.lastElementChild.style.height = 0;
			}
		});
	});
} catch (e) {}

// Footer Accordion
try {
	const footer = document.querySelector('.footer');
	const items = footer.querySelectorAll('.footer__item');
	const itemHeads = footer.querySelectorAll('.footer__item-head');

	itemHeads.forEach(itemHead => {
		itemHead.addEventListener('click', () => {
			const item = itemHead.parentNode;
			const isActive = item.classList.contains('active');

			items.forEach(item => {
				item.classList.remove('active');
				item.lastElementChild.style.height = 0;
				item.lastElementChild.style.marginBottom = 0;
			});

			if (!isActive) {
				item.classList.add('active');
				item.lastElementChild.style.height = `${item.lastElementChild.scrollHeight}px`;
				item.lastElementChild.style.marginBottom = `10px`;
			}
		});
	});
} catch (e) {}

// Open / Close Filter
try {
	const filter = document.querySelector('.selection__filter');
	const filterShowBtn = document.querySelector('.selection__filter-btn');
	const filterHideBtn = document.querySelector('.filter__return');

	filterShowBtn.addEventListener('click', () => {
		if (window.innerWidth < 992) {
			filter.classList.add('active');
		}
	});

	filterHideBtn.addEventListener('click', () => {
		if (window.innerWidth < 992) {
			filter.classList.remove('active');
		}
	});
} catch (e) {}
