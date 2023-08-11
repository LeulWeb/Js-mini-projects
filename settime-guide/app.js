//setTimeout

let repeat =  setInterval(function () {
    console.log("call me every 2second")
}, 2000)


setTimeout(() => {
    clearInterval(repeat)
}, 6000);
