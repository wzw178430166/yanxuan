// 头部菜单文字滚动
$(function(){
		$('#hearder_boxs').kxbdSuperMarquee({direction: 'up',distance:36,time:6,duration:40,scrollDelay:20,isEqual:true,loop: 0});
	});
	//头部菜单切换二级菜单
$(function(){
	 $('.hearder_right_li').each(function(i,val){
		$(this).hover(function(){
			 $(this).children('.hearder_warrper').eq(0).show();
			 },function(){
		     $(this).children('.hearder_warrper').eq(0).hide();
				 });
		 })
	 });
	 // Logo 搜索
	 (function(){
		 function locateCursor(elem, index) {
		if (elem.setSelectionRange) {
			elem.setSelectionRange(index, index);
		} else {
			var range = elem.createTextRange();
			var len = elem.value.length;
			range.moveStart('character', -len);
			range.moveEnd('character', -len);
			range.moveStart('character', index);
			range.moveEnd('character', 0);
			range.select();
		}
	}
	    		         $('.searchInput_one').click(function(){              
			   $('#searchInput_text').show();
			   $('#searchInput_text').focus();
			   }); 
			   
			  $('#searchInput_text').blur(function(){searchInputs
				     var tempstq = $('#searchInput_text').val();
				     if($.trim(tempstq)==0){
                $('#searchInput_text').hide();
        return false;
      }
				  })
				//购物车
				var gw_count=$('.gw-count');
				shanshan(gw_count);
		 }());
		 
		 //首页菜单导航栏 + 浮动菜单栏   切换样式   
		 $(function(){
		 		 //菜单
				  var nav_shouye=$('#nav_shouye').children('li');
	     nav_shouye.hoverDelay(function(){
			
			 $(this).children('.subnav_yanxuan').stop(true,true).show();
			 },function(){
				  $(this).children('.subnav_yanxuan').stop(true,true).hide();
				 });
			 //浮动
      var nav_ula=$('#nav_ula').children('li');
	     nav_ula.hoverDelay(function(){
			 $(this).children('.subnav_yanxuan').stop(true,true).show();
			 },function(){
				  $(this).children('.subnav_yanxuan').stop(true,true).hide();
				 });
			 })
			 
			 //轮播图
			$(function () {
        //手动控制轮播图
        $('.rotation_img li').eq(0).show();  
        $('.rotation_index li').mouseover(function () {     
    $(this).addClass('rotation_li').siblings().removeClass('rotation_li');
    var index = $(this).index();
    $('.rotation_img li').eq(index).stop(true,true).fadeIn("fast").siblings().stop(true,true).fadeOut("fast");  
       $('.rotation_dot').removeClass('rotation_span');
      $('.rotation_dot').eq(index).addClass('rotation_span');
        }) 
        //自动播放
        var i = 0;
        var t = setInterval(move, 5500);  
        //自动播放核心函数
        function move() {
    i++;
    if (i == 5) {
      i = 0;
    }
    $('.rotation_index li').eq(i).addClass('rotation_li').siblings().removeClass('rotation_li');
    $('.rotation_img li').eq(i).stop(true,true).fadeIn("fast").siblings().stop(true,true).fadeOut("fast");  
    $('.rotation_dot').removeClass('rotation_span');
     $('.rotation_dot').eq(i).addClass('rotation_span');
        }

        //向左播放核心函数
        function moveL() {
    i--;            
    if (i == -1) {   
      i = 4;
    }
    $('.rotation_index li').eq(i).addClass('rotation_li').siblings().removeClass('rotation_li');
    $('.rotation_img li').eq(i).fadeIn("fast").siblings().fadeOut("fast");
        }
        $('#rotation_L').click(function () { 
    moveL();
        })
        $('#rotation_R').click(function () { 
    move();
        })
        //鼠标移入移除
        $('#rotation_chart').hover(function () {
    clearInterval(t);
        }, function () {
    t = setInterval(move, 5500);
        })
})	

    //浮动菜单栏
     $(function(){
		 var nav_scrolltop=$('#nav_scrolltop');
		 $(window).scroll(function(){
			var scrollTopY=getScrollOffset().y;
			 //首页浮动菜单导航栏显示
				var nav_float_t=$('#nav_float_t');
				if(scrollTopY==0){
					  nav_float_t.css({"display":"none"});
					}
			if(scrollTopY >=0&&scrollTopY >=250){
				
					nav_float_t.addClass('active').animate({height:"60px"},800);		
			  nav_float_t.css({"display":"block"});
			 
        }else{
	nav_float_t.stop(true,true);
	 nav_float_t.css({"display":"none","height":"0px"});
			}
			//首页两侧浮动展示栏
			var product_logo=$('.product_logo').offset().top;
			if(scrollTopY>=0&&scrollTopY >=product_logo){
					$('#nav_float_r').css({"position":"fixed","top":"60px"});
					$('#nav_float_l').css({"position":"fixed","top":"60px","left":"20px"});
					}else{
						$('#nav_float_r').css({"position":"absolute","top":"20px"});
						$('#nav_float_l').css({"position":"absolute","top":"-100px","left":"-120px"});
						};
						//回到顶部
					if(scrollTopY>=0&&scrollTopY >=1200){	
                   nav_scrolltop.css({"display":"block"});
					}else{
					nav_scrolltop.css({"display":"none"});	
					}
			})
			nav_scrolltop.on('click',function(){
				$('html,body').animate({scrollTop:0},1500);
			});
			//点击关闭底部浮动广告
			$('#floating_nav').delegate('#float_close','click',function(){
					//IE8兼容透明度
		var ie8=new Judging_browsers();
		if(ie8.isie8()){
			$('#floating_nav').css({"filter":"alpha(opacity=70)"});
			}
				$('#floating_nav').hide();
				return false;
				});
			var ie22=new Judging_browsers();
		if(ie22.isie8()){
			$('#floating_Img').css({"position":"absolute","left":"50%","marginLeft":"-544px"});
			}	
		 });
		 
		 //品牌制造商       图片缩放
		 var Brand=(function(){
			 function Manufacture(width,height){
			 	this.widths=width;
			 	this.heights=height;
			 };
			 Manufacture.prototype.move=function(objlist,classname){
			 	var self=this;
				 var objlist=window.getElementsByClassName(objlist);
				  for(var i=0;i<objlist.length;i++){
			  objlist[i].onmouseover=function(){
				     var img=this.getElementsByTagName('img')[0];
				  img.className=classname;  
				  	img.style.width=Math.floor(self.widths)+10+'px';
				    img.style.height=Math.floor(self.heights)+10+'px';
				  // console.log(Math.floor(self.widths)+10);
				    //console.log(Math.floor(self.heights)+10);
				  }
				    objlist[i].onmouseout=function(){
				     var img=this.getElementsByTagName('img')[0];
				  img.style.width=(self.widths)+'px';
				    img.style.height=(self.heights)+'px';
				  }
			  }
				 };
			 return Manufacture;
			 }())
        
		 $(function(){
			 var obj1=new Brand('350','320');
			 obj1.move('brand_dfjk','currency_transition');
					 var obj2=new Brand('250','165');
			 obj2.move('brand_topb','currency_transition');
			 })

		
	      //新品首发
		  $(function(){
			var flag=true;
			var flags=true;
			var indexs=0;
			function mover(){
				flags=true;
				if(flag){
				indexs++;
				if(indexs==4){    
					$('#products_arright').css({"backgroundColor":"#E4DED3"});
					$('#products_arright').hover(function(){
						$('#products_arright').css({"backgroundColor":"#E4DED3"})
						},function(){
							$('#products_arright').css({"backgroundColor":"#E4DED3"})
							});	
					flag=false;
					}
			$('#products_arleft').css({"backgroundColor":"#D0C4AF!important"});
				$('#products_arleft').hover(function(){
						$('#products_arleft').css({"backgroundColor":"#B19E7A!important"})
						},function(){
							$('#products_arleft').css({"backgroundColor":"#D0C4AF!important"})
							});	
			$('#products_arleft').css({"backgroundColor":"#D0C4AF"});
			var weizhi=-indexs*100+"%";
					$('#products_New').animate({marginLeft:weizhi});
					$('#products_New').css({marginLeft:weizhi});  
				}
			}
			function moveLeft(){
				flag=true;
				if(indexs<1){
					$('#products_arleft').css({"backgroundColor":"#E4DED3!important"});
					$('#products_arleft').hover(function(){
						$('#products_arleft').css({"backgroundColor":"#E4DED3!important"})
						},function(){
							$('#products_arleft').css({"backgroundColor":"#E4DED3!important"})
							});	
					flags=false;
					}
						if(flags){
					indexs--;
					var weizhi=-indexs*100+"%";
							$('#products_arright').hover(function(){
						$('#products_arright').css({"backgroundColor":"#B19E7A"})
						},function(){
							$('#products_arright').css({"backgroundColor":"#D0C4AF"})
							});
					$('#products_arright').css({"backgroundColor":"#D0C4AF"});
					$('#products_New').animate({marginLeft:weizhi});
					$('#products_New').css({marginLeft:weizhi});  
				}
			}
				$('#products_arright').on('click',mover);
				$('#products_arleft').on('click',moveLeft);
		  });
		
	 //人气推荐
	    (function(){
					var menuli=document.getElementById("tab_menu").getElementsByTagName("li");
var neirongs=document.getElementById("tab_ul");
var neirong=getchilds(neirongs);
for(var i=0;i<menuli.length;i++){
	menuli[i].index=i;
	menuli[i].onclick=function(){
		for(var j=0;j<menuli.length;j++){
			menuli[j].className="";
			neirong[j].style.display="none";
		}
		menuli[this.index].className="tab_off";
		neirong[this.index].style.display="block";
	}
	menuli[i].onmouseover=function(){
		this.style.color="#b4a078";
		}
		menuli[i].onmouseout=function(){
			this.style.color="#333";
			}
}
		  //人气推荐图片缩放
			 var obj1=new Brand('180','180');
			 obj1.move('tab_right_conter','currency_transition');
			 var obj2=new Brand('320','320');
			 obj2.move('tab_left','currency_transition');
			 
		 // 文字加载效果
		   function aa(texts,obj){       
   var i    = 0;             
   var text = texts ;
  return setInterval(function flash(){
    var str = text.charAt(i);//获取改变样式的当前字符
    var strs = "<b>" + str + "</b>";//获取改变样式的当前字符
    leftStr  = text.substr(0,i);//截取当前获取到的单个改变字符到第一个字符的内容
    rightStr = text.substr(i+1,text.length-i);//截取获取剩下的字符串
    obj.innerHTML = leftStr + strs + rightStr;//前面三个拼接在一起的字符串
    i++;//当前字符的样式不断改变
    if (i>=text.length)i=0; //循环
    //setTimeout("flash",500);
  }
 ,500);
}
     aa('努力加载中...',tab_textint);
	 aa('努力加载中...',tab_text);
			}())
			
			//限时购
						var Intit=(function(){
    var Brinobj=function(){};
	Brinobj.prototype.getTime=function(id){
        var timer = null;//这里设置time为null，用于下面来清除计时器
        var obj = document.getElementById(id)//获取到放置时间数据的span的id
        timer = setInterval(function(){//设置定时器，来更新时间
                var a = new Date((obj.getAttribute("data-time"))).getTime();
                //上面这一步可能比较复杂，我们首先来看obj.getAttribute("data-time")这一句。这个是用来获取指定标签的data-time属性，
 //即我们要使用的到期时间，然后来看new Date().getTime(),这一句是用来获取我们所设置到期时间的时间戳，用于下面的计算，这个获取的是固定的数值
                var b = new Date().getTime();//这是获取当前时间，是一个不固定的数值
                var d = 0,s=0,h=0,m=0;//定义变量
                var ee = obj.getElementsByTagName("em")//获取布局中的em标签用于存取数据
                d = Math.floor((a - b)/1000/60/60/24);//获取剩余天数
                h = Math.floor((a - b)/1000/60/60%24);//获取剩余小时
                m = Math.floor((a - b)/1000/60%60);//获取剩余分钟
                s = Math.floor((a - b)/1000%60);//获取剩余秒数

                //中间这块区域是用来判断，当前时间数值小于10的时候给他前面加个0，这里可以根据具体情况可加可不加，以下同理
                if(d < 10){
                    d = "0" + d
                }else if(d < 0){
                    d = 0
                }
                if(h < 10){
                    h = "0" + h
                }else if(h < 0){
                    h = 0
                }
                if(m < 10){
                    m = "0" + m;
                }else if(m < 0){
                    m = 0;
                }
                if(s < 10){
                    s = "0" + s;
                }else if(s < 0){
                    s = 0;
                }
                ee[0].innerHTML = d+"天";
                ee[1].innerHTML = h;
                ee[2].innerHTML = m;
                ee[3].innerHTML = s;
                if(a <= b){//当我们的时间到期的时候，清除计时器，然后把当前标签的内容设置为0；
                    clearInterval(timer);
                    obj.innerHTML="";
                //  ee[0].innerHTML = 00;
                //    ee[0].innerHTML = 00;
                 //   ee[1].innerHTML = 00;
                //    ee[2].innerHTML = 00;
                }
            },1000)
         };
		 return Brinobj;
	}());

	 (function(){
		 	var thisobj=new Intit();
			 //  限时购  倒计时
             thisobj.getTime("reverse")//这里用来调用这个函数，传入id
			 var obj1=new Brand('180','180');
			 obj1.move('shoppings_nte','currency_transition');
		 }())
     
	    //登录框
		$(function(){
		var sign_in = document.getElementById('sign_in');
		var sign_ins = document.getElementById('sign_ins');
		var sign_Close = document.getElementById('sign_Close');
		var sign_content = getElementsByClassName('sign_content')[0];

var btn=document.getElementById('sign_denglu')
btn.onclick=function(){
	sign_in.style.display="block";
	sign_ins.style.display="block";
	setTimeout(function(){
		sign_content.style.display="block";
		},150);
	
	divClick()
	}
	IEFF(sign_ins,"webkitAnimationEnd",animationEnd);
	IEFF(sign_ins,"animationend",animationEnd);
/*sign_ins.addEventListener("webkitAnimationEnd", animationEnd); 

sign_ins.addEventListener("animationend", animationEnd);*/ 

function divClick() { 

sign_ins.className = "mongolia my-animation" 

} 

function animationEnd(e) { 

sign_ins.className = "mongolia" 

} 
		sign_Close.onclick=function(){
			sign_in.style.display="none";
	        sign_ins.style.display="none";
			sign_content.style.display="none";
			}		
			})
			
			//严选账户登录
			$(function(){
				//验证手机号码
    function mobel(){
        labenum.innerHTML="";
        labenum.style.marginLeft="10px";
			  if($.trim(pone.value)==0){
        labenum.innerHTML=bgerrors+"<font color='red'>号码不能为空</font>";
        return false;
      }
      var reg=/^1[0-9]{10}$/gim;
      var aa=reg.test(pone.value);
      if(!aa){
        labenum.innerHTML=bgerrors+"<font color='red'>必须11位数字</font>";
        return false;
      }else{
      	labenum.innerHTML=bgrighta;
      }
    }
							var menuli=document.getElementById("tab_titles").getElementsByTagName("li");
var neirongs=document.getElementById("sign_ful");
var neirong=getchilds(neirongs);
for(var i=0;i<menuli.length;i++){
	menuli[i].index=i;
	menuli[i].onclick=function(){
		for(var j=0;j<menuli.length;j++){
			menuli[j].className="";
			neirong[j].style.display="none";
		}
		menuli[this.index].className="tab_aff";
		neirong[this.index].style.display="block";
	}
}
	      //请输入手机号码
	       $('.sign_forms').click(function(){                
			   $('#sign_num').show();
			   $('#sign_num').focus();
			   }); 
			   
			  $('#sign_num').blur(function(){
				     var temp = $('#sign_num').val();
				     if($.trim(temp)==0){
                $('#sign_num').hide();
				  $('#sign_closes').hide();
        return false;
      }
	    var reg=/^1[0-9]{10}$/gim;
      var aa=reg.test(temp);
      if(!aa){
        $('#sign_xegta').show().html('手机号码格式错误');
		$('.sign_divst').css({"border":"1px solid red"});
		$("input[name='tests']").focus();
			$('#sign_closes').click(function(){
							//$('#sign_num').length=0;
							$("input[name='tests']").val("").focus();
						
							});		
        return false;
      }else{
		  $('#sign_xegta').hide();
		  $('.sign_divst').css({"border":"none"});
		  }
				  })
				  
			    $('#sign_num').on('keydown',function(){
					    var flag=true;
						$('#sign_closes').show();
						if($('.sign_forms').children().is('.sign_closes')){
						flag=false;
					
						}else{
							 var div='<div class="sign_closes" id="sign_closes"></div>';
							  //判断是否添加了，添加了就不要再重复创建元素了
					if(flag){
					 $(div).appendTo($('.sign_forms'));
					}
							}
					});
			   //请输入短信验证码
			         $('.sign_yazone').click(function(){               
			   $('#sign_num2').show();
			   $('#sign_num2').focus();
			   }); 
			   
			  $('#sign_num2').blur(function(){
				     var temps = $('#sign_num2').val();
				     if($.trim(temps)==0){
                $('#sign_num2').hide();
        return false;
      }
				  })
				  
			   //滑动填充验证
			   var SlideVerifyPlug = window.slideVerifyPlug;
			var slideVerify = new SlideVerifyPlug('#verify-wrap',{
				wrapWidth:'300',//设置 容器的宽度 ,不设置的话，会设置成100%，需要自己在外层包层div,设置宽度，这是为了适应方便点；
	            initText:'向右拖动滑块填充拼图',  //设置  初始的 显示文字
	            sucessText:'验证通过',//设置 验证通过 显示的文字
	            getSuccessState:function(res){
	           		//当验证完成的时候 会 返回 res 值 true，只留了这个应该够用了 
	           		alert(res);
	           	}
			});
	      			$('#sign_yanztwo').on('click',function(){
				setTimeout(function(){
					alert('短信已经发至您的手机，请注意查收');
					},300);
				})	
				})