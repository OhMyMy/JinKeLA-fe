$(document).ready(function(){
	var timer = null,
		index = 0,
		pics = $('.banner-slide'),
		dots = $('.dots').find('span'),
		size =	$('.banner-slide').length,
		menuItem = $('.menu-items').find('li');

	/*停止自动播放*/
	function stopAutoPlay(){
		if(timer){
			clearInterval(timer);
		}
	}

	/*图片自动轮播*/
	function startAutoPlay(){
		timer = setInterval(function(){
			index++;
			if(index >= size){
				index = 0;
			}
			changeImg();
		},3000);
	}

	function changeImg(){
		dots.removeClass('active');
		pics.css('display','none');

		dots.eq(index).addClass('active');
		pics.eq(index).css('display','block');
	}

	function slideImg(){
		$('.main').hover(function(){
			stopAutoPlay();
		},
		function(){
			startAutoPlay();
		});
		/*初始化*/
		$('.main').mouseleave();

		/*鼠标悬浮导航切换*/
		dots.hover(function(){
			var curIndex = dots.index(this);
			index = curIndex;
			changeImg();
		},function(){

		});

		/*下一张*/
		$('.next').click(function(){
			index++;
			if(index>=size){
				index = 0
			}
			changeImg();
		});

		/*上一张*/
		$('.prev').click(function(){
			index--;					
			if(index<0){
				index = size-1;
			}
			changeImg();
		});

		/*菜单*/
		menuItem.each(function(){
			var m = menuItem.index(this);
			$(this).attr('data-index',m);
		});
		menuItem.mouseenter(function(){
			$('.sub-menu').attr('class','sub-menu');
			var curIndex=menuItem.index(this);
			$('.cate-part').css('display','none');
			$('.cate-part').eq(curIndex).css('display','block');
		});

		$('.sub-menu').mouseenter(function(){
			$(this).attr('class','sub-menu');
		});
		
		$('.sub-menu').mouseleave(function(){
			$(this).attr('class','sub-menu hide');
		});

		$('.menu-items').mouseleave(function(){
			$('.sub-menu').attr('class','sub-menu hide');
		});
	}
	slideImg();

});
			

			
			
