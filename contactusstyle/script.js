// JavaScript to check if email link works
document.getElementById('email-link').addEventListener('click', function (e) {
    // Check if mailto is supported by the browser
    if (!navigator.userAgent.includes('Mobile') && !navigator.userAgent.includes('Mail')) {
        alert('It seems that your device or browser doesn\'t support mailto links. Please copy the email and send it manually.');
        e.preventDefault(); // Prevent default action
    }
});
