if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceworker.js').then(registration => {
        console.log('service worker registerd');
        console.log('registration');
    }).catch(error => {
        console.log('service worker');
        console.log(error);
    });
    
}
else {
    alert('service worker not working');
}
