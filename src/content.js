let RecursionCodingProblemTimer = {
    func:{
    },
    data:{
        startTime: new Date(),
        targetDiv: window.document.getElementById("custom-input"),
    },
}

RecursionCodingProblemTimer.func.insertTime = () =>{
    if(!window.document.getElementById("custom-input")) return;
    let startTime = RecursionCodingProblemTimer.data.startTime;
    let elapsedTime = new Date().getTime() - startTime.getTime();
    let hour = Math.floor(elapsedTime / (60 * 60 * 1000));
    elapsedTime -= (hour * 60 * 60 * 1000)
    let minute = Math.floor(elapsedTime / (60 * 1000));
    elapsedTime -= (minute * 60 * 1000);
    let second = Math.floor(elapsedTime / 1000);
    hour = ('0' + hour).slice(-2);
    minute = ('0' + minute).slice(-2);
    second = ('0' + second).slice(-2);

    let timerDiv = window.document.getElementById("recursion-coding-problem-timer")
    if(timerDiv){
        timerDiv.innerHTML = `${hour + ":" + minute + ":" + second}`;
    }else{
        let targetDiv = window.document.getElementById("custom-input");
        targetDiv.insertAdjacentHTML('beforeend',`<div class="text-light" id="recursion-coding-problem-timer">${hour + ":" + minute + ":" + second}</div>`);
    }
}
RecursionCodingProblemTimer.func["repeat"] = () =>{
    setInterval(RecursionCodingProblemTimer.func.insertTime,1000);
}
RecursionCodingProblemTimer.func.repeat()

