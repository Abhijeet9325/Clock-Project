console.log("Lets write it javascript!!")
// console.log(new Date().getH());

setInterval(() => {
    let d = new Date();
    let hduration = d.getHours()
    let mduration = d.getMinutes()
    let sduration = d.getSeconds()
    let hrot = 30 * hduration + mduration / 2;
    let mrot = 6 * mduration;
    let srot = 6 * sduration;
    hour.style.transform = `rotate(${hrot}deg)`
    minutes.style.transform = `rotate(${mrot}deg)`
    seconds.style.transform = `rotate(${srot}deg)`
 
}, 1000);

// let div = document.createElement("div");
// console.log(div); you always remember this shows all prototype!!


