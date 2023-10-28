const contentDiv = document.getElementById('content');

window.addEventListener('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // User is near the bottom of the page
        appendMoreContent();
    }
});

function appendMoreContent() {
    for (let i = 0; i < 10; i++) {
        const paragraph = document.createElement('p');
        paragraph.textContent = 'Just some more content... keep scrolling!';
        contentDiv.appendChild(paragraph);
    }
}
