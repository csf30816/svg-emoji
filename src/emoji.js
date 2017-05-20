window.onload = function () {
	function replaceTextByImage(pattern, src) {
		document.body.innerHTML = document.body.innerHTML.replace(new RegExp(pattern, 'g'), '<span style="background-size: 100% 100%; background-image: url(\'' + src + '\');">&nbsp&nbsp&nbsp&nbsp</span>');
	}

	replaceTextByImage(':\\)', 'https://csf30816.github.io/svg-emoji/emojis/smile.svg');
	replaceTextByImage(':smile:', 'https://csf30816.github.io/svg-emoji/emojis/smile.svg');
	replaceTextByImage(':P', 'https://csf30816.github.io/svg-emoji/emojis/tongue.svg');
	replaceTextByImage(':tongue:', 'https://csf30816.github.io/svg-emoji/emojis/tongue.svg');
	replaceTextByImage(':D', 'https://csf30816.github.io/svg-emoji/emojis/big-smile.svg');
	replaceTextByImage(':big-smile:', 'https://csf30816.github.io/svg-emoji/emojis/big-smile.svg');
	replaceTextByImage(':\\(', 'https://csf30816.github.io/svg-emoji/emojis/frown.svg');
	replaceTextByImage(':frown:', 'https://csf30816.github.io/svg-emoji/emojis/frown.svg');
	replaceTextByImage(';\\)', 'https://csf30816.github.io/svg-emoji/emojis/wink.svg');
	replaceTextByImage(':wink:', 'https://csf30816.github.io/svg-emoji/emojis/wink.svg');
	replaceTextByImage('xO', 'https://csf30816.github.io/svg-emoji/emojis/dead.svg');
	replaceTextByImage(':dead:', 'https://csf30816.github.io/svg-emoji/emojis/dead.svg');
	replaceTextByImage(':crying:', 'https://csf30816.github.io/svg-emoji/emojis/cry.svg');
	replaceTextByImage(':cry:', 'https://csf30816.github.io/svg-emoji/emojis/cry.svg');
	replaceTextByImage('D:', 'https://csf30816.github.io/svg-emoji/emojis/big-frown.svg');
	replaceTextByImage(':big-frown:', 'https://csf30816.github.io/svg-emoji/emojis/big-frown.svg');
	replaceTextByImage(':gasp:', 'https://csf30816.github.io/svg-emoji/emojis/big-frown.svg');
	replaceTextByImage(':heart-eyes:', 'https://csf30816.github.io/svg-emoji/emojis/heart-eyes.svg');
	replaceTextByImage(':neutral:', 'https://csf30816.github.io/svg-emoji/emojis/neutral.svg');
	replaceTextByImage(':|', 'https://csf30816.github.io/svg-emoji/emojis/neutral.svg');
	replaceTextByImage(':plain:', 'https://csf30816.github.io/svg-emoji/emojis/neutral.svg');
};
