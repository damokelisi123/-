window.onload=function(){
	var odiv=document.getElementById('roll');
	var oul=odiv.getElementsByTagName('ul')[0];
	var ali=document.getElementsByTagName('li');
	// 我面前有一把折断的剑，一条充满荆棘的路，一个看不清的未来，一场回不去的梦。” “说人话。” “伞坏了，鞋磨脚，雨大，不想起床
	oul.innerHTMl+=oul.innerHTMl;
	oul.style.width=ali[0].offsetWidth*ali.length+"px";
	setInterval(function () {
		oul.style.left=oul.offsetLeft-5+"px";
	},30);
}