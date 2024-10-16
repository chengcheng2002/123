
// 倒计时功能
function countdown() {
    const examDate = new Date('2024-12-23T00:00:00'); // 设置考研日期
    const now = new Date();
    const diff = examDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML =
        `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;

    setTimeout(countdown, 1000);
}
countdown();

// 背景音乐播放功能
function playMusic() {
    const music = document.getElementById('bgMusic');
    music.play();
}
