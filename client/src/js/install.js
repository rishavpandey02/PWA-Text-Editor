const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    butInstall.style.display = 'none';
    deferredPrompt.prompt();

    await deferredPrompt.userChoice;
    deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    deferredPrompt = null;
});
