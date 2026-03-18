function fitCanvas() {
    var c = document.querySelector('.canvas');
    if (!c) return;
    var maxW = window.innerWidth - 40;
    var maxH = window.innerHeight - 100;
    var s = Math.min(maxW / 1400, maxH / 787.5, 1);
    c.style.zoom = s;
}
window.addEventListener('resize', fitCanvas);
window.addEventListener('DOMContentLoaded', fitCanvas);
