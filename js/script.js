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