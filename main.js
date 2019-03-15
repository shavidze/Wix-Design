$(document).ready(function(){
    $(".chat-header-primary").click(function(){
        $(".chat-header-primary").css({
            "flex":"0.17",
            "transition":"flex 0.8s"
        });
        $(".chat-welcome-secondary").css("display","none");
        $(".chat-welcome-primary").css({
            "margin-left":"10px",
            "font-size":"18px",
            "transition":"margin-left 0.8s"
        }); 
    })
})

$(document).ready(function(){
    $(".chat-header-primary").click(function(){
        var a = $(".chat-welcome-primary").css("margin-left");
        if(a==="10px"){
            $(".chat-header-primary").css({
            "flex":"0.8",
            "transition":"flex 0.8s"
        });
        $(".chat-welcome-secondary").css({"display":"block","transition":"0.8s"});
        $(".chat-welcome-primary").css({
            "margin-left":"117px",
            "font-size":"20px",
            "transition":"margin-left 0.8s"
        }); 
        }
    })
})
$(document).ready(function(){
    $(".chat-close").click(function(){
        $(".live-chat-form").css("display","none");
    })
})

$(document).ready(function(){
    $(".messenger-icon").click(function(){
        $(".live-chat-form").css("display","block");
        console.log("samdkasmd")
    })
})

$(document).ready(function(){
    $(".product-component").hover(function(){
        $(".product-quick-view-title-hide").toggleClass("product-quick-view-title-visible",100);
    })
})
       