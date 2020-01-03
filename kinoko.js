function init() {
    fortuneBgm.addEventListener('ended', () => {
        ponBgm.play();
        setInterval(() => {
            fortuneBoxAnimation.classList.add("none");
            result.classList.remove('none')
            resultImage.src = "./result/kyou.png"

        }, 2000);
    })

    fortuneBox.addEventListener('click', () => {
        fortuneBoxAnimation.classList.remove('none')
        fortuneBox.classList.add('none')
        fortuneBgm.play();
    })
}

window.onload = init;