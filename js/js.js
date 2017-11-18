$(document).ready(function(){
$('td').click(function(){
	//alert('hello');
	
	console.log(this);
	$(this).find('img').toggle();
});
});