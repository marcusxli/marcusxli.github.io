// Typing animation settings
const TEXT_TO_TYPE = "Hi, my name is Marcus";
const TYPING_SPEED = 100;
const TYPING_DELAY = 500;

// Elements
const navigation = document.getElementById('navigation');
const typingText = document.getElementById('typingText');

// Start typing animation after page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        startTypingAnimation();
    }, TYPING_DELAY);
});

function startTypingAnimation() {
    let i = 0;
    
    function typeWriter() {
        if (i < TEXT_TO_TYPE.length) {
            typingText.textContent += TEXT_TO_TYPE.charAt(i);
            i++;
            setTimeout(typeWriter, TYPING_SPEED);
        } else {
            // Animation complete - show navigation
            setTimeout(() => {
                navigation.classList.add('show');
            }, 1000);
        }
    }
    
    typeWriter();
}