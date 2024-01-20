$(function(){
 var n = 0; //index 0~4
 var moving = false;

$("html, body").on("mousewheel DOMMouseScroll", function(e){

    console.log(e.originalEvent.wheelDelta)    //크롬, 엣지, 오페라 업120 다운 -120
    console.log(e.originalEvent.detail)  //파이어폭스 업-3 다운 3

    var delta = e.originalEvent.wheelDelta
    var detail = e.originalEvent.detail


    if(moving == false){

        moving = true;

        var h = window.innerHeight; //스크린의 실질적인 높이
        console.log(h);        

    var top = $(".container").offset().top;
    console.log(top)

    // 스크롤이 다운되면 top 모니터 밖으로 -h만큼 나감


    if(delta == -120 || detail == 3){
        if(n < 4){
            n++;
            top -= h
        }
    }else if(delta == 120 || detail == -3){
        if(n > 0){
            n--;
            top += h
        }
    }//if(delta
    console.log("n : ", n)
    console.log("top : ", top)

    } //if(moving  == false

    $(".container").animate({"top":top},500, function(){
        moving=false;

        if(n == 0){
            $(".f_nav").removeClass("on");
        }else{
            $(".f_nav").addClass("on");
        } //if n == 0

        $(".nav li").removeClass("on")
        $(".nav li").eq(n).addClass("on")
        $(".f_nav li").removeClass("on")
        $(".f_nav li").eq(n).addClass("on")
        $(".btn_group ul li").removeClass("on")
        $(".btn_group ul li").eq(n).addClass("on")
    }); //container animate

})//on("mousewheel DOMMouseScroll
//mousewheel은 크롬, 엣지, 오페라에서만 먹히기 때문에 
//파이어 폭스에서도 해주려면 DOMMouseScroll

$(".nav a , .f_nav a , .btn_group a").click(function(){
    n = $(this).parent().index();
    console.log("n : ", n);

    if(n == 0){
        $(".f_nav").removeClass("on")
    }else{
        $(".f_nav").addClass("on")
    }


   var top = -n * window.innerHeight;

    $(".nav li").removeClass("on")
    $(".nav li").eq(n).addClass("on")
    $(".f_nav li").removeClass("on")
    $(".f_nav li").eq(n).addClass("on")
    $(".btn_group ul li").removeClass("on")

    $(".btn_group ul li").eq(n).addClass("on")


    $(".container").animate({"top":top},500)


})//.nav a, .f_nav a, .btn_group ul li a").click

$(window).resize(function(){
    resize()
})// window).resize


function resize(){
    var top = -n * window.innerHeight;
    $(".container").css({"top":top});
    $(".container .page").css({"width":window.innerWidth, "height":window.innerHeight})
}








}) //jquery