const circleProgress = document.querySelector(".circle-progress");
const numberOfBreaths = document.querySelector(".breath-input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const breathsText = document.querySelector(".breaths-text");
let breathsLeft = 3;

//watching for selected breaths from user
numberOfBreaths.addEventListener("change",()=>{
    breathsLeft=numberOfBreaths.value;
    breathsText.innerText = breathsLeft;
});

//grow/shrink  circle

const growCircle = () =>{
    circleProgress.classList.add("circle-grow");
    setTimeout(()=>{
        circleProgress.classList.remove("circle-grow");

    }, 8000);
};

//Breathing Instructions
const breathTextUpdate=()=>{
    breathsLeft--;
    breathsText.innerText =breathsLeft;
    instructions.innerText="Breath In";
    setTimeout(()=>{
        instructions.innerText="Hold your breath";
        setTimeout(()=>{
            instructions.innerText="Exhale Slowly";
        },4000);
    },4000);
};

//Breathing Function
const breathingApp= ()=>{
    const breathingAnimation= setInterval(()=>{
        if (breathsLeft ===0){
            clearInterval(breathingAnimation);
            instructions.innerText="Breathing session completed. Click 'Begin' to start another session!";
            start.classList.remove("button-inactive");
            breathsLeft= numberOfBreaths.value;
            breathsText.innerText =breathsLeft;
            return;
        }
        growCircle();
        breathTextUpdate();
    },12000);
}

//start breathing 
start.addEventListener('click',()=>{
    start.classList.add("button-inactive");
    instructions.innerText="Get relaxed, and ready to begin breathing";
    setTimeout(()=>{
        instructions.innerText="You are about to begin...";
        setTimeout(()=>{
            breathingApp();
            growCircle();    //for first time
            breathTextUpdate(); //for first time
        },2000)
     },2000)
});