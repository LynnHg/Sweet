	//获取内嵌和外链样式
	function getStyle(e,attr){
		if(window.getComputedStyle){
			return window.getComputedStyle(e,null)[attr];
		}
		return e.currentStyle[attr];

	}

	//功能：给定元素查找他的第一个元素子节点，并返回
	function getFirstNode(e){
		return e.firstElementChild || e.firstChild;
	}

	//功能：给定元素查找他的最后一个元素子节点，并返回
	function getLastNode(e){
		return e.lastElementChild || e.lastChild;
	}


 	//功能：给定元素查找他的下一个元素兄弟节点，并返回
	function getNextNode(e){
	    return e.nextElementSibling || e.nextSibling;
	}

	//功能：给定元素查找他的上一个兄弟元素节点，并返回
	function getPrevNode(e){
	    return e.previousElementSibling || e.previousSibling;
	}

	//功能：给定元素查找他的所有兄弟元素节点，并返回
	function allSiblings(e){
		var newArr = [];
		var arr = e.parentNode.children;
		for (var i = 0; i < arr.length; i++) {
			if(arr[i] !== e)
				newArr.push(arr[i]);
		}
		return newArr;
	}

	//获取scroll
	function scroll(){
		if(window.pageXOffset !== null){
			return{
				"left":window.pageXOffset,
				"top":window.pageYOffset
			};
		}else if(document.compatMode === "CSS1Compat"){
			return{
				"left":document.documentElement.scrollLeft,
				"top":document.documentElement.scrollTop
			};
		}else{
			return{
				"left":document.body.scrollLeft,
				"top":document.body.scrollTop
			};
		}

		//简单版，实际工作中用下面
		// return{
		// 	"left":window.pageXOffset + document.documentElement.scrollLeft + document.body.scrollLeft,
		// 	"top":window.pageYOffset + document.documentElement.scrollTop + document.body.scrollTop
		// };
	}
	
	//缓动框架
    function animate(ele,json,fn){
	    clearInterval(ele.timer);
	    ele.timer = setInterval(function () {
	        var bool = true;
	        for(var k in json){
	            var leader;
	            if(k === "opacity"){
	                leader = getStyle(ele,k)*100 || 1;
	            }else{
	                leader = parseInt(getStyle(ele,k)) || 0;
	            }
	            var step = (json[k] - leader)/10;
	            step = step>0?Math.ceil(step):Math.floor(step);
	            leader = leader + step;
	            if(k === "opacity"){
	                ele.style[k] = leader/100;
	                ele.style.filter = "alpha(opacity="+leader+")";
	            }else if(k === "zIndex"){
	                ele.style.zIndex = json[k];
	            }else{
	                ele.style[k] = leader + "px";
	            }
	            if(json[k] !== leader){
	                bool = false;
	            }
	        }
	        if(bool){
	            clearInterval(ele.timer);
	            if(fn){
	                fn();
	            }
	        }
	    },10);
	}
	//获取元素
	// function $(str){
	// 	var str1 = str.charAt(0);
	// 	if(str1 === "#"){
	// 		return document.getElementById(str.slice(1));
	// 	}else if(str1 === "."){
	// 		return document.getElementsByClassName(str.slice(1));
	// 	}else{
	// 		return document.getElementsByTagName(str);
	// 	}
	// }

	//显示元素
	function show(e){
		e.style.display = "block";
	}
	//隐藏元素
	function hide(e){
		e.style.display = "none";
	}
	//获取屏幕可视区域的宽高
	function client(){
	    if(window.innerHeight !== undefined){
	        return {
	            "width": window.innerWidth,
	            "height": window.innerHeight
	        }
	    }else if(document.compatMode === "CSS1Compat"){
	        return {
	            "width": document.documentElement.clientWidth,
	            "height": document.documentElement.clientHeight
	        }
	    }else{
	        return {
	            "width": document.body.clientWidth,
	            "height": document.body.clientHeight
	        }
	    }
	}
