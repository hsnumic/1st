const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearSearch');
const cards = [...document.querySelectorAll('#cardsContainer .col-md-6, #timeline .accordion-item')];
const badges = [...document.querySelectorAll('.badge-cat')];

function normalize(s) { return (s || '').toLowerCase(); }

function applyFilter() {
    const q = normalize(searchInput.value);
    const activeCats = badges.filter(b => b.classList.contains('text-bg-dark', 'active') || b.classList.contains('active')).map(b => b.dataset.cat);
    cards.forEach(el => {
        const text = normalize(el.textContent);
        const cats = (el.getAttribute('data-cats') || '').split(',').map(normalize);
        const matchText = !q || text.includes(q);
        const matchCat = !activeCats.length || activeCats.some(c => cats.includes(normalize(c)));
        el.style.display = (matchText && matchCat) ? '' : 'none';
    });
}

searchInput.addEventListener('input', applyFilter);
clearBtn.addEventListener('click', () => { searchInput.value = ''; applyFilter(); });

badges.forEach(b => {
    b.addEventListener('click', () => {
        // 切換外觀：選中變更樣式（簡單處理）
        b.classList.toggle('active');
        // 視覺提示：active時加上邊框
        b.style.outline = b.classList.contains('active') ? '2px solid rgba(0,0,0,.25)' : 'none';
        applyFilter();
    });
});

// 初始
applyFilter();