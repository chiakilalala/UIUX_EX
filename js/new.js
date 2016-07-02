$(function(){
	//預設顯示第一個TABS

  var _showTab = 0;
  $('.abgne_tab').each(function(){
  				//目前的頁簽區塊
  				var $tab=$(this);

  var $defaultLi=$('ul.tabs li').eq(_showTab).addClass('active');
  $($defaultLi.find('a').attr('href')).siblings().hide();
//eq() 方法将匹配元素集缩减值指定 index 上的一个。
//li頁簽被點擊時
//若要換成滑鼠移到li頁簽就切換時 把click改成moueseover

$('ul.tabs li').click(function(){
	//找出li中的超連結 herf(#id)
	var $this = $(this),
	_clickTab = $this.find('a').attr('href');
	//把目前點擊到的li頁簽 加上.active
	//並把兄弟元素中有 .active的都移除class
	$this.addClass('active').siblings('.active').removeClass('active');
	//淡入相對應的內容並隱藏兄弟元素
	$(_clickTab).stop(false,true).fadeIn().siblings().hide();
	return false;



}).find('a').focus(function(){
     this.blur();
			});
		});
});
