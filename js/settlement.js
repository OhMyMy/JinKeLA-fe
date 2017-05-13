$(function(){
	/*计算金额数量*/
	/*如何解决单价*数量的后的值的位数问题*/
	/*数量parseInt() 单价parseFloat() 小计/合计toFixed()*/
	function getTotal(){
		var selected = 0;
		var price = 0;
		$('.check-one').each(function(){
			if(this.checked){
				var obj1 = $(this).parent().siblings('.td-sum').text();
				var obj2 = $(this).parent().siblings('.td-amount').find('.count-input').val();
				price += parseFloat(obj1);
				selected += parseInt(obj2);

				$(this).parent().parent().addClass('active');
			}else{
				$('.check-all').attr('checked',false);
				$(this).parent().parent().removeClass('active');
			}
		});
		$('.priceTotal').text(price.toFixed(2));
		$('.selectedTotal').text(selected);
	}
	
	/*单选*/
	$('.check-one').bind('click',getTotal);

	/*全选*/
	$('.check-all').click(function(){
		if(this.checked){
			$('.check-one').attr('checked',true);
		}else{
			$('.check-one').attr('checked',false);
		}
		getTotal();
	});

	/*数量值为1时 减号样式*/
	function reduceStyle(){
		$('.count-input').each(function(){
			var num = $(this).val();
			if(num == 1){
				$(this).siblings('.reduce').text('');
			}else{
				$(this).siblings('.reduce').text('-');
			}
		})
	}
	/*加*/
	$('.add').click(function(){
		var input = $(this).siblings('.count-input');
		var obj = $(this).parent('.td-amount');
		/*当前行中的单价项*/
		var per = parseFloat(obj.siblings('.td-price').text());
		var num = 0;
		var price = 0;
		input.attr('value',parseInt(input.attr('value'))+1);
		num = input.attr('value');
		price = num*per;
		obj.siblings('.td-sum').text(price.toFixed(2));
		getTotal();
		reduceStyle();
		return false;
	});

	/*减*/
	$('.reduce').click(function(){
		var input = $(this).siblings('.count-input');
		var obj = $(this).parent('.td-amount');
		/*当前行中的单价项*/
		var per = parseFloat(obj.siblings('.td-price').text());
		var num = 0;
		var price = 0;
		var Val = parseInt(input.attr('value'));
		if(Val <= 1){
			Val = 2;
		}
		input.attr('value',parseInt(Val)-1);
		num = input.attr('value');
		price = num*per;
		obj.siblings('.td-sum').text(price.toFixed(2));
		getTotal();
		reduceStyle();
		return false;
	});

	/*文本框直接输入数量*/
	$('.count-input').keyup(function(){
		var price = parseFloat($(this).parent().siblings('.td-price').text());
		var count = parseInt($(this).val());
		if(isNaN(count) || count < 1){
			count = 1;
		}
		$(this).val(count);
		if(count <= 1){
			$(this).siblings('.reduce').text('');
		}else{
			$(this).siblings('.reduce').text('-');
		}
		var SubTotal = price*count;
		$(this).parent().siblings('.td-sum').text(SubTotal.toFixed(2));
		getTotal();
	});

	/*添加- + hover事件
	参照慕课的购物车完成其他特效*/
});
