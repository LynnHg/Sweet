
		!function(){
			var nav = document.querySelectorAll(".nav")[0];
			var search = document.querySelectorAll(".search")[0];
			var menu = document.querySelectorAll(".menu")[0];
			var lis = menu.children[0].children;
			var inp = search.children[1];
			var liarr = nav.children[0].children;
			var spanArr = [];
			var bgcolors = ["#EF7A7A","#F26DE1","#676EF6","#61F36D","#F5FA51"];
			var colors = ["#000","#0C8880","#14F655","#1E14E9","#F41818"];
			var srcs = ["imgs/menu11.png","imgs/menu22.png","imgs/menu33.png","imgs/menu44.png"];
			// slider
			var slider = document.querySelector(".slider");

			var imgWidth = slider.children[0].children[0].offsetWidth;
			var ul = slider.children[0];
			var boxLeftRight = slider.children[1];
			var btnArr = boxLeftRight.children;
			//导航栏
			for (var i = 0; i < liarr.length; i++) {
				spanArr[i] = liarr[i].children[1];
			}
			for (var i = 0; i < liarr.length; i++) {
				liarr[i].index = i;
				spanArr[i].style.backgroundColor = bgcolors[i];
				liarr[i].onmouseenter = function(){
					spanArr[this.index].style.backgroundColor = bgcolors[Math.floor(Math.random()*bgcolors.length)];
					getPrevNode(spanArr[this.index]).style.color = "#fff"
					animate(spanArr[this.index],{"height":"55"});
				}
				liarr[i].onmouseleave = function(){
					spanArr[this.index].style.backgroundColor = bgcolors[this.index];
					getPrevNode(spanArr[this.index]).style.color = '#000';
					animate(spanArr[this.index],{"height":"5"});
				}
			}
			//输入框宽度改变
			inp.onfocus = function(){
				animate(this,{"width":"150"}); 
			}
			inp.onblur = function(){
				animate(this,{"width":"100"}); 
			}
			//底部菜单变色
			for (var i = 0; i < lis.length; i++) {
				lis[i].index = i;
				var src = 0;
				lis[i].onmouseenter = function(){
					src = this.children[0].children[0].src;
					this.children[0].children[0].src = srcs[this.index];
				}
				lis[i].onmouseleave = function(){
					this.children[0].children[0].src = src;
				}
			}
			//slider 
			slider.onmouseover = function () {
				console.log(1)
				boxLeftRight.style.display = "block";
			}
			slider.onmouseout = function () {
				boxLeftRight.style.display = "none";
			}
			var index = 0;
			btnArr[1].onclick = function () {
				index++;
				console.log(index);	

				if(index>ul.children.length-1){
					index = 0;
				}
				animate(ul,{"left":-index*imgWidth});
			}
			btnArr[0].onclick = function () {
				index--;
				console.log(index);	
				if(index<0){
					index = ul.children.length - 1;
				}
				animate(ul,{"left":-index*imgWidth});
			}
		}()
