function openMenu() {
    // document.addEventListener('DOMContentLoaded', function() {});
    const burgerButton = document.getElementById('open-menu-button');
    const menuPage = document.querySelector('#menu section');

    burgerButton.addEventListener('click', function () {
        menuPage.style.visibility = 'visible';
        menuPage.style.left = '0%';
        console.log("menu reveal");
        menuRevealAnimation(() => listRevealAnima.play());
    });
}

function closeMenu() {
    const closeMenuButton = document.getElementById('close-menu-button');
    const menuPage = document.querySelector('#menu section');

    closeMenuButton.addEventListener('click', function () {
        menuPage.style.visibility = 'hidden';
        menuPage.style.left = '-100%';
    });
}

// menu list reveal animation
function menuRevealAnimation() {
    const options = document.querySelectorAll('.menu-option');
    const option = document.querySelector('.menu-option');

    gsap.defaults({ duration: 0.5 });

    const listRevealAnima = gsap.timeline();
    listRevealAnima
        .fromTo('li', { y: -50, opacity: 0 }, { y: 0, stagger: 0.1, opacity: 1 });

    options.forEach((option) => {
        const hoverAnimation = gsap.timeline({ paused: true })
            .fromTo(option.querySelector('.hover-line'), { scaleX: 0 }, { scaleX: 1, opacity: 1 });

        option.addEventListener("mouseenter", () => hoverAnimation.play());
        option.addEventListener("mouseleave", () => hoverAnimation.reverse());
    });
}

// bgm JavaScript程式碼
function toggleAudio() {
    var audio = document.getElementById('audio');
    var audioToggle = document.getElementById('audioToggle');
    var audioEnabled = audio.paused;

    if (audioEnabled) {
        audio.play(); // 開啟音效
        audioToggle.src = 'image/home/sound_icon.png'; // 切換圖示為開啟的喇叭
    } else {
        audio.pause(); // 靜音
        audioToggle.src = 'image/home/sound_icon_2.png'; // 切換圖示為關閉的喇叭
    }
}
