
// masony.jsを使って画像をレンガ状にグリッドする処理
$(window).load(function(){
	$('.row').masonry({
		itemSelector: '.col-md-3',
	});
});


// サムネイルをホバーした時、ボタンをfeadIn, fadeOutする処理
 $(function(){
 	$('.thumbnail').hover(
 		function(){
 			$(this).find("div.thumbnailButton").fadeIn("fast");
 		},
 		function(){
 			$(this).find("div.thumbnailButton").fadeOut("fast");
 		}
 	);
 });