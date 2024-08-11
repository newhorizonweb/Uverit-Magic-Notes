


// Set the browser window width
let pageWidth = window.outerWidth;

function sendPageWidth(){
    chrome.runtime.sendMessage({
        type: 'currentPageWidth',
        width: pageWidth
    });
}

let timeout;

window.addEventListener('resize', () => {
    
    // Set the browser window width
    pageWidth = window.outerWidth;

    // Debounce sending the message for performance
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        sendPageWidth();
    }, 100);

});

sendPageWidth();
