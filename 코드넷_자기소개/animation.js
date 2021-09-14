    let btn = document.getElementById("btn_1");
    let closebtn = document.getElementById("close");
        
    let html = document.getElementById("html");
    let css = document.getElementById("css");
    let js = document.getElementById("js");
    let c = document.getElementById("c");
    let python = document.getElementById("python");
    let r = document.getElementById("r");    
    
    btn.addEventListener("click",function(){
        console.log("click");
        start();
    })

    closebtn.addEventListener("click",function(){
        console.log("close");
        close();
    })

    // 애니매이션 작동
    function start(){
        html.style.animationPlayState = "start"
        html.style.animation = "stack 3s 1";
        css.style.animation = "stack1 2.5s 1";
        js.style.animation = "stack2 2.5s 1";
        python.style.animation = "stack3 2.5s 1";
        c.style.animation = "stack4 2.3s 1";
        r.style.animation = "stack5 2s 1";
    }