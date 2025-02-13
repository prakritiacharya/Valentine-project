let messageIndex=0;
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

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const messagesContainer = document.querySelector('.messages-container');
    
    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = messages[messageIndex];
    
    // Append the new message to the container
    messagesContainer.appendChild(messageElement);
    
    // Start the fade-out effect after a short delay
    setTimeout(() => {
        messageElement.classList.add('fade-out'); // Trigger fade-out animation
    }, 2500); // Keep the message for 2.5 seconds before fading it out

    // Update the message index
    messageIndex = (messageIndex + 1) % messages.length;
    
    // font size animation for the Yes button
    const yesButton = document.querySelector('.yes-button');
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}