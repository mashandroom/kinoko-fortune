const resultList =
    [
        {
            name: '中吉',
            img: 'chuukichi.png',
        },
        {
            name: '大吉',
            img: 'daikichi.png',
        },
        {
            name: '大凶',
            img: 'daikyou.png',
        },
        {
            name: '吉',
            img: 'kichi.png',
        },
        {
            name: '凶',
            img: 'kyou.png',
        },
        {
            name: '小吉',
            img: 'shoukichi.png',
        },
        {
            name: '末吉',
            img: 'suekichi.png',
        },
    ]
let resultId = 0
const luckyKinokoList = [
    {
        name: 'えのきだけ',
        img: 'enokidake.png',
    },
    {
        name: 'エリンギ',
        img: 'eringi.png',
    },
    {
        name: 'きくらげ',
        img: 'kikurage.png',
    },
    {
        name: 'きのこの山',
        img: 'kinokonoyama.png',
    },
    {
        name: 'まいたけ',
        img: 'maitake.png',
    },
    {
        name: 'マジックマッシュルーム',
        img: 'masicmushroom.png',
    },
    {
        name: 'まつたけ',
        img: 'matsutake.png',
    },
    {
        name: 'マッシュルーム',
        img: 'mushroom.png',
    },
    {
        name: 'なめこ',
        img: 'nameko.png',
    },
    {
        name: 'しいたけ',
        img: 'shiitake.png',
    },
    {
        name: 'しめじ',
        img: 'shimeji.png',
    },
    {
        name: 'トリュフ',
        img: 'toryufu.png',
    }
]

let kinokoId = 0

function init() {
    console.log(`${resultList.length}`)
    fortuneBgm.addEventListener('ended', () => {
        ponBgm.play();
        setTimeout(showResult, 2000);
    })

    fortuneBox.addEventListener('click', startFortune)
}

function startFortune() {
    fortuneBoxAnimation.classList.remove('none')
    fortuneBox.classList.add('none')
    fortuneBgm.play();
}

function showResult() {
    fortuneBoxAnimation.classList.add("none");
    result.classList.remove('none')
    resultId = Math.floor(Math.random() * resultList.length)
    resultImage.src = `./res/img/result/${resultList[resultId].img}`
    kinokoId = Math.floor(Math.random() * luckyKinokoList.length)
    luckyKinoko.src = `./res/img/kinoko/${luckyKinokoList[kinokoId].img}`

}

function tweet(body) {
    tweetLink = document.getElementById('tweetLink');
    tweetLink.href = `https://twitter.com/share?text=【キノコ】私の今年のラッキーキノコは、${luckyKinokoList[kinokoId].name}です。美味しく頂きます。&url=https://mashandroom.github.io/kinoko-fortune/&hashtags=菌賀信念,キノコ`;
    tweetLink.click();
}

function shareFB() {

    FB.ui({
        method: 'feed',
        link: '' + 'https://mashandroom.github.io/kinoko-fortune/',
        display: 'popup',
        quote: `【キノコ】私の今年のラッキーキノコは、${luckyKinokoList[kinokoId].name}です。`
    }, function (res) {
        //返答をログに出力
        console.log(res);
    });
}
window.onload = init;