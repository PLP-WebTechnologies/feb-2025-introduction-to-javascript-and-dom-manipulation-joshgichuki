// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    document.getElementById('dynamic-text').textContent = 'The text has been changed!';
});

// Add a new element dynamically
document.getElementById('add-element-btn').addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new dynamically added element.';
    document.getElementById('dynamic-container').appendChild(newElement);
});

// Remove the last added element
document.getElementById('remove-element-btn').addEventListener('click', () => {
    const container = document.getElementById('dynamic-container');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
});