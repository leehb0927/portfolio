$(function () {
    //커서 모양 바꾸기
    $('body').mousemove(function(e){
        const xPosition = e.clientX - 50; 
        const yPosition = e.clientY - 50;

        gsap.to('.cursor',{
            x:xPosition,
            y:yPosition,
        })
    });

    //info영역에서 색상변경
    $('.sc_introduce .info').hover(function(){
        $('.cursor').css('border','1px solid #fff')
    },function(){
        $('.cursor').css('border','1px solid #BC302F')
    })

    //커서 a태그 인식
    $('a').hover(function(){
        $('.cursor').addClass('active')
    },function(){
        $('.cursor').removeClass('active')
    })
    //커서 버튼태그 인식
    $('button').hover(function(){
        $('.cursor').addClass('active')
    },function(){
        $('.cursor').removeClass('active')
    })
    //커서 hover btn 배경색 변경
    $('.view-link').hover(function(){
        $(this).addClass('active')
    },function(){
        $(this).removeClass('active')
    })

    //sc_introduce 텍스트 움직임
    gsap.from('.sc_introduce .txt-area1 .txt-box span',{
        scrollTrigger:{
            trigger:".sc_introduce .txt-area1",
            top:"top bottom",
            bottom:"bottom top",
            scrub:2
        },
        xPercent:-20
    })
    gsap.from('.sc_introduce .txt-area2 .txt-box span',{
        scrollTrigger:{
            trigger:".sc_introduce .txt-area2",
            top:"top bottom",
            bottom:"bottom top",
            scrub:1
        },
        xPercent:20
    })






    // sc_intro 
    let motion01 = gsap.timeline({});

    motion01.fromTo(".sc_intro h2", 0.3,{
        opacity: 1,
    }, {
        opacity: 0,
        'filter':'blur(16px)',
    });
    ScrollTrigger.create({
        animation: motion01,
        trigger: ".sc_intro",
        start: "20% top",
        end: "+=100%",
        // markers: true,
        scrub: 0,
    });


    // sc_introduce
    let motion2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".chat_wrap",
            start: "top 70%",
            end: "bottom top",
            // markers: true,
            scrub: 0.1,
        }
    });
    motion2.addLabel("m1")
    .to(".chat1", { x: -30,y:-100,rotate:10 }, "m1")
    .to(".chat2", { x: 100,y:-100,rotate:10 }, "m1")
    .to(".chat3", { x: -150,rotate:20 }, "m1")
    .to(".chat4", { x: 130,rotate:50 }, "m1")
    .to(".chat5", { x: -200,rotate:-50 }, "m1")
    .to(".chat6", { x: 100,rotate:-50 }, "m1");



    //works 이미지 스크롤 트리거
    const imgList = document.querySelectorAll('.sc_works .img_wrap img');

    imgList.forEach(element => {
        gsap.to(element,{
                scrollTrigger:{
                trigger:element.parentElement,
                start:"top bottom",
                end:"bottom 50%",
                scrub:1
                },
                y:-50
        })
    })

    //footer
    gsap.to('footer h3 span',{
        scrollTrigger:{
            trigger:"footer h3",
            stat:"top bottom",
            end:"bottom bottom",
            scrub:2
        },
        opacity:1,
        y:0
    })

    gsap.from('footer h3 svg',{
        scrollTrigger:{
            trigger:"footer h3",
            start :"top 70%",
            end:"bottom bottom",
            scrub:2
        },
        opacity:0,
        rotateZ:180,
        y:100
    })

    gsap.to('.footer-wrap a',{
        scrollTrigger:{
            trigger:".footer-wrap",
            stat:"top bottom",
            end:"bottom bottom",
            scrub:2
        },
        x:0
    })











    var gauge =  gsap.to('.gauge .curr',{width:100+'%'})   
    ScrollTrigger.create({
        trigger: 'body',
        animation: gauge,
        start: "top top",
        end: "bottom bottom",
        // markers: true,
        // pin: true,
        scrub: 1,
    });

    
    // back_top 버튼
    $('.back_top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });
});
