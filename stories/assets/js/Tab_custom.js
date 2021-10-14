/* Tab JS start custom */
export function TabFun() {
	$('#tab .tab__item:first-child, #tab-1').addClass('active');
	$('#tab .tab__item').click(function () {
		var tab_id = $(this).attr('data-tab');
		$('#tab .tab__item').removeClass('active');
		$('.tab__content').removeClass('active');
		$(this).addClass('active');
		$("#" + tab_id).addClass('active');
	})
}
/* Tab JS end custom */
