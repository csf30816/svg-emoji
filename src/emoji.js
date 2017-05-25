$(document).ready(function(){
	var any = $("body:contains(':raging:')").length > 0 || $("body:contains(':\\)')").length > 0 || $("body:contains(':\\(')").length > 0 || $("body:contains(':D')").length > 0 || $("body:contains(':P')").length > 0 || $("body:contains(';\\)')").length > 0 || $("body:contains('xO')").length > 0 || $("body:contains(':\\|')").length > 0 || $("body:contains(':smile:')").length > 0 || $("body:contains(':smile:')").length > 0 || $("body:contains(':frown:')").length > 0 || $("body:contains(':big-smile:')").length > 0 || $("body:contains(':tongue:')").length > 0 || $("body:contains(':wink:')").length > 0 || $("body:contains(':dead:')").length > 0 || $("body:contains(':dizzy:')").length > 0 || $("body:contains(':big-frown:')").length > 0 || $("body:contains(':gasp:')").length > 0 || $("body:contains(':cry:')").length > 0 || $("body:contains(':crying:')").length > 0 || $("body:contains(':turtle:')").length > 0 || $("body:contains(':smile:')").length > 0 || $("body:contains(':heart-eyes:')").length > 0 || $("body:contains(':smile:')").length > 0 || $("body:contains(':neutral:')").length > 0 || $("body:contains(':plain:')").length > 0 || $("body:contains(':thumbs-up:')").length > 0 || $("body:contains(':up:')").length > 0 || $("body:contains(':thumbs-down:')").length > 0 || $("body:contains(':down:')").length > 0 || $("body:contains(':teeth:')").length > 0 || $("body:contains(':smile:')").length > 0 || $("body:contains(':wide-smile:')").length > 0 || $("body:contains(':raging:')").length > 0 || $("body:contains(':angry-red:')").length > 0 || $("body:contains(':smile:')").length > 0 || $("body:contains(':angry:')").length > 0 || $("body:contains(':mad:')").length > 0 || $("body:contains('🙂')").length > 0 || $("body:contains('😀')").length > 0 || $("body:contains('🙁')").length > 0 || $("body:contains('😦')").length > 0 || $("body:contains('😛')").length > 0 || $("body:contains('😐')").length > 0 || $("body:contains('😵')").length > 0 || $("body:contains('😉')").length > 0 || $("body:contains('😍')").length > 0 || $("body:contains('😭')").length > 0 || $("body:contains('😢')").length > 0 || $("body:contains('😡')").length > 0 || $("body:contains('😠')").length > 0 || $("body:contains('😁')").length > 0 || $("body:contains('👍')").length > 0 || $("body:contains('👎')").length > 0 || $("body:contains('🐢')").length > 0;
	
	function replaceTextByImage(pattern, src) {
		document.body.innerHTML = document.body.innerHTML.replace(new RegExp(pattern, 'g'), '<span style="background-size: 100% 100%; background-image: url(\'' + src + '\');">&nbsp&nbsp&nbsp&nbsp</span>');
	}
	
	function replace() {
		// Smile 🙂
		replaceTextByImage(':\\)', 'https://csf30816.github.io/svg-emoji/emojis/smile.svg');
		replaceTextByImage(':smile:', 'https://csf30816.github.io/svg-emoji/emojis/smile.svg');
		replaceTextByImage('🙂', 'https://csf30816.github.io/svg-emoji/emojis/smile.svg');

		// Tongue 😛
		replaceTextByImage(':P', 'https://csf30816.github.io/svg-emoji/emojis/tongue.svg');
		replaceTextByImage(':tongue:', 'https://csf30816.github.io/svg-emoji/emojis/tongue.svg');
		replaceTextByImage('😛', 'https://csf30816.github.io/svg-emoji/emojis/tongue.svg');

		// Big Smile 😀
		replaceTextByImage(':D', 'https://csf30816.github.io/svg-emoji/emojis/big-smile.svg');
		replaceTextByImage(':big-smile:', 'https://csf30816.github.io/svg-emoji/emojis/big-smile.svg');
		replaceTextByImage('😀', 'https://csf30816.github.io/svg-emoji/emojis/big-smile.svg');

		// Frown ☹ 🙁
		replaceTextByImage(':\\(', 'https://csf30816.github.io/svg-emoji/emojis/frown.svg');
		replaceTextByImage(':frown:', 'https://csf30816.github.io/svg-emoji/emojis/frown.svg');
		replaceTextByImage('☹', 'https://csf30816.github.io/svg-emoji/emojis/frown.svg');
		replaceTextByImage('🙁', 'https://csf30816.github.io/svg-emoji/emojis/frown.svg');

		// Wink 😉
		replaceTextByImage(';\\)', 'https://csf30816.github.io/svg-emoji/emojis/wink.svg');
		replaceTextByImage(':wink:', 'https://csf30816.github.io/svg-emoji/emojis/wink.svg');
		replaceTextByImage('😉', 'https://csf30816.github.io/svg-emoji/emojis/wink.svg');

		// Dizzy 😵
		replaceTextByImage('xO', 'https://csf30816.github.io/svg-emoji/emojis/dead.svg');
		replaceTextByImage(':dizzy:', 'https://csf30816.github.io/svg-emoji/emojis/dead.svg');
		replaceTextByImage(':dead:', 'https://csf30816.github.io/svg-emoji/emojis/dead.svg');
		replaceTextByImage('😵', 'https://csf30816.github.io/svg-emoji/emojis/dead.svg');

		// Cry 😭 😢
		replaceTextByImage(':crying:', 'https://csf30816.github.io/svg-emoji/emojis/cry.svg');
		replaceTextByImage(':cry:', 'https://csf30816.github.io/svg-emoji/emojis/cry.svg');
		replaceTextByImage('😭', 'https://csf30816.github.io/svg-emoji/emojis/cry.svg');
		replaceTextByImage('😢', 'https://csf30816.github.io/svg-emoji/emojis/cry.svg');

		// Big Frown 😦
		replaceTextByImage('D:', 'https://csf30816.github.io/svg-emoji/emojis/big-frown.svg');
		replaceTextByImage(':big-frown:', 'https://csf30816.github.io/svg-emoji/emojis/big-frown.svg');
		replaceTextByImage(':gasp:', 'https://csf30816.github.io/svg-emoji/emojis/big-frown.svg');
		replaceTextByImage('😦', 'https://csf30816.github.io/svg-emoji/emojis/big-frown.svg');

		// Heart Eyes 😍
		replaceTextByImage(':heart-eyes:', 'https://csf30816.github.io/svg-emoji/emojis/heart-eyes.svg');
		replaceTextByImage('😍', 'https://csf30816.github.io/svg-emoji/emojis/heart-eyes.svg');

		// Neutral 😐
		replaceTextByImage(':neutral:', 'https://csf30816.github.io/svg-emoji/emojis/neutral.svg');
		replaceTextByImage(':\\|', 'https://csf30816.github.io/svg-emoji/emojis/neutral.svg');
		replaceTextByImage(':plain:', 'https://csf30816.github.io/svg-emoji/emojis/neutral.svg');
		replaceTextByImage('😐', 'https://csf30816.github.io/svg-emoji/emojis/neutral.svg');

		// Raging 😡
		replaceTextByImage(':raging:', 'https://csf30816.github.io/svg-emoji/emojis/raging.svg');
		replaceTextByImage(':angry-red:', 'https://csf30816.github.io/svg-emoji/emojis/raging.svg');
		replaceTextByImage('😡', 'https://csf30816.github.io/svg-emoji/emojis/raging.svg');

		// Mad 😠
		replaceTextByImage(':angry:', 'https://csf30816.github.io/svg-emoji/emojis/mad.svg');
		replaceTextByImage(':mad:', 'https://csf30816.github.io/svg-emoji/emojis/mad.svg');
		replaceTextByImage('😠', 'https://csf30816.github.io/svg-emoji/emojis/mad.svg');

		// Teeth 😁
		replaceTextByImage(':teeth:', 'https://csf30816.github.io/svg-emoji/emojis/teeth.svg');
		replaceTextByImage(':wide-smile:', 'https://csf30816.github.io/svg-emoji/emojis/teeth.svg');
		replaceTextByImage('😁', 'https://csf30816.github.io/svg-emoji/emojis/teeth.svg');

		// Thumbs Up 👍
		replaceTextByImage(':thumbs-up:', 'https://csf30816.github.io/svg-emoji/emojis/thumbs-up.svg');
		replaceTextByImage(':up:', 'https://csf30816.github.io/svg-emoji/emojis/thumbs-up.svg');
		replaceTextByImage('👍', 'https://csf30816.github.io/svg-emoji/emojis/thumbs-up.svg');

		// Thumbs Down 👎
		replaceTextByImage(':thumbs-down:', 'https://csf30816.github.io/svg-emoji/emojis/thumbs-down.svg');
		replaceTextByImage(':down:', 'https://csf30816.github.io/svg-emoji/emojis/thumbs-down.svg');
		replaceTextByImage('👎', 'https://csf30816.github.io/svg-emoji/emojis/thumbs-down.svg');
		
		// Turtle 🐢
		replaceTextByImage(':turtle:', 'https://csf30816.github.io/svg-emoji/emojis/thumbs-down.svg');
		replaceTextByImage('🐢', 'https://csf30816.github.io/svg-emoji/emojis/thumbs-down.svg');
	}
	
	replace();
	
	function check() {
		if ($("body:contains(':\\)')").length > 0) {
  			replace();
		};
	}
	
	setInterval(function(){
		if (any) {
  			replace();
			console.log(typeof replace)
		};
	}, 300);
});
