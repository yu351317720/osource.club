// JavaScript Document
$( document).ready(function(e) {
	$("tbody tr input[type='checkbox']").prop("class","goods");
	$("tbody tr td:nth-child(5)").find("button").eq(0).prop("class","reduce");
	$("tbody tr td:nth-child(5)").find("button").eq(1).prop("class","plus");
	
	$(".selAll").click(function (){
		$("tr input[type='checkbox']").prop('checked',$(this).prop("checked"))	   
    });
	/*
	var goods = document.getElementsByClassName("goods");	
	  for(var i =0; i<=goods.length; i++){
		goods[i].index = i; 
		goods[i].onclick = function(){
			for(var i =0; i<=goods.length; i++){
			if(goods[i].checked == true){ document.getElementsByClassName("selAll").checked == true;}else{document.getElementsByClassName("selAll").checked = false;}
			
			}
		}
		}*/
	 
	
		   
		$(".goods").click(function() {
          if($(this).prop("checked") == false){
			  $(".selAll").prop("checked",false)
		  }else{
		  		$(".goods").each(function() {
					if($(".goods").prop('checked') == false){
					$(".selAll").prop("checked",false)
					}
				}) ;
		  };
		  
        });
		   
			
		
       
    //});
	//减少
    $(".reduce").click(function(){
		var val = $(this).next("input").val();
		
		if(val <= 0 ){$(this).next("input").val('0')}
		$(this).next("input").val(--val);
	})
	//增加
	 $(".plus").click(function(){
		var val = $(this).prev("input").val();		
		$(this).prev("input").val(++val);
	})
	});
	