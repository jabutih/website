const blockBackground = document.querySelector('.block-background');

setTimeout(() => {
    blockBackground.classList.add('invisible');
}, 5000);

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=> {

    setTimeout(()=>{

        setTimeout(() => {
            intro.classList.add('fade-out');
        }, 9700);

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active')
            }, (idx + 1) * 40);
        })

        setTimeout(()=>{
            logo.classList.add('active')
        },1000)

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 10)
            })

        },9700);


    })
})

var typed = new Typed(".auto-type", {
    strings: [
        "いろはにほへと<br>ちりぬるを<br>わかよたれそ<br>つねならむ<br>うゐのおくやま<br> けふこえて<br>あさきゆめみし<br>ゑひもせす<br><span class='author'>弘法大師</span>",
        "胸がある人じゃないと<br>面白くないんじゃない？<br>(笑う)<br><span class='author'>さっちゃん</span>",
        "この美しい短歌こそ日本人の心<br>敷島の<br>大和心を<br>人問わば<br>朝日ににおう<br>山桜花<br><span class='author'>山部赤人</span>",
        "体育館<br>虫が入ったら<br>殺します<br><span class='author'>さっちゃん</span>",
        "夏山の<br>木末の茂に<br>ほととぎす<br>鳴きとよむなる<br>声の遥けさ<br> <span class='author'>柿本人麻呂</span>",
        "天の海に<br>雲の波立ち<br>月の船<br>星の林に<br>漕ぎ隠る見ゆ<br><span class='author'>在原業平</span>",
        "秋山に<br>もみつ木の葉の<br>うつりなば<br>さらにや秋を<br>見まく欲りせむ<br><span class='author'>藤原定家</span>",
        "天の下<br>すでに覆ひて<br>ふる雪の<br>光を見れば<br>貴くもあるか<br><span class='author'>小野小町</span>"],
    typeSpeed: 40,
    backSpeed: 30,
    backDelay: 5000,
    startDelay: 15000,
    loop: true,
    preStringTyped: function() {
        changeBackground(); },
})

function preloadImages(urls, allImagesLoadedCallback){
    var loadedCounter = 0;
    var toBeLoadedNumber = urls.length;
    urls.forEach(function(url){
        preloadImage(url, function(){
            loadedCounter++;
            console.log('Number of loaded images: ' + loadedCounter);
            if(loadedCounter == toBeLoadedNumber){
                allImagesLoadedCallback();
            }
        });
    });
    function preloadImage(url, anImageLoadedCallback){
        var img = new Image();
        img.onload = anImageLoadedCallback;
        img.src = url;
    }
}
 preloadImages([
    "/fundos/spring2.webp",
    "/fundos/sachika.png",
    "/fundos/spring1.webp",
    "/fundos/summer1.webp",
    "/fundos/summer2.webp",
    "/fundos/autumn1.webp",
    "/fundos/autumn2.webp",
    "/fundos/winter1.webp"
], function(){
    console.log('すべての画像がロードされました');
});

var backgroundImages = [
    "/fundos/spring2.webp",
    "/fundos/sachika.png",
    "/fundos/spring1.webp",
    "/fundos/summer1.webp",
    "/fundos/summer2.webp",
    "/fundos/autumn1.webp",
    "/fundos/autumn2.webp",
    "/fundos/winter1.webp"];
var currentBackgroundIndex = -1;
if (currentBackgroundIndex === 6) {
    currentBackgroundIndex = -1;
}

function changeBackground() {
    var nextBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;

    document.body.style.setProperty('--bg-next', `url(${backgroundImages[nextBackgroundIndex]})`);

    document.body.classList.add('fade-in');

    setTimeout(() => {
        document.body.style.setProperty('--bg-current', `url(${backgroundImages[nextBackgroundIndex]})`);
        document.body.classList.remove('fade-in');
        currentBackgroundIndex = nextBackgroundIndex;
    }, 1000);
}
