let fire = document.querySelector('.fire');
let cold = document.querySelector('.cold');
let snowflakes = document.querySelectorAll('.snowflake');
const cursor = document.querySelector('.cursor');

document.body.style.cursor = 'none';
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

fire.addEventListener('mouseenter', () => {
    document.body.style.backgroundImage = 'url("bg2.avif")';
    snowflakes.forEach(snow => {
        snow.textContent = '🔥';
    });
    cold.textContent = 'HOT';
});

fire.addEventListener('mouseleave', () => {
    document.body.style.backgroundImage = 'url("bg.webp")';
    snowflakes.forEach(snow => {
        snow.textContent = '❄️';
    });
    cold.textContent = 'COLD';
});

cold.addEventListener('mouseenter', () => {
    cold.textContent = 'HOT';
});

cold.addEventListener('mouseleave', () => {
    cold.textContent = 'COLD';
});
