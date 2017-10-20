;(function () {
	function getLocalTime(nS) {     
	   return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
	}
    $.ajax({  
        url:"http://h5.test.cloudm.com/n/news_myz/getdata?act=getNewsListJsonp&selectCategory=MM%E7%95%99%E8%A8%80&publishStatus=1",  
        dataType:'jsonp',
        data:'',
        jsonp:'callback',  
        success:function(result) {  
        	console.log(result)
        	var arr=result.data,htmlDOM=''
        	if(arr.length>0){
        		arr.forEach(function(n,i){
        			htmlDOM+='<div class="ly-one"><p class="t"><span>'+getLocalTime(n.createtime)+'：</span><span style="float:right;">来自'+n.title+'<span></p><p>'+n.content+'</p></div>'
        		})
        	}
        	$(window).on('load',function(){
        		$(".paginator").after('<div class="MMLY"><h4>给毛毛的留言：<a class="admin" target="_blank" href="http://h5.test.cloudm.com/n/news_myz/manage">管理</a></h4>'+htmlDOM+'<p style="text-align:center;"><button class="addLMsg-btn">添加留言</button></p></div>');
        	})
        },
        timeout:3000  
    });
    $('main').on('click','.addLMsg-btn',function(){
		// alert('暂未开放')
        $('body .MMLY-add').remove()
        $('body').append('<div class="MMLY-add"><p><input placeholder="邮箱"/></p><p><input placeholder="留言内容"/></p><p><button class="MMLY-add-btn">提交</button></p></div>')
    })
    $('body').on('click','.MMLY-add-btn',function(){
        $('body .MMLY-add').remove()
    })
}())

