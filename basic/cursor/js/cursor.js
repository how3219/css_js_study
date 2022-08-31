(() => {
    let btn_yes,
        btn_no,
        cursorItem,
        circle,
        x = 0,
        y = 0,
        mx = 0,
        my = 0;
    function loop() {
        mx += (x - mx) * 0.09;
        my += (y - my) * 0.09;
        cursorItem.style.transform = `translate(${mx}px,${my}px`;
        requestAnimationFrame(loop);
    }
    function init() {
        btn_yes = document.querySelector('#yes');
        btn_no = document.querySelector('#no');

        cursorItem = document.querySelector('.cursorItem');
        circle = cursorItem.querySelector('.circle');

        btn_yes.addEventListener('mouseover', () => {
            circle.style.transform = 'scale(.3)';
        });
        btn_yes.addEventListener('mouseout', () => {
            circle.style.transform = 'scale(1)';
        });
        btn_no.addEventListener('mouseover', () => {
            circle.style.transform = 'scale(.3)';
        });
        btn_no.addEventListener('mouseout', () => {
            circle.style.transform = 'scale(1)';
        });
        window.addEventListener('mousemove', (e) => {
            x = e.clientX;
            y = e.clientY;
        });
        loop();
    }
    window.addEventListener('load', init);
})();
