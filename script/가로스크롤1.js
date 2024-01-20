$(function(){

    var n = 0; // 현재 보여지는 section 0~4

    var moving = false; //스크롤 여부
    $("html, body").on("mousewheel DONMouseScroll", function(event){
        console.log(event)

        var delta = event.originalEvent.wheelDelta 
        console.log("delta : ", delta)    //다운120 업-120 크롬엣지오페라

        var detail = event.originalEvent.detail
        console.log("detail : ", detail)   //다운-3 업3 파이어폭스 (파이어폭스에서 봐야함)

        if(moving == false){
            moving = true;

            var w = window.innerWidth;       //열린 브라우저의 넓이 값
            console.log(w);
            var left = $(".wrap").offset().left;
            console.log(left)

            // 마우스 휠 동작여부

            if(delta == -120 || detail == 3){
                if(n < 4){
                    n++;
                    left -= w
                }
            }else if(delta == 120 || detail == -3){
                if(n > 0){
                    n--;
                    left += w
                }
            }//if



        } //moving == false

        console.log("n",n)
        console.log("left",left)

        $(".wrap").animate({left:left},500, function(){
            moving=false;

            $(".bth_group li").removeClass("on")
            $(".bth_group li").eq(n).addClass("on")

        }) //wrap").animate


    })//html, body").on("mousewheel DONMouseScroll


    $(".bth_group li a").click(function(){
        n = $(this).parent().index()

        $(".bth_group li").removeClass("on")
        $(".bth_group li").eq(n).addClass("on")

        var left = -n * window.innerWidth
        $(".wrap").animate({left:left},500);
    })//bth_group li a").click



    $(".box").each(function(i){
        var bg =  $(this).attr("bg")
        $(this).css({"background":bg})
    }) //box").each


    $(window).resize(function(){
        size();
    })//window).resize


    function size(){
        var left = -n * window.innerWidth;
        $(".wrap").css({left:left})
        $(".box").css({width:innerWidth, height:innerHeight})
    }

})//jquery