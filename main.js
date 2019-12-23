const header = document.getElementById("header");
//header.style.height = `${window.innerHeight}px`;
let count = 0;
//console.log(header);
//console.log(screen.height)

window.onscroll = function (event) {
    //console.log(origHeight);
    const windowHeight = window.innerHeight;
    console.log(`Window height is ${windowHeight}`);
    const calcHeight = windowHeight - window.pageYOffset;
    console.log(`Calc height is ${calcHeight}`);
    console.log(window.scrollY);
    console.log(window.pageYOffset);
    if (window.pageYOffset && count < 10) {
        if (calcHeight < 300) {
            //header.style.height = '300px';
        }
        else {
            //console.log(window.pageYOffset);
            //header.style.height = `${calcHeight}px`;
            console.log('Header height is ' + header.style.height);
            count++;
        }
    }
}