function setTheatre() {
    const btn = document.querySelector('.ytp-size-button');

    // Only act if the button exists and we're NOT already in theatre mode
    if (btn && !document.querySelector('ytd-watch-flexy[theater]')) {
        btn.click();
    }
}

// Run once after page load
setTimeout(setTheatre, 1000);

// Observe page changes, but only trigger when a new video loads
const observer = new MutationObserver(() => {
    if (location.pathname === "/watch") {
        setTheatre();
    }
});

observer.observe(document.body, { childList: true, subtree: true });
