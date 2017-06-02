function autoPlay() {
	var myAuto = document.getElementById('bgAudio');
	myAuto.play();
}

document.body.addEventListener('touchmove', function(event) {
	event.preventDefault();
}, false);
var map = {};
$(function() {
	loadResource();
})
var getUrlParam = function(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}

function loadResource() {
	var manifest = [];
	var map = {};
	var sid = 1;

	$('*').each(function() {
		if($(this).data('bg')) {
			var src = $(this).data('bg');
			var sign = true;
			for(var i = 0; i < manifest.length; i++) {
				if(manifest[i].src == src) {
					sign = false;
					break;
				}
			}
			if(sign) {
				manifest.push({
					id: sid,
					src: src
				});
				sid++;
			}
		}
		if($(this).data('src')) {
			var src = $(this).data('src');
			var sign = true;
			for(var i = 0; i < manifest.length; i++) {
				if(manifest[i].src == src) {
					sign = false;
					break;
				}
			}
			if(sign) {
				manifest.push({
					id: sid,
					src: src
				});
				sid++;
			}
		}
	});
	loadQueue = new createjs.LoadQueue(false);
	loadQueue.loadManifest(manifest);
	loadQueue.addEventListener('fileload', function(e) {
		var result = e.result;
		var item = e.item;
		switch(item.type) {
			case createjs.LoadQueue.JAVASCRIPT:
				document.body.appendChild(result);
				break;
		}
	});
	loadQueue.addEventListener('progress', function(evt) {
		var loaded = evt.loaded;
		var percent = Math.floor((loaded.toFixed(2)) * 100);
		$("#load-txt").html(100 - percent);
	});
	loadQueue.addEventListener('error', function(evt) {
		var div = map[evt.item.id];
		//div.addClass("error");
	});
	loadQueue.addEventListener('complete', function() {
		$('*').each(function() {
			if($(this).data('bg')) {
				var bg = $(this).data('bg');
				$(this).css("background-image", "url('" + bg + "')");
			}
			if($(this).data('src')) {
				var src = $(this).data('src');
				$(this).attr('src', src);
			}
		});
		autoPlay();
		$("#Lod").fadeOut(600);
		$(".page_1").fadeIn(200);
	});
}


$(".btn_3").click(function() {
	autoPlay();
	$(".gun_2").animate({
		top: '90px'
	}, 3500);

	$(".year").attr("src", "img/year.gif")
	$(".year_1").attr("src", "img/year_1.gif")
	$(".zhen1").addClass("zhen_1");
	var count = 5;
	var countdown = setInterval(CountDown, 700);

	function CountDown() {
		if(count == 0) {
			$(".year").hide()
			$(".year_1").hide()
			clearInterval(countdown);
		}

		count--;
	}

})

$(".btn_2").click(function() {
	alert("请上传图片并选择性别")
})

$(".btn_3").click(function() {
	$(".page_1").fadeOut(100);
	$(".nun").css({
		"opacity": "1"
	});
})

$(".btn_9_9").click(function() {
	alert("请上传图片并选择性别")
})

$(".che").click(function() {
	$(".btn_9_9").hide();
})

$(".year").click(function() {
	$(".year").hide();
	$(".year_1").hide()
})

var arr_year = [];
$(".btn_1").click(function() {
	_hmt.push(['_trackEvent', 'nav', 'click', 'year']);
	var nun = $(".swiper-slide-active").text();
	$(".aga_1").addClass("aga_e");
	$(".aga_2").addClass("aga_e");
	if(nun >= 1977) {
		autoPlay();

		$(".gun_3").animate({
			top: '130px'
		}, 3500);
		arr_year.push(nun);
		$(".page_2").fadeOut(200);
		$(".page_3").fadeIn(200);
	} else {
		alert("提示：高考是从1977年开始的！");
	}

	if(arr_year >= 1977 && arr_year <= 1989) {
		$("#p5").css({
			"font-family": "fontOne"
		})
	} else if(arr_year >= 1990 && arr_year <= 1999) {
		$("#p5").css({
			"font-family": "fontOne"
		})
	} else if(arr_year >= 2000 && arr_year <= 2009) {

	} else if(arr_year >= 2010 && arr_year <= 2017) {
		$("#p5").css({
			"font-family": "fontTwo"
		})
	} else if(arr_year >= 2017) {
		$("#p5").css({
			"font-family": "fontThree"
		})
	} else {
		return false;
	}

	//	alert(nun) gun_4;

	$(".zhen1").addClass("zhen_1");

})

$(".aga").click(function() {
	autoPlay();
	tpy.length = [];
	$("#img88").attr("src", "");
	$(".gun_3").animate({
		top: '130px'
	}, 3500);
	$(".zhen1").addClass("zhen_1");
	$("#put1").css({
		"height": "430px",
		"top": "80px"
	})
	$(".gun_4").css({
		'top': '-843px'
	})
	$(".page_4").fadeOut(200);
	$(".page_3").fadeIn(200);
	man = [];
	$(".put1_a1").css({
		"height": "465px"
	})
	$(".btn_2").css({
		"top": "687px"
	})
	$("#clipBtn").show();
})
$(".aga_2").click(function() {
	autoPlay();
	arr_year = [];
	$(".page_3").hide();
	$(".page_2").show();
	$(".gun_3").css({
		"top": "-742px"
	})
	$(".gun_2").css({
		"top": "-742px"
	})
	$(".zhen1").addClass("zhen_1");
	$(".gun_2").animate({
		top: '50px'
	}, 3500);

})

$(".btn_5").click(function() {
	autoPlay();

	//	alert(man)
	if(vee == 1 || vee == 3) {
		$(".wb").show();
		$(".sec_1").hide();
	} else {
		$(".wb").hide();
		$(".sec_1").show();
	}

	$(".page_4").fadeOut(200);
	$(".page_5").fadeIn(200);
	$(".gun_5").animate({
		top: '196px'
	}, 3500);
	$(".zhen1").addClass("zhen_1");
	//	alert(man) zhen1 aga_e  
	if(man == 1) {
		var m = "男"
	} else if(man == 2) {
		var m = "女"
	}
	$("#put6").val(m);
	if(arr_year >= 1977 && arr_year <= 1989) {
		$("#p5").css({
			"font-family": "fontOne"
		})
	} else if(arr_year >= 1990 && arr_year <= 1999) {
		$("#p5").css({
			"font-family": "fontOne"
		})
	} else if(arr_year >= 2000 && arr_year <= 2009) {

	} else if(arr_year >= 2010 && arr_year <= 2017) {
		$("#p5").css({
			"font-family": "fontTwo"
		})
	} else if(arr_year >= 2017) {
		$("#p5").css({
			"font-family": "fontThree"
		})
	} else {
		alert("不在范围");
		return false;
	}

})

$(".sec_1").click(function() {
	_hmt.push(['_trackEvent', 'nav', 'click', 'fx']);
	$(".page7").fadeIn(200);
	$(".page7").css({
		"z-index": "5",
		"opacity": "1"
	})
})
$(".page7").click(function() {
	$(".page7").fadeOut(200);
})
//year
var man = [];
var tpy = [];
$(document).on("click", "#clipBtn", function() {
	_hmt.push(['_trackEvent', 'nav', 'click', 'photo']);
	$(".p4_load").show();
	man.length = [];
	var xuan_1 = $.trim($(".check_timu:checked").val());
	man.push(xuan_1);

	if(xuan_1 == "") {
		alert("请上传图片并选择性别");

		$(".gun_3").css({
			"top": "130px"
		});
		$(".btn").show();
		$("#clipBtn").show();
		$(".p5_load").hide();
		return false;
	} else {
		$(".page_3").fadeOut(200);
		$(".page_4").fadeIn(200);
		$(".put1_a1").css({
			"height": "691px"
		})
		$("#put1").css({
			"height": "80px",
			"top": "927px",
			"z-index": "1"
		})
	}
	autoPlay();
	$(".gun_3").css({
		'top': '-742px'
	});
	$(".gun_4").animate({
		top: '47px'
	}, 3500);
	$(".zhen1").addClass("zhen_1");
	$(".aga").addClass("aga_e");

	if(arr_year >= 1977 && arr_year <= 1989) {
		if(man == 1) {
			var tp = 42;
			tpy.push(tp);
		} else {
			var tp = 45;
			tpy.push(tp);
		}
	} else if(arr_year >= 1990 && arr_year <= 1999) {
		if(man == 1) {
			var tp = 48;
			tpy.push(tp);
		} else {
			var tp = 51;
			tpy.push(tp);
		}
	} else if(arr_year >= 2000 && arr_year <= 2009) {
		if(man == 1) {
			var tp = 54;
			tpy.push(tp);
		} else {
			var tp = 57;
			tpy.push(tp);
		}
	} else if(arr_year >= 2010 && arr_year <= 2016) {
		if(man == 1) {
			var tp = 60;
			tpy.push(tp);
		} else {
			var tp = 63;
			tpy.push(tp);
		}
	} else if(arr_year >= 2017) {
		if(man == 1) {
			var tp = 66;
			tpy.push(tp);
		} else {
			var tp = 69;
			tpy.push(tp);
		}
	} else {
		alert("不在范围");
		return false;
	}

})

//提交用户数据
var wen = [];

function weiboshare(title, pic, url) {
	var url = "http://v.t.sina.com.cn/share/share.php?pic=" + pic + "&title=" + title + "&url=" + url;
	window.open(url, '_blank', 'width=450', 'height=400');
	return false;
}

function main_commit() {
	$(".page8").show();
	var wz = $("#put2").val();
	$("#p1").text(wz);
	var wz_1 = $("#put5").val();
	if(wz_1 == "") {
		$(".page_6").hide();
		$(".dayinji").css({
			"display": "block"
		})
		$(".zhen_1").css({
			"display": "block"
		})
		alert("请输入名字");

		$(".page8").hide();
		return false;
	} else {

		$("#p2").text(wz_1);
		wen.push(wz_1);

	}
	//			$(".img_bg").attr("src", "img/80.png");  put6 gun_5 p5
	//			$("#img_66").attr("src", "img/1.png");
	//	alert(vee);
	if(vee == 1 || vee == 3) {
		if(arr_year >= 1977 && arr_year <= 1989) {
			$(".img_bg").attr("src", "img/weibo_bg1.png");
			$("#img_66").attr("src", "img/1.png");
			$("#p2").css({
				"font-family": "fontOne",
				"top": "267px",
				"left": "110px",
				"color": "rgb(12,40,51)"
			})
			$("#p1").css({
				"font-family": "fontOne",
				"top": "567px",
				"left": "25px",
				"color": "rgb(12,40,51)"
			})

			$("#p3").css({
				"font-family": "fontOne",
				"top": "267px",
				"left": "239px",
				"color": "rgb(12,40,51)"
			})

			$("#p4").css({
				"top": "57px",
				"left": "33px"
			})
			
			$("#canv").css({
				"left": "-12px"
			})

		} else if(arr_year >= 1990 && arr_year <= 1999) {
			$(".img_bg").attr("src", "img/weibo_bg2.png");
			$("#img_66").attr("src", "img/1.png");
			$("#p2").css({
				"font-family": "fontOne",
				"top": "165px",
				"left": "170px",
				"color": "rgb(12,40,51)"
			})
			$("#p1").css({
				"font-family": "fontOne",
				"top": "570px",
				"left": "17px",
				"color": "rgb(12,40,51)"
			})

			$("#p3").css({
				"font-family": "fontOne",
				"top": "215px",
				"left": "125px",
				"color": "rgb(12,40,51)"
			})

			$("#p4").css({
				"top": "25px",
				"left": "70px"
			})

		} else if(arr_year >= 2000 && arr_year <= 2009) {
			$(".img_bg").attr("src", "img/weibo_bg3.png");
			$("#img_66").attr("src", "img/xzhang.png");
			$("#p2").css({
				"font-size": "1.5em",
				"top": "265px",
				"left": "288px"
			})

			$("#canv").css({
				"left": "13px"
			})

			$("#p1").css({
				"font-size": "1.5em",
				"top": "540px",
				"width": "280px",
				"left": "35px"
			})

			$("#p3").css({
				"font-size": "1.5em",
				"top": "265px",
				"left": "388px"
			})

			$("#p4").css({
				"font-size": "2em",
				"top": "70px",
				"left": "67px"
			})

		} else if(arr_year >= 2010 && arr_year <= 2016) {
			$(".img_bg").attr("src", "img/weibo_bg4.png");
			$("#img_66").attr("src", "img/1.png");
			$("#canv").css({
				"left": "11px"
			})
			$("#p2").css({
				"font-size": "1.5em",
				"font-family": "fontTwo",
				"top": "267px",
				"left": "150px"
			})
			$("#p1").css({
				"font-size": "1.5em",
				"font-family": "fontTwo",
				"top": "535px",
				"left": "50px"
			})

			$("#p3").css({
				"font-size": "1.5em",
				"font-family": "fontTwo",
				"top": "315px",
				"left": "115px"
			})

			$("#p4").css({
				"font-size": "1.8em",
				"font-family": "fontTwo",
				"top": "66px",
				"left": "80px"
			})
		} else if(arr_year >= 2017) {
			$(".img_bg").attr("src", "img/weibo_bg5.png");
			$("#img_66").attr("src", "img/1.png");

			$("#p2").css({
				"font-family": "fontTwo",
				"top": "462px",
				"left": "238px",
				"color": "rgb(255,255,255)",
				"font-size": "1.3em"
			})
			$("#p1").css({
				"font-family": "fontTwo",
				"width": "200px",
				"top": "498px",
				"left": "163px",
				"color": "rgb(255,255,255)",
				"font-size": "1.5em"
			})

			$("#p3").css({
				"font-family": "fontTwo",
				"top": "462px",
				"left": "315px",
				"color": "rgb(255,255,255)",
				"font-size": "1.3em"
			})

			$("#p4").css({
				"font-family": "fontTwo",
				"top": "262px",
				"left": "188px",
				"color": "rgb(255,255,255)",
				"font-size": "3.5em"
			})

		} else {
			alert("提示：高考是从1977年重新恢复的！");
			return false;
		}

		var wz_2 = $("#put6").val();

		$("#p3").text(wz_2);

		var wz_3 = arr_year;
		$("#p4").text(wz_3);
		var c = document.getElementById("can1");
		var ctx = c.getContext("2d");
		var img_bg = document.querySelector(".img_bg");
		//	var img_head = $("#img1").attr("src");
		//	$(".img_head").attr("src", img_head); 577
		var img66 = document.querySelector("#img_66");
		var imghead = document.querySelector("#img3");
		$("#first").hide();
		$("#second").hide();
		$("#four").show();
		$("#canv").show();

		img_bg.onload = function() {
			var iw = img_bg.width;
			var ih = img_bg.height;
			c.width = iw * 1;
			c.height = ih * 1;
			ctx.scale(1, 1);
			//			ctx.drawImage(imghead,147,390);
			//			ctx.drawImage(img66,100,100);
			if(arr_year >= 1977 && arr_year <= 1989) {
				ctx.drawImage(img_bg, 0, 0);
				ctx.drawImage(imghead, 321, 138, 173, 232);
				ctx.drawImage(img66, 240, 330, 210, 210);
			} else if(arr_year >= 1990 && arr_year <= 1999) {
				ctx.drawImage(img_bg, 0, 0);
				ctx.drawImage(imghead, 347, 189, 182, 245);
				ctx.drawImage(img66, 180, 230, 180, 180);
			} else if(arr_year >= 2000 && arr_year <= 2009) {
				ctx.drawImage(img_bg, 0, 0, 540, 760);
				ctx.drawImage(imghead, 50, 190, 170, 230);
				ctx.drawImage(img66, 170, 370, 180, 140);
			} else if(arr_year >= 2010 && arr_year <= 2016) {
				ctx.drawImage(img_bg, 20, 0, 535, 763);
				ctx.drawImage(imghead, 350, 225, 170, 235);
			} else if(arr_year >= 2017) {
				ctx.drawImage(img_bg, 40, 5, 500, 780);
				ctx.drawImage(imghead, 212, 50, 140, 190);

			}

			print();
			$(".page8").hide();
		}

	} else {
		if(arr_year >= 1977 && arr_year <= 1989) {
			$(".img_bg").attr("src", "img/80.png");
			$("#img_66").attr("src", "img/1.png");
			$("#p2").css({
				"font-family": "fontOne",
				"top": "266px",
				"left": "118px",
				"color": "rgb(12,40,51)"
			})
			$("#p1").css({
				"font-family": "fontOne",
				"top": "563px",
				"left": "25px",
				"color": "rgb(12,40,51)"
			})

			$("#p3").css({
				"font-family": "fontOne",
				"top": "266px",
				"left": "239px",
				"color": "rgb(12,40,51)"
			})

			$("#p4").css({
				"top": "55px",
				"left": "37px"
			})
			$("#canv").css({
				"left": "-12px"
			})

		} else if(arr_year >= 1990 && arr_year <= 1999) {
			$(".img_bg").attr("src", "img/90.png");
			$("#img_66").attr("src", "img/1.png");
			$("#p2").css({
				"font-family": "fontOne",
				"top": "165px",
				"left": "170px",
				"color": "rgb(12,40,51)"
			})
			$("#p1").css({
				"font-family": "fontOne",
				"top": "570px",
				"left": "15px",
				"color": "rgb(12,40,51)"
			})

			$("#p3").css({
				"font-family": "fontOne",
				"top": "215px",
				"left": "125px",
				"color": "rgb(12,40,51)"
			})

			$("#p4").css({
				"top": "30px",
				"left": "75px"
			})

		} else if(arr_year >= 2000 && arr_year <= 2009) {
			$(".img_bg").attr("src", "img/00.png");
			$("#img_66").attr("src", "img/xzhang.png");
			$("#p2").css({
				"font-size": "1.5em",
				"top": "267px",
				"left": "295px"
			})
			//
			//			$("#canv").css({
			//				"left": "13px"
			//			})

			$("#p1").css({
				"font-size": "1.5em",
				"top": "540px",
				"width": "280px",
				"left": "38px"
			})

			$("#p3").css({
				"font-size": "1.5em",
				"top": "267px",
				"left": "388px"
			})

			$("#p4").css({
				"font-size": "2em",
				"top": "72px",
				"left": "77px"
			})

		} else if(arr_year >= 2010 && arr_year <= 2016) {
			$(".img_bg").attr("src", "img/10.png");
			$("#img_66").attr("src", "img/1.png");
			$("#canv").css({
				"left": "11px"
			})
			$("#p2").css({
				"font-size": "1.5em",
				"font-family": "fontTwo",
				"top": "267px",
				"left": "150px"
			})
			$("#p1").css({
				"font-size": "1.5em",
				"font-family": "fontTwo",
				"top": "535px",
				"left": "50px"
			})

			$("#p3").css({
				"font-size": "1.5em",
				"font-family": "fontTwo",
				"top": "315px",
				"left": "115px"
			})

			$("#p4").css({
				"font-size": "1.8em",
				"font-family": "fontTwo",
				"top": "66px",
				"left": "75px"
			})
		} else if(arr_year >= 2017) {
			$(".img_bg").attr("src", "img/2.png");
			$("#img_66").attr("src", "img/1.png");

			$("#p2").css({
				"font-family": "fontTwo",
				"top": "461px",
				"left": "238px",
				"color": "rgb(255,255,255)",
				"font-size": "1.1em"
			})
			$("#p1").css({
				"font-family": "fontTwo",
				"width": "200px",
				"top": "498px",
				"left": "163px",
				"color": "rgb(255,255,255)",
				"font-size": "1.3em"
			})

			$("#p3").css({
				"font-family": "fontTwo",
				"top": "461px",
				"left": "310px",
				"color": "rgb(255,255,255)",
				"font-size": "1.1em"
			})

			$("#p4").css({
				"font-family": "fontTwo",
				"top": "256px",
				"left": "186px",
				"color": "rgb(255,255,255)",
				"font-size": "3em"
			})

		} else {
			alert("提示：高考是从1977年重新恢复的！");
			return false;
		}

		var wz_2 = $("#put6").val();

		$("#p3").text(wz_2);

		var wz_3 = arr_year;
		$("#p4").text(wz_3);
		var c = document.getElementById("can1");
		var ctx = c.getContext("2d");
		var img_bg = document.querySelector(".img_bg");
		//	var img_head = $("#img1").attr("src");
		//	$(".img_head").attr("src", img_head); 577
		var img66 = document.querySelector("#img_66");
		var imghead = document.querySelector("#img3");
		$("#first").hide();
		$("#second").hide();
		$("#four").show();
		$("#canv").show();

		img_bg.onload = function() {
			var iw = img_bg.width;
			var ih = img_bg.height;
			c.width = iw * 1;
			c.height = ih * 1;
			ctx.scale(1, 1);
			//			ctx.drawImage(imghead,147,390);
			//			ctx.drawImage(img66,100,100);
			if(arr_year >= 1977 && arr_year <= 1989) {
				ctx.drawImage(img_bg, 0, 0);
				ctx.drawImage(imghead, 321, 138, 173, 232);
				ctx.drawImage(img66, 240, 330, 210, 210);
			} else if(arr_year >= 1990 && arr_year <= 1999) {
				ctx.drawImage(img_bg, 0, 0);
				ctx.drawImage(imghead, 347, 189, 182, 245);
				ctx.drawImage(img66, 180, 230, 180, 180);
			} else if(arr_year >= 2000 && arr_year <= 2009) {
				ctx.drawImage(img_bg, 0, 0, 540, 760);
				ctx.drawImage(imghead, 55, 190, 170, 230);
				ctx.drawImage(img66, 170, 370, 180, 140);
			} else if(arr_year >= 2010 && arr_year <= 2016) {
				ctx.drawImage(img_bg, 20, 0, 535, 763);
				ctx.drawImage(imghead, 350, 225, 170, 235);
			} else if(arr_year >= 2017) {
				ctx.drawImage(img_bg, 40, 5, 500, 780);
				ctx.drawImage(imghead, 212, 50, 140, 190);

			}

			print();
			$(".page8").hide();
		}
	}

	//second sec_p  

};

//通过html2canvas来进行截图  put3
function print() {
	html2canvas($("#canv"), {
		onrendered: function(canvas) {
			$("#canv").hide();
			$("#img2").attr("src", canvas.toDataURL());
			options_1 = {
				type: 0,
				width: 200,
				quality: Number(60),
				timeout: Number(20000),
				preToken: true
			}
			var upload_1 = new window.MTPlugin.upload(options_1)
			upload_1.up(canvas.toDataURL(), {
				success: function(res){
					
					//					console.log(res.img);
					if(vee == 1 || vee == 3) {
						$(document).on("click", ".wb", function() {
							weiboshare("速来围观" + wen + "的准考证！", res.img, 'http://mdd.uncle-ad.com/MD_gk/index_f_vb.html?a=' + res.img);
						})
					} else {
						$(function() {
							var descContent = '雪姨、杨迪、北大学霸校草的准考证都在这里。'; // 微信分享描述
							var shareTitle = '速来围观' + wen + '的准考证！'; // 微信分享标题
							var appid = '';

							// 微信分享图片
							var imgUrl = './MD_gk/img/xiaotu.jpg';
							if(imgUrl.indexOf(window.location.protocol) < 0) {
								if(imgUrl[0] == '.') {
									imgUrl = '/' + imgUrl;
								}
								imgUrl = window.location.protocol + '//' + window.location.host + imgUrl;
							}

							var localUrl = 'http://mdd.uncle-ad.com/MD_gk/index_f.html';
							var localSearch = '';

							if(window.location.search.indexOf('disableHistoryStart') >= 0) {
								localSearch = window.location.search;
							} else {
								if(window.location.search) {
									localSearch = window.location.search + '&disableHistoryStart=1&a=' + res.img;
								} else {
									localSearch = '?disableHistoryStart=1&a=' + res.img;

								}
							}

							// 微信分享网址
							var message_link = localUrl + localSearch;
							userShare(shareTitle, descContent, message_link, imgUrl);
						})
					}
				},
				error: function() {},
				start: function() {}
			})
		},
		width: 550,
		height: 770
	});

};

//把上传的图片显示在网页上 put3
$("#put1").change(function() {
	var objUrl = getObjectURL(this.files[0]);
	if(objUrl) {
		$("#third").show();
	};
});
//读取上传图片的地址
function getObjectURL(file) {
	var url = null;
	if(window.createObjectURL != undefined) { // basic gun_5  put
		url = window.createObjectURL(file);
	} else if(window.URL != undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file);
	} else if(window.webkitURL != undefined) { // webkit or chrome put5
		url = window.webkitURL.createObjectURL(file);
	};
	return url;
};
//确认提交显示图片
$("#put3").on("click", function() {
	_hmt.push(['_trackEvent', 'nav', 'click', 'card']);
	if($("#img1").attr("src") == "" || $("#name").val() == "") {

	} else {
		$(".page7").hide();
		$(".page_6").fadeIn(200);
		$(".logo").hide();
		$(".ding").hide();
		$(".zhen_1").hide();
		$(".dayinji").hide();
		main_commit();
	}
});

$("#put3").click(function() {
	$(".page7").hide();
})

function shibai(){
	$("#put1").css({
		"height": "430px",
		"top": "65px"
	})
	$(".page_4").hide();
	$(".page_3").show();
	$(".gun_3").animate({
		top: '130px'
	}, 3500);

	$(".page8").hide();
	man = [];
	tpy = [];
	$(".put1_a1").css({
		"height": "465px"
	})
	$(".btn_2").css({
		//								"margin-top": "120px"
	})
	$("#clipBtn").show();
//	return false;
}

var clicknum = 0;
//对图片进行处理 sec_1
var clipArea = new bjj.PhotoClip("#clipArea", {
	size: [305, 440],
	outputSize: [305, 440],
	file: "#put1",
	view: "#view",
	ok: "#clipBtn",
	loadComplete:function(){
		$(".btn_8_8").hide();
	},
	clipFinish: function(dataURL) {
		clicknum = 0;
		var man = [];
		var xuan_1 = $.trim($(".check_timu:checked").val());
		man.push(xuan_1);
		$("#third").hide();
		$(".btn_8_8").show();
		$("#img88").attr("src", dataURL);
		options_3 = {
			type: 0,
			width: 200,
			quality: Number(60),
			timeout: Number(2000),
			preToken: true
		}
		if(arr_year >= 1977 && arr_year <= 1989) {
			if(man == 1) {
				var tp = 42;
			} else {
				var tp = 45;
			}
		} else if(arr_year >= 1990 && arr_year <= 1999) {
			if(man == 1) {
				var tp = 48;
			} else {
				var tp = 51;
			}
		} else if(arr_year >= 2000 && arr_year <= 2009) {
			if(man == 1) {
				var tp = 54;
			} else {
				var tp = 57;
			}
		} else if(arr_year >= 2010 && arr_year <= 2016) {
			if(man == 1) {
				var tp = 60;
			} else {
				var tp = 63;
			}
		} else if(arr_year >= 2017) {
			if(man == 1) {
				var tp = 66;
			} else {
				var tp = 69;
			}
		} else {
			alert("不在范围");
			return false;
		}

		var upload_3 = new window.MTPlugin.upload(options_3)
		upload_3.up(dataURL, {
			success:function(res) {
				//				console.log(res.img);
				$.ajax({
					type: 'get',
					url: "http://make.channet.com/rolleye/makeup/facefuse?pic=" + res.img + "!thumb600&tips=" + tp,
					success: function(data_img) {
						//						console.log(JSON.parse(data_img).pic)
						//						console.log(JSON.parse(data_img).message) .page7
						if(JSON.parse(data_img).rs == 0) {
							alert(JSON.parse(data_img).message);
							shibai();
						} else {
							function convertImgToBase64(url, callback, outputFormat) {
								var canvas = document.createElement('CANVAS'),
									ctx = canvas.getContext('2d'),
									img = new Image;
								img.crossOrigin = 'Anonymous';
								img.onload = function() {
									canvas.height = img.height;
									canvas.width = img.width;
									ctx.drawImage(img, 0, 0);
									var dataURL = canvas.toDataURL(outputFormat || 'image/png');
									callback.call(this, dataURL);
									canvas = null;
								};
								img.src = url;
							}
							$(".p4_load").show();
							convertImgToBase64(JSON.parse(data_img).pic, function(base64Img) {

								$("#img1").attr("src", base64Img);
								$("#img3").attr("src", base64Img);
								$(".p4_load").hide();
							});
						}
						//						$("#img1").attr("src", JSON.parse(data_img).pic);
						//						$("#img3").attr("src", JSON.parse(data_img).pic);

					},
				　error : function(XMLHttpRequest,textStatus){ //请求完成后最终执行参数
				　　　　if(textStatus=='timeout'){
				　　　　　  alert("请求超时，请重新选择图片");
				  autoPlay();
					tpy.length = [];
					$("#img88").attr("src", "");
					$(".gun_3").animate({
						top: '130px'
					}, 3500);
					$(".zhen1").addClass("zhen_1");
					$("#put1").css({
						"height": "430px",
						"top": "80px"
					})
					$(".gun_4").css({
						'top': '-843px'
					})
					$(".page_4").fadeOut(200);
					$(".page_3").fadeIn(200);
					man = [];
					$(".put1_a1").css({
						"height": "465px"
					})
					$(".btn_2").css({
						"top": "687px"
					})
					$("#clipBtn").show();
				　　　　}
				　　}

				})
			},
			error:function(obj) {
				if(clicknum == 0){
					alert("亲~您的网络有点差，请重新上传哦~" + obj.msg); 
					autoPlay();
					tpy.length = [];
					$("#img88").attr("src", "");
					$(".gun_3").animate({
						top: '130px'
					}, 3500);
					$(".zhen1").addClass("zhen_1");
					$("#put1").css({
						"height": "430px",
						"top": "80px"
					})
					$(".gun_4").css({
						'top': '-843px'
					})
					$(".page_4").fadeOut(200);
					$(".page_3").fadeIn(200);
					man = [];
					$(".put1_a1").css({
						"height": "465px"
					})
					$(".btn_2").css({
						"top": "687px"
					})
					$("#clipBtn").show();
				} 
				++clicknum;
			},
			start:function() {}
		})
	}

});
var loaimg = [];
var tpys = [];
$(".btn_6").click(function() {
	//		var loaimg_1 = $("#img1")[0].src;
	//		loaimg.push(loaimg_1);
	//		console.log(loaimg);
	var dataimg = $("#img88")[0].src;
	if(arr_year >= 1977 && arr_year <= 1989) {
		if(tpy == 42) {
			var tp = 43;
		} else if(tpy == 43) {
			//				var dataimg = $("#img88")[0].src;
			var tp = 44;
		} else if(tpy == 44) {
			//				var dataimg = $("#img88")[0].src;
			var tp = 42;
		} else if(tpy == 45) {
			var tp = 46;
		} else if(tpy == 46) {
			var tp = 47;
		} else if(tpy == 47) {
			var tp = 45;
		}
	} else if(arr_year >= 1990 && arr_year <= 1999) {
		if(tpy == 48) {
			var tp = 49;
		} else if(tpy == 49) {
			var tp = 50;
		} else if(tpy == 50) {
			var tp = 48;
		} else if(tpy == 51) {
			var tp = 52;
		} else if(tpy == 52) {
			var tp = 53;
		} else if(tpy == 53) {
			var tp = 51;
		}
	} else if(arr_year >= 2000 && arr_year <= 2009) {
		if(tpy == 54) {
			var tp = 55;
		} else if(tpy == 55) {
			var tp = 56;
		} else if(tpy == 56) {
			var tp = 54;
		} else if(tpy == 57) {
			var tp = 58;
		} else if(tpy == 58) {
			var tp = 59;
		} else if(tpy == 59) {
			var tp = 57;
		}
	} else if(arr_year >= 2010 && arr_year <= 2016) {
		if(tpy == 60) {
			var tp = 61;
		} else if(tpy == 61) {
			var tp = 62;
		} else if(tpy == 62) {
			var tp = 60;
		} else if(tpy == 63) {
			var tp = 64;
		} else if(tpy == 64) {
			var tp = 65;
		} else if(tpy == 65) {
			var tp = 63;
		}
	} else if(arr_year >= 2017) {
		if(tpy == 66) {
			var tp = 67;
		} else if(tpy == 67) {
			var tp = 68;
		} else if(tpy == 68) {
			var tp = 66;
		} else if(tpy == 69) {
			var tp = 70;
		} else if(tpy == 70) {
			var tp = 71;
		} else if(tpy == 71) {
			var tp = 69;
		}
	} else {
		alert("不在范围");
		return false;
	}
	tpy.length = [];
	tpy.push(tp);
	console.log(tpy);

	$(".p5_load").show();
	var man_1 = [];
	$("#img3").attr('src', '');
	$("#img1").attr('src', '');
	var xuan_1 = [];
	var xuan_1 = $.trim($(".check_timu:checked").val());
	man_1.push(xuan_1);
	$("#third").hide();
	options = {
		type: 0,
		width: 200,
		quality: Number(60),
		timeout: Number(20000),
		preToken: true
	}

	var upload_2 = new window.MTPlugin.upload(options);
	upload_2.up(dataimg, {
		success:function(res) {
			console.log(res.img);
			$.ajax({
				type: 'get',
				url: "http://make.channet.com/rolleye/makeup/facefuse?pic=" + res.img + "!thumb600&tips=" + tp,
				success: function(data_img_1) {
					console.log(JSON.parse(data_img_1).pic)
					console.log(JSON.parse(data_img_1).message)
					if(JSON.parse(data_img_1).rs == 0) {
						alert(JSON.parse(data_img_1).message);
						autoPlay();
						$("#put1").css({
							"height": "430px",
							"top": "65px"
						})
						$(".page_4").hide();
						$(".page_3").show();
						$(".gun_3").animate({
							top: '130px'
						}, 3500);
						$(".p5_load").hide();
						man_1 = [];
						$(".put1_a1").css({
							"height": "465px"
						})
						$(".btn_2").css({
							//									"margin-top": "120px"
						})
						$("#clipBtn").show();
						return false;
					} else {
						function convertImgToBase64(url, callback, outputFormat) {
							var canvas = document.createElement('CANVAS'),
								ctx = canvas.getContext('2d'),
								img = new Image;
							img.crossOrigin = 'Anonymous';
							img.onload = function() {
								canvas.height = img.height;
								canvas.width = img.width;
								ctx.drawImage(img, 0, 0);
								var dataURL = canvas.toDataURL(outputFormat || 'image/png');
								callback.call(this, dataURL);
								canvas = null;
							};
							img.src = url;
						}

						convertImgToBase64(JSON.parse(data_img_1).pic, function(base64Img) {
							$("#img1").attr("src", base64Img);
							$("#img3").attr("src", base64Img);

						});
						$(".p5_load").hide();
					}

				}

			})
		},
		error:function() {},
		start:function() {}
	})

	//		if(arr_year >= 1977 && arr_year <= 1990) {
	//			
	//	} else {
	//		if(arr_year >= 1977 && arr_year <= 1990) {
	//			if(tpy == 42 ||) {
	//				//				console.log(loaimg[0])
	//				//				$("#img1").attr("src", "");
	//				//				$("#img1").attr("src", loaimg[1]);
	//				//				var tps = 43;
	//			} else if(tpy == 43) {
	//				//				console.log(loaimg[1])
	//				//				$("#img1").attr("src", "");
	//				//				$("#img1").attr("src", loaimg[2]);
	//				//				var tps = 44;
	//			} else if(tpy == 44) {
	//				//				$("#img1").attr("src", "");
	//				//				$("#img1").attr("src", loaimg[0]);
	//				//				var tps = 42;
	//			} else if(tpy == 45) {
	//				var tp = 46;
	//			} else if(tpy == 46) {
	//				var tp = 47;
	//			} else if(tpy == 47) {
	//				var tp = 45;
	//			}
	//		} else if(arr_year >= 1990 && arr_year <= 1999) {
	//			if(tpy == 48) {
	//				var tp = 49;
	//			} else if(tpy == 49) {
	//				var tp = 50;
	//			} else if(tpy == 50) {
	//				var tp = 48;
	//			} else if(tpy == 51) {
	//				var tp = 52;
	//			} else if(tpy == 52) {
	//				var tp = 53;
	//			} else if(tpy == 53) {
	//				var tp = 51;
	//			}
	//		} else if(arr_year >= 2000 && arr_year <= 2009) {
	//			if(tpy == 54) {
	//				var tp = 55;
	//			} else if(tpy == 55) {
	//				var tp = 56;
	//			} else if(tpy == 56) {
	//				var tp = 54;
	//			} else if(tpy == 57) {
	//				var tp = 58;
	//			} else if(tpy == 58) {
	//				var tp = 59;
	//			} else if(tpy == 69) {
	//				var tp = 57;
	//			}
	//		} else if(arr_year >= 2010 && arr_year <= 2020) {
	//			if(tpy == 60) {
	//				var tp = 61;
	//			} else if(tpy == 61) {
	//				var tp = 62;
	//			} else if(tpy == 62) {
	//				var tp = 60;
	//			} else if(tpy == 63) {
	//				var tp = 64;
	//			} else if(tpy == 64) {
	//				var tp = 65;
	//			} else if(tpy == 65) {
	//				var tp = 63;
	//			}
	//		} else if(arr_year >= 2020) {
	//			if(tpy == 66) {
	//				var tp = 67;
	//			} else if(tpy == 67) {
	//				var tp = 68;
	//			} else if(tpy == 68) {
	//				var tp = 66;
	//			} else if(tpy == 69) {
	//				var tp = 70;
	//			} else if(tpy == 70) {
	//				var tp = 71;
	//			} else if(tpy == 71) {
	//				var tp = 69;
	//			}
	//		} else {
	//			alert("不在范围");
	//			return false;
	//		}
	//		tpys.length = [];
	//		tpys.push(tps);
	//		console.log(tpys);
	//	}

})
//重新测试 
$("#btn1").click(function(){
	if(vee == 1) {
		location.href = "http://mdd.uncle-ad.com/MD_gk/index.html?we=1";
	} else if(vee == 3) {
		location.href = "http://mdd.uncle-ad.com/MD_gk/index.html?we=3";
	} else if(vee == 4) {
		location.href = "http://mdd.uncle-ad.com/MD_gk/index.html?we=4";
	} else if(vee == 5) {
		location.href = "http://mdd.uncle-ad.com/MD_gk/index.html?we=5";
	} else {
		location.href = "http://mdd.uncle-ad.com/MD_gk/index.html?we=2";
	}
})