var txt = document.getElementById("txt");
var searchBtn = document.getElementById('search');
var content = document.getElementById("content");
var oUl = document.querySelector(".header>ul");
searchBtn.onmouseover = function(){
	this.style.cursor = "pointer";
}
ajax("post","json/cake-data.json","",function(obj){
	txt.oninput = function(){
		oUl.style.display = "block";
		var str1 = '';
		var count = 0;
		for(var i=0;i<obj.length;i++){
			console.log(txt.value);
			if(obj[i].title.indexOf(txt.value)!=-1){
				count++;
				if(count<=5){
					str1 +='<li data-id='+obj[i].id+'>'+obj[i].title+'</li>';
				}
			}
		}
		oUl.innerHTML = str1;
	}
	txt.onblur = function(){
		oUl.style.display = "none";
	}
	/*searchBtn.onclick = function(){
		var str = '';
		for(var i=0;i<obj.length;i++){
			if(obj[i].title.indexOf(txt.value)!=-1){	
				str+='<li data-id='+obj[i].id+'><p><img src='+obj[i].images+' /></p><p><i>店取</i><a href="##">'+obj[i].title+'</a></p><p>'+obj[i].price+'<em>'+obj[i].price+'</em></p></li>'
			}
		}
		content.innerHTML = str;
	}*/
	
})
 oUl.onclick = function(e){
 	var e = e|| event;
 	var target = e.target || e.srcElement;
 	if(target.tagName == "LI"){
 		var id = target.getAttribute("data-id");
 		location.href="detail.html?"+id;
 	}
 }
