const video1 = document.getElementsByTagName('video')[0];
const button = document.getElementById('button');
const text = document.getElementById('text');

button.addEventListener('click', ()=>{
    button.classList.remove('button-show');
    text.classList.remove('text-show');
    button.classList.add('hidden');
    text.classList.add('hidden');
    video1.classList.remove('hidden');
    video1.classList.add('video-show');
});