window.onload=function(){
	function g(id){ return document.getElementById(id) };

	/*居中设置*/
	function autoCenter(el){
		/*页面的宽高（内容的固定为定值）*/
		var cHeight = document.documentElement.clientHeight || document.body.clientHeight;
		var cWidth = document.documentElement.clientWidth || document.body.clientWidth;

		/*元素自身宽高*/
		var dHeight = el.offsetHeight;
		var dWidth = el.offsetWidth;

		/*居中*/
		el.style.top = ( cHeight-dHeight )/2+"px";
		el.style.left = ( cWidth-dWidth )/2+"px";
	}

	/*遮罩层百分之百*/
	function autoMask(el){
		/*可视宽高 百分百填充*/
		var sHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
		var sWidth = document.documentElement.scrollWidth || document.body.scrollWidth;

		el.style.height = sHeight+"px";
		el.style.width = sWidth+"px";
	}

	/*拖拽效果*/
	function Drag(el){
		var divX = 0,
			divY = 0;
			el.onmousedown=function(e){
				var e = e||window.event;

				/*Js中this JQ中的$(this)*/
				var parentDemo =this.parentNode;
				/*鼠标按下处在容器的相对位置*/
				divX = e.clientX - parentDemo.offsetLeft;
				divY = e.clientY - parentDemo.offsetTop;

				document.onmousemove=function(e){
					var e = e||window.event;

					var dTop = e.clientY-divY;
					var dLeft = e.clientX-divX;

					/*设置界限*/
					if(dTop<0){
						dTop=0;
					}else if(dTop>=document.documentElement.clientHeight-el.offsetHeight){
						dTop=document.documentElement.clientHeight-el.offsetHeight;
					}

					if( dLeft<0 ){
						dLeft=0;
					}else if( dLeft>=document.documentElement.clientWidth-el.offsetWidth ){
						dLeft=document.documentElement.clientWidth-el.offsetWidth;
					}
					
					parentDemo.style.left=dLeft+"px";
					parentDemo.style.top=dTop+"px";
				}
			}

			document.onmouseup=function(){
				document.onmousemove=null;
			}
	}

	/*g('login').onclick=function(){
		g('staticForm').style.display = "block";
		g('mask').style.display = "block";

		autoCenter( g('staticForm') );
		Drag( g('loginTitle') );
		autoMask( g('mask') );

		window.onresize=function(){
			autoCenter( g('staticForm') );
			autoMask( g('mask') );
		}
			
	}*/
	autoCenter( g('staticForm') );
	
	g('loginClose').onclick=function(){
		g('staticForm').style.display = "none";
		g('mask').style.display = "none";
		/*消除默认*/
		return false;
	}

	g('mask').onclick=function(){
		g('staticForm').style.display = "none";
		g('mask').style.display = "none";
	}

	Drag( g('loginTitle') );

	window.onresize=function(){
		autoCenter( g('staticForm') );
		autoMask( g('mask') );
	}
	
	
}