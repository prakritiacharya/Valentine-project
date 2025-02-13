const messages = [
    "😐Are you sure? Think once again",
    "You are such an ass😒",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const messageContainer = document.querySelector('.message-container'); // Added message container
    
    if (!messageContainer) {
        const newMessageContainer = document.createElement('div');
        newMessageContainer.classList.add('message-container');
        newMessageContainer.style.position = 'absolute';
        newMessageContainer.style.top = '50px';
        newMessageContainer.style.fontSize = '1.2em';
        newMessageContainer.style.transition = 'opacity 0.2s ease-out'; // Added fade effect
        document.body.appendChild(newMessageContainer);
    }

    const messageElement = document.querySelector('.message-container');
    messageElement.style.opacity = '0'; // Fade out old message
    setTimeout(() => {
        messageElement.textContent = messages[messageIndex]; // Show new message
        messageElement.style.opacity = '1'; // Fade in new message
    }, 200); // Reduced delay for faster message switch

    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`; // Yes button growth remains
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
