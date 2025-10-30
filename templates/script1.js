// ✅ FAQ Toggle
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        const icon = q.querySelector('i');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
        } else {
            answer.style.display = 'block';
            icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
        }
    });
});

// ✅ Search Filter for City List
const citySearch = document.getElementById('citySearch');
const cityList = document.getElementById('cityList').getElementsByTagName('button');

citySearch.addEventListener('keyup', () => {
    const filter = citySearch.value.toLowerCase();
    for (let btn of cityList) {
        const text = btn.textContent.toLowerCase();
        btn.style.display = text.includes(filter) ? '' : 'none';
    }
});