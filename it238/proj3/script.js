function getNumbers( ) {
    var lotto = new Lotto(30,5);
    lotto.selectBalls( );
    for(let i = 1; i <= 5; i++){
        let imgId = i.valueOf( );
        let imgValue = lotto.getBall(i);
        let imagePlace = document.getElementById(imgId);
        let path = "../proj3/images/lottoballs/" + imgValue + ".gif";
        imagePlace.src = path;
    }
}

function init ( ) {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", getNumbers);
}

window.addEventListener("load", init);