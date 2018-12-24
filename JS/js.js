$('.plate-mask').hide().slideUp();
var count = $('.plate').length;
$('.plate input').on('change', function() {
	--count;
	$(this).parent().parent().children(":first").slideDown(1000);
	var self = this;
	setTimeout(function(){
		$(self).parent().parent().parent().hide();
		if(count == 0) document.querySelector('.done').style.display = "block";
	}, 1000);
});