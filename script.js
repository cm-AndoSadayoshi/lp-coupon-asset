document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // デモボタンのデバイス判定処理
    const demoButton = document.getElementById('demo-button');
    if (demoButton) {
        demoButton.addEventListener('click', (e) => {
            e.preventDefault();

            // モバイルデバイスの判定
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                || window.innerWidth <= 768;

            // 遷移先URLを決定
            const targetUrl = isMobile
                ? 'https://prototype-coupon-function.vercel.app/mini'
                : 'https://prototype-coupon-function.vercel.app/demo';

            // 新しいタブで開く
            window.open(targetUrl, '_blank', 'noopener,noreferrer');
        });
    }
});
