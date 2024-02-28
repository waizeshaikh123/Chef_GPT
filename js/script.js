$(function(){
    $(".yearly").click(function(){
        $(".yearly").css("background","#10B981")
        $(".monthly").css("background","#363636")
        $(".sub .m-h2").html("$29.99<sub>/Yearly</sub>");
        $(".sub .m-h1 sub").html("<sub>/Yearly</sub>");
    });

    $(".monthly").click(function(){
        $(".monthly").css("background","#10B981")
        $(".yearly").css("background","#363636")
        $(".sub .m-h2").html("$2.99<sub>/monthly</sub>");
        $(".sub .m-h1 sub").html("<sub>/monthly</sub>");
    });
});

$(function(){
    a = 1
    $(".main-ingre").click(function(){
        if (a == 1){
            $(".add-ingre").css({
                display:"block"
            });
            a = 0
        }
        else{
            $(".add-ingre").css({
                display:"none"
            });
            a = 1
        }
    });

    $(".cross-span").click(function(){
        $(".main-span").css({
            display:"none"
        });
    });
});

$(function(){
    a = 1
    $(".main-ingre-2").click(function(){
        if (a == 1){
            $(".add-ingre-2").css({
                display:"block"
            });
            a = 0
        }
        else{
            $(".add-ingre-2").css({
                display:"none"
            });
            a = 1
        }
    });
});