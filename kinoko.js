const resultList =
    [
        'chuukichi.png',
        'daikichi.png',
        'daikyou.png',
        'kichi.png',
        'kyou.png',
        'shoukichi.png',
        'suekichi.png',
    ]
const luckyKinokoList = [
    'enokidake.png',
    'eringi.png',
    'kikurage.png',
    'kinokonoyama.png',
    'maitake.png',
    'masicmushroom.png',
    'matsutake.png',
    'mushroom.png',
    'nameko.png',
    'shiitake.png',
    'shimeji.png',
    'toryufu.png',
]

function init() {
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
    const resultId = Math.floor(Math.random() * resultList.length)
    resultImage.src = `./res/img/result/${resultList[resultId]}`
    const kinokoId = Math.floor(Math.random() * luckyKinokoList.length)
    luckyKinoko.src = `./res/img/kinoko/${luckyKinokoList[kinokoId]}`

}

window.onload = init;