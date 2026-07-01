document.addEventListener('click', function (e) {
    if (!window.confetti) {
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
        script.onload = function () {
            fireConfetti(e);
        };
        document.body.appendChild(script);
    } else {
        fireConfetti(e);
    }

    function fireConfetti(event) {
        for (let i = 0; i < 8; i++) {
            confetti({
                particleCount: 7,
                angle: i * 45, 
                spread: 12,
                startVelocity: 7,
                scalar: 0.3,
                origin: {
                    x: event.clientX / window.innerWidth,
                    y: event.clientY / window.innerHeight
                }
            });
        }
    }
});
