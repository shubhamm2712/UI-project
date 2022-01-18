function begin(){
    show=0;
    button1=document.getElementById("tab1");
    button2=document.getElementById("tab2");
    stopwatch=document.getElementById("stopwatch");
    output=document.getElementById("time");
    text=document.getElementById("tag");
    button_start=document.getElementById("start");
    button_reset=document.getElementById("reset");
    timeRepeat=null;
    running_stopwatch=null;
    current=null;
    stopwatch_counter=0;
}
function def(){
    if(timeRepeat!=null)
        clearTimeout(timeRepeat);
    if(running_stopwatch!=null)
        clearTimeout(running_stopwatch);
    button1.innerHTML="Current Time";
    button2.innerHTML="StopWatch";
    stopwatch.style.display="none";
    button1.style.backgroundColor="rgba(255,255,255,0.1)";
    button1.style.color="rgba(0,0,0,1)";
    button2.style.backgroundColor="rgba(255,255,255,0.1)";
    button2.style.color="rgba(0,0,0,1)";
    button_start.style.backgroundColor="rgba(255,255,255,0.1)";
    button_start.style.color="rgba(0,0,0,1)";
    button_reset.style.backgroundColor="rgba(255,255,255,0.1)";
    button_reset.style.color="rgba(0,0,0,1)";
}





function mytime(){
    var d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    if(h<10)
        h="0"+h;
    if(m<10)
        m="0"+m;
    if(s<10)
        s="0"+s;
    output.innerHTML=h+":"+m+":"+s;
    timeRepeat=setTimeout(function(){mytime();},500);
}
function change_time(){
    if(show==1){
        show=0;
        def();
        output.style.display="none";
        text.style.display="block";
    }
    else{
        show=1;
        def();
        text.style.display="none";
        output.style.display="block";
        button1.style.backgroundColor="rgba(0,0,0,0.6)";
        button1.style.color="rgba(255,255,255,0.4)";
        mytime();
    }
}




function display_stopwatch(d){
    var c=Math.floor((new Date()-d)/1000);
    var h=Math.floor(c/3600);
    var m=Math.floor((c%3600)/60);
    var s=Math.floor(c%60);
    if(h<10)
        h="0"+h;
    if(m<10)
        m="0"+m;
    if(s<10)
        s="0"+s;
    output.innerHTML=h+":"+m+":"+s;
    running_stopwatch=setTimeout(function(){display_stopwatch(d);},250);
}
function start_stopwatch(){
    if(stopwatch_counter==0)
    {
        start_time=new Date();
        console.log(start_time);
        stopwatch_counter=1;
        button_start.style.backgroundColor="rgba(0,0,0,0.6)";
        button_start.style.color="rgba(255,50,50,0.6)";
        button_start.innerHTML="Stop";
        display_stopwatch(start_time);
    }
    else if(stopwatch_counter==1)
    {
        stopwatch_counter=2;
        stop_time=new Date();
        button_start.style.backgroundColor="rgba(0,0,0,0.6)";
        button_start.style.color="rgba(100,255,100,0.4)";
        button_start.innerHTML="Start";
        clearTimeout(running_stopwatch);
    }
    else
    {
        stopwatch_counter=1;
        diff=new Date()-stop_time;
        start_time=new Date(start_time.getTime()+diff);
        button_start.style.backgroundColor="rgba(0,0,0,0.6)";
        button_start.style.color="rgba(255,50,50,0.6)";
        button_start.innerHTML="Stop";
        display_stopwatch(start_time);
    }
}
function reset_stopwatch(){
    if(running_stopwatch!=null)
        clearTimeout(running_stopwatch);
    stopwatch_counter=0;
    button_start.style.backgroundColor="rgba(255,255,255,0.1)";
    button_start.style.color="rgba(0,0,0,1)";
    button_start.innerHTML="Start";
    output.innerHTML="00:00:00";
}
function def_stopwatch(){
    if(show==2){
        show=0;
        def();
        reset_stopwatch();
        output.style.display="none";
        text.style.display="block";
    }
    else{
        show=2;
        def();
        reset_stopwatch();
        text.style.display="none";
        output.style.display="block";
        stopwatch.style.display="block";
        button2.style.backgroundColor="rgba(0,0,0,0.6)";
        button2.style.color="rgba(255,255,255,0.4)";
    }
}