const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');

function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        addMessage('You', message);
        messageInput.value = '';

        // Simulate a response based on user input
        setTimeout(() => {
            switch (message.toLowerCase()) {
                case 'hello':
                case 'hi':
                    receiveMessage('Clearance', 'Hi user, how can I help you today?');
                    break;
                case 'i need some information about the quizzes':
                    receiveMessage('Clearance', 'Please navigate to your portal and look for quizzes.');
                    break;
                case 'thank you':
                    receiveMessage('Clearance', 'You\'re welcome! Is there anything else you need assistance with?');
                    break;
                default:
                    receiveMessage('Clearance', 'I\'m sorry, I didn\'t quite catch that. How can I assist you?');
                    break;
            }
        }, 1000);
    }
}

function addMessage(username, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<span class="username">${username}:</span> ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function receiveMessage(username, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<span class="username">${username}:</span> ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Example of receiving a message from the server
setTimeout(() => {
    receiveMessage('Clearance', 'Hello! This is a collaborative chat.');
}, 2000);
