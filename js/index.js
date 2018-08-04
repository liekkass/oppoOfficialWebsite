$(function(){
	var state=0;
	// 鼠标移入的时候发生的导航商店链接事件
	$("#ewm-wx").mouseenter(function(){
		$(this).css("opacity","1");
		$("#weixing-ewm").css("display","block");
	});
	// 鼠标移开的时候发生的导航商店链接事件
	$("#ewm-wx").mouseleave(function(){
		$(this).css("opcity","0.8");
		$("#weixing-ewm").css("display","none");
	});
	// 鼠标点击的时候发生的点击搜索事件
	$("#search").click(function(){
		if(state===0){
			$("#wrapper-box").css("opacity","1");
			$("#wrapper-box").css("display","block");
			state=1;
		}else{
			$("#wrapper-box").css("opacity","0");
			$("#wrapper-box").css("display","none");
			state=0;
		}
	});
	// 鼠标点击的时候发生的点击链接事件
	$("#lianjie").click(function(){
		if(state===0){
			$("#global_box").css("opacity","1");
			$("#global_box").css("display","block");
			state=1;
		}else{
			$("#global_box").css("opacity","0");
			$("#global_box").css("display","none");
			state=0;
		}
	});
	// 鼠标移入的时候发生的微信二维码事件
	$("#navsm-sj").mouseenter(function(){
		$(this).css("opacity","1");
		$("#shouji-ul").css("display","block");
	});
	// 鼠标移开的时候发生的微信二维码事件
	$("#navsm-sj").mouseleave(function(){
		$(this).css("opcity","0.8");
		$("#shouji-ul").css("display","none");
	});
	// 图片下拉事件
	$("#servic-img").click(function(){
		if(state===0){
			$("#phone-img").css("opacity","1");
			$("#phone-img").css("display","block");
			$("#service-dowm").css("background","url(../images/imges-7/up-1.png) no-repeat");
			state=1;
		}else{
			$("#phone-img").css("opacity","0");
			$("#phone-img").css("display","none");
			$("#service-dowm").css("background","url(../images/imges-7/down-1.png) no-repeat");
			state=0;
		}
	});
	$("#servic-img2").click(function(){
		if(state===0){
			$("#phone-img2").css("opacity","1");
			$("#phone-img2").css("display","block");
			$("#service-dowm2").css("background","url(../images/imges-7/up-1.png) no-repeat");
			state=1;
		}else{
			$("#phone-img2").css("opacity","0");
			$("#phone-img2").css("display","none");
			$("#service-dowm2").css("background","url(../images/imges-7/down-1.png) no-repeat");
			state=0;
		}
	});
	$("#servic-img3").click(function(){
		if(state===0){
			$("#phone-img3").css("opacity","1");
			$("#phone-img3").css("display","block");
			$("#service-dowm3").css("background","url(../images/imges-7/up-1.png) no-repeat");
			state=1;
		}else{
			$("#phone-img3").css("opacity","0");
			$("#phone-img3").css("display","none");
			$("#service-dowm3").css("background","url(../images/imges-7/down-1.png) no-repeat");
			state=0;
		}
	});
	$("#servic-img4").click(function(){
		if(state===0){
			$("#phone-img4").css("opacity","1");
			$("#phone-img4").css("display","block");
			$("#service-dowm4").css("background","url(../images/imges-7/up-1.png) no-repeat");
			state=1;
		}else{
			$("#phone-img4").css("opacity","0");
			$("#phone-img4").css("display","none");
			$("#service-dowm4").css("background","url(../images/imges-7/down-1.png) no-repeat");
			state=0;
		}
	});
	$("#servic-img5").click(function(){
		if(state===0){
			$("#phone-img5").css("opacity","1");
			$("#phone-img5").css("display","block");
			$("#service-dowm5").css("background","url(../images/imges-7/up-1.png) no-repeat");
			state=1;
		}else{
			$("#phone-img5").css("opacity","0");
			$("#phone-img5").css("display","none");
			$("#service-dowm5").css("background","url(../images/imges-7/down-1.png) no-repeat");
			state=0;
		}
	});
	$("#servic-img6").click(function(){
		if(state===0){
			$("#phone-img6").css("opacity","1");
			$("#phone-img6").css("display","block");
			$("#service-dowm4").css("background","url(../images/imges-7/up-1.png) no-repeat");
			state=1;
		}else{
			$("#phone-img6").css("opacity","0");
			$("#phone-img6").css("display","none");
			$("#service-dowm6").css("background","url(../images/imges-7/down-1.png) no-repeat");
			state=0;
		}
	});
})

