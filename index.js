console.log("js is linked")
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {



    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        console.log("I got clicked");
        console.log(this);
        let click = this.innerHTML;

        makeSound(click);
        addAnimation(click);


    }

    );
}

// using keyboard for sound effects and adding eventlisters to keyboard ( haha using document)

document.addEventListener("keydown", function (event) {
    key = event.key;
    makeSound(key);
    addAnimation(key);
});




// function to create sound 
function makeSound(key) {
    if (key === 'w') {
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    }
    else if (key === 'a') {
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    }
    else if (key === 's') {
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    }
    else if (key === 'd') {
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    }
    else if (key === 'j') {
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
    }
    else if (key === 'k') {
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    }
    else {
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
    }
}

//adding animation

function addAnimation(key) {
    var classname = "." + key
    var element = document.querySelector(`${classname}`);
    element.classList.add("pressed");
    setTimeout(function () { element.classList.remove("pressed"); }, 100)

}