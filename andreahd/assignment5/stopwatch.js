
function init() {
    "use strict";
    var startTime, running = false, display, timer, offset = 0;
    display = document.getElementById("display-area");
    console.log("init");
    
    function updateTime() {
        console.log("update");
        var time = new Date()
        display.value = formatTime(time.getTime() - startTime + offset);
    }
    
    function formatTime(ms) {
        // Format time to hh:mm:ss:mmm
        var mmm = ms % 1000;
        
        var seconds  = Math.floor(ms / 1000)
        var f_s = String(seconds % 10);
        var s_s = String(Math.floor(seconds / 10) % 6);
        
        var minutes = Math.floor(seconds / 60)
        var f_m = String(minutes % 10);
        var s_m = String(Math.floor(minutes / 10) % 6);
        
        var hours = Math.floor(minutes / 60)
        var f_h = String(hours % 10);
        var s_h = String(hours / 10);
        
        return s_h + f_h + ":" + s_m + f_m + ":" + s_s + f_s + "." + mmm
        
    }
    
        
    document.getElementById("toggle-button").addEventListener("click", function toggle(event) {
        if (running) {
            var time = new Date();
            offset = offset + time.getTime() - startTime;
            window.clearInterval(timer);
            console.log("stop. Set offset to " + String(offset));
            
            running = false;
        } else {
            console.log("start");
            var time = new Date();
            startTime = time.getTime();
            timer = window.setInterval(updateTime, 1);
            running = true;
        }
    });
    document.getElementById("reset-button").addEventListener("click", function reset(event) {
        console.log("reset");
        var time = new Date();
        startTime = time.getTime();
        offset = 0;
        display.value = "00:00:00.000";
        
    });
}

window.addEventListener("load", function load(event) {
    "use strict";
    
    window.removeEventListener("load", load);
    init();
});