const btn = document.getElementById('btn');
const box = document.getElementById('bannerBox');
const title = document.getElementById('title');

btn.addEventListener('click', () => {
    box.classList.add('active');
    title.textContent = 'Success!';
    btn.textContent = 'Done';
});
