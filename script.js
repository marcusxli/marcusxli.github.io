// Typing animation settings
const TEXT_TO_TYPE = "Hi, my name is Marcus";
const TYPING_SPEED = 100;
const TYPING_DELAY = 500;

// Elements
const navigation = document.getElementById('navigation');
const typingText = document.getElementById('typingText');

// Reset to home immediately on any page load
window.addEventListener('DOMContentLoaded', () => {
    // Force immediate scroll to top
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    
    // Reset all states immediately
    typingText.textContent = '';
    navigation.classList.remove('show');
    document.body.style.overflowY = 'hidden';
});

// Additional reset on full page load
window.addEventListener('load', () => {
    // Force scroll to top again
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    
    // Ensure states are reset
    typingText.textContent = '';
    navigation.classList.remove('show');
    document.body.style.overflowY = 'hidden';
    
    // Start typing animation
    setTimeout(() => {
        startTypingAnimation();
    }, TYPING_DELAY);
});

// Handle page visibility changes (tab switching, etc.)
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // Reset when tab becomes visible
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
    }
});

function startTypingAnimation() {
    let i = 0;
    
    function typeWriter() {
        if (i < TEXT_TO_TYPE.length) {
            typingText.textContent += TEXT_TO_TYPE.charAt(i);
            i++;
            setTimeout(typeWriter, TYPING_SPEED);
        } else {
            // Animation complete - show navigation and enable scrolling
            setTimeout(() => {
                navigation.classList.add('show');
                document.body.style.overflowY = 'auto';
                // Add click handlers to navigation links
                addNavigationHandlers();
            }, 50);
        }
    }
    
    typeWriter();
}

function addNavigationHandlers() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function opentab(tabname) {
    // Get all tab links and contents
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");
    
    // Remove active classes
    for(let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    
    // Add active class to clicked tab
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}