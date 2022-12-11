let currentRow = 0;let nextRowBlock = 0;let score = 0;let remNotification = 0;let gameFin = 0;let gameOn = 0;let maxBlock = 5;let level = 'YBM김_4학년_전체';let difficulty = 'easy';let mustUse = '';let bestStreak = 0;let currentStreak = 0;let userScore = 0;
let YBM김_4학년_1학기_3 = 0;let YBM김_4학년_2학기_3 = 0;let YBM김_4학년_전체_3 = 0;let YBM김_4학년_1학기_4 = 0;let YBM김_4학년_2학기_4 = 0;let YBM김_4학년_전체_4 = 0;let YBM김_4학년_1학기_5 = 0;let YBM김_4학년_2학기_5 = 0;let YBM김_4학년_전체_5 = 0;

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

let container = document.createElement('div');
container.id = 'container';
document.body.append(container);

startMenu();

function showScores(modal, type, diff){
	let msBlock = document.createElement('div');
	msBlock.id = 'msBlock';
	modal.append(msBlock);
	for(i = 0; i < 3; i++){
		let modalScoreBlock = document.createElement('div');
		modalScoreBlock.className = 'msBlock';
			let msHeadContent = (i == 0)? 'YBM김_4학년_1학기' : ((i == 1)? 'YBM김_4학년_2학기' : 'YBM김_4학년_전체')
			let modalScoreHead = document.createElement('span');
			modalScoreHead.className = 'msHead';
			modalScoreHead.innerText = msHeadContent;
			modalScoreBlock.append(modalScoreHead);
	
			let msBodyContent = localStorage.getItem(msHeadContent);
			let modalScoreBody = document.createElement('span');
			modalScoreBody.className = 'msBody';
			modalScoreBody.innerText = (msBodyContent == null)? 0 : msBodyContent;
			modalScoreBlock.append(modalScoreBody);
		msBlock.append(modalScoreBlock);
	}
}

function showHelp(modal, type){
	let exampleWords = ['SUNNY', 'WORLD', 'TITAN'];
	let mhBlock = document.createElement('div');
	mhBlock.id = 'mhBlock';
	mhbHead = document.createElement('div');
	mhbHead.className = 'mhbHead';
	mhbHead.innerText = (type == '게임')? '단어를 맞추기 위한 6번의 도전 기회가 있습니다.\n\n4학년에서 배운 단어만 입력할 수 있습니다.\n정답을 제출하려면 ENTER키를 눌러주세요.\n\n매 시도마다 알파벳의 색이 변합니다.' : '\n4학년 1학기와 4학년 2학기, \n그리고 4학년 전체 범위를 선택할 수 있습니다.\n\n';
	mhBlock.append(mhbHead);

	let mhbBody = document.createElement('div');
	mhbBody.className = 'mhbBody';

	if(type == '게임'){
		for(i = 0; i < exampleWords.length; i++){
			let rand = Math.floor(Math.random() * 5);
			let tileClass = (i == 0)? 'blockGreen' : ((i == 1)? 'blockGold' : 'blockGrey');
			let exNotification = '';
			let exampleRow = document.createElement('div');
			exampleRow.className = 'exampleRow';
			for(j = 0; j < exampleWords[i].length; j++){
				let exampleTile = document.createElement('span');
				exampleTile.className = (j == rand)? 'exampleTile ' + tileClass : 'exampleTile';
				exampleTile.innerText = exampleWords[i][j];
				exampleRow.append(exampleTile);
				exNotification += (j == rand)? '<strong>' + exampleWords[i][j] + '</strong>' : '';
			}
			exNotification += (i == 0)? ' 가 알맞은 위치에 있습니다.' : ((i == 1)? ' 이 잘못된 위치에 있습니다.' : ' 는 이 단어에 없습니다.');
			let exNotRow = document.createElement('div');
			exNotRow.innerHTML = exNotification;
			exampleRow.append(exNotRow);
			mhbBody.append(exampleRow);
		}
	}else{
		mhbBody.className = 'mhbHead';
		mhbBody.innerText = '\n쉬운 난이도(easy)와 어려운 난이도(difficult)중에서 고를 수 있습니다. \n\n어려운 난이도에서는 이전 시도에서 발견한 초록색 타일과 노란색 을 반드시 사용하여 답을 적어야 합니다.';
	}
	mhBlock.append(mhbBody);
	modal.append(mhBlock);
}

function openModal(type, notification){
	let modal = document.createElement('div');
	modal.id = 'modal';
	if(type == 'levelSelect'){
		for(i = 0; i < 3; i++){
			let modalBtn = document.createElement('button');
			modalBtn.className = 'modalBtn';
			modalBtn.innerText = (i == 0)? 'YBM김_4학년_1학기' : ((i == 1)? 'YBM김_4학년_2학기' : 'YBM김_4학년_전체');
			modalBtn.addEventListener('click', levelSelect);
			modal.append(modalBtn);
		}
	}
	else if(type == 'charSelect'){
		for(i = 3; i < 6; i++){
			let modalBtn = document.createElement('button');
			modalBtn.className = 'modalBtnL';
			modalBtn.innerText = i + ' 글자';
			modalBtn.addEventListener('click', charSelect);
			modal.append(modalBtn);
			setTimeout(function(){
				modal.style.cssText = 'opacity: 1';
			}, 1);
		}
	}
	else if(type == 'difficultySelect'){
		for(i = 0; i < 2; i++){
			let modalBtn = document.createElement('button');
			modalBtn.className = 'modalBtnL';
			modalBtn.innerText = (i == 0)? 'Easy' : 'Difficult';
			modalBtn.addEventListener('click', difficultySelect);
			modal.append(modalBtn);
			setTimeout(function(){
				modal.style.cssText = 'opacity: 1';
			}, 1);
		}
	}
	else if(type == 'endScore'){
		let message = document.createElement('span');
		message.className = 'modalMessage';
		message.innerHTML = notification;
		modal.append(message);

		for(i = 0; i < 4; i++){
			let modalScoreBlock = document.createElement('div');
			modalScoreBlock.className = 'msBlock';
				let msHeadContent = (i == 0)? 'SCORE' : ((i == 1)? 'TOP SCORE' : ((i == 2)? 'STREAK' : 'BEST STREAK'));
				let modalScoreHead = document.createElement('span');
				modalScoreHead.className = 'msHead';
				modalScoreHead.innerText = msHeadContent;
				modalScoreBlock.append(modalScoreHead);
				
				let msBodyContent = (i == 0)? userScore : ((i == 1)? localStorage.getItem('score' + difficulty + level) : ((i == 2)? currentStreak : localStorage.getItem('streak' + difficulty + level)));
				let modalScoreBody = document.createElement('span');
				modalScoreBody.className = 'msBody';
				modalScoreBody.innerText = (msBodyContent == null)? 0 : msBodyContent;
				modalScoreBlock.append(modalScoreBody);
			modal.append(modalScoreBlock);
		}
		setTimeout(function(){
			document.addEventListener('click', restartClick);
			document.addEventListener('keyup', restart);
		}, 100);
	}
	else if(type == 'highScores'){
		for(i = 0; i < 2; i++){
			let scoreType = document.createElement('div');
			scoreType.className = 'scoreType';
			scoreType.innerText = (i == 0)? 'SCORE' : 'STREAK';
			modal.append(scoreType);
		}

		for(i = 0; i < 4; i++){
			let scoreBtn = document.createElement('button');
			scoreBtn.className = (i == 0)? 'scoreBtnActive' : 'scoreBtn';
			scoreBtn.innerText = (i == 0 || i == 2)? 'EASY' : 'DIFFICULT';
			scoreBtn.j = i;
			scoreBtn.modal = modal;
			scoreBtn.addEventListener('click', changeScore);
			modal.append(scoreBtn);
		}
		showScores(modal, 'score', 'easy');
	}
	else if(type == '도움말'){
		for(i = 0; i < 2; i++){
			let helpBtn = document.createElement('button');
			helpBtn.className = (i == 0)? 'helpBtnActive' : 'helpBtn';
			helpBtn.innerText = (i == 0 || i == 2)? '게임' : '옵션';
			helpBtn.j = i;
			helpBtn.modal = modal;
			helpBtn.addEventListener('click', changeHelpView);
			modal.append(helpBtn);
		}
		showHelp(modal, '게임');
	}

	container.prepend(modal);
	setTimeout(function(){
		modal.style.cssText = 'opacity: 1';
	}, 1);

	let shadowBack = document.createElement('div');
	shadowBack.id = 'shadowBack';
	container.prepend(shadowBack);
	setTimeout(function(){
		shadowBack.style.cssText = 'opacity: .35';
	}, 1);

	let modalClose = document.createElement('button');
	modalClose.id = 'modalClose';
	modalClose.innerText = '닫기';
	modalClose.modal = modal;
	modalClose.shadowBack = shadowBack;
	modalClose.addEventListener('click', closeModal);
	modal.prepend(modalClose);
}

function openWindow(url, windowName){
	window.open(url, windowName,'width=550,height=450,left=150,top=200,toolbar=0,status=0,data-action=share/whatsapp/share')
}

function addLogo(){
	let logo = document.createElement('div');
	logo.className = 'logo';
	logo.addEventListener("click", logoClick);

	let domName = '4학년영어단어';
	for(i = 0; i < domName.length; i++){
		let spanClass = (i == 0 || i % 2 == 0)? 'logo_green' : 'logo_gold';
		let logoSpan = document.createElement('span');
		logoSpan.className = spanClass;
		logoSpan.innerText = domName[i];
		logo.append(logoSpan);
	}

	container.append(logo);
}

function changeHelpView(){
	let j = event.currentTarget.j;
	let modal = event.currentTarget.modal;
	document.getElementsByClassName('helpBtnActive')[0].className = 'helpBtn';
	this.className = 'helpBtnActive';
	if(j == 0){
		document.getElementById('mhBlock').remove();
		showHelp(modal, '게임');
	}else{
		document.getElementById('mhBlock').remove();
		showHelp(modal, '옵션');
	}
}

function setGlobal(){
	for(i = 1; i < 3; i++){
		for(j = 3; j < 6; j++){
			let lsItem = (i == 1)? 'YBM김_4학년_1학기' + j : ((i == 2)? 'YBM김_4학년_2학기' + j : 'YBM김_4학년_전체' + j );
			if (localStorage.getItem(lsItem) === null) {
				localStorage.setItem(lsItem, 0);
			}
		}
	}

	YBM김_4학년_1학기_3 = localStorage.getItem('YBM김_4학년_1학기_3');
	YBM김_4학년_2학기_3 = localStorage.getItem('YBM김_4학년_2학기_3');
	YBM김_4학년_전체_3 = localStorage.getItem('YBM김_4학년_전체_3');
	YBM김_4학년_1학기_4 = localStorage.getItem('YBM김_4학년_1학기_4');
	YBM김_4학년_2학기_4 = localStorage.getItem('YBM김_4학년_2학기_4');
	YBM김_4학년_전체_4 = localStorage.getItem('YBM김_4학년_전체_4');
	YBM김_4학년_1학기_5 = localStorage.getItem('YBM김_4학년_1학기_5');
	YBM김_4학년_2학기_5 = localStorage.getItem('YBM김_4학년_2학기_5');
	YBM김_4학년_전체_5 = localStorage.getItem('YBM김_4학년_전체_5');

	gameFin = 0;
	currentRow = 0;
	nextRowBlock = 0;
	score = 0;
	remNotification = 0;
	mustUse = '';
}

function startMenu(){
	if(document.getElementById('wordscript') != null){
		document.getElementById('wordscript').remove();
	}
	let script = document.createElement('script');
	script.id = 'wordscript';
	script.src = './assets/js/words/' + maxBlock + '.js';
	document.body.prepend(script);
	setGlobal();
	container.innerHTML = '';
	addLogo();
	let menu = document.createElement('div');
	menu.id = 'menu';
	for(i = 0; i < 6; i++){
		let j = i;
		let menuBtn = document.createElement('button');
		menuBtn.className = 'menuBtn';
		menuBtn.innerText = (i == 0)? maxBlock + ' 글자' : ((i == 1)? level : ((i == 2)? difficulty : ((i == 3)? '최고점수' : ((i == 4)? '도움말' : '게임시작'))));
		menuBtn.j = i;

		menuBtn.addEventListener("click", menuClick);
		menu.append(menuBtn);
	}
	container.append(menu);
}

function gameOver(){
	gameFin = 1;
	document.removeEventListener('keyup', deleteClick, false);
	document.removeEventListener('keyup', keyPress, false);
	document.removeEventListener('keyup', restart, false);
	document.removeEventListener('click', logoClick, false);
	document.removeEventListener('click', menuClick, false);
	document.removeEventListener('click', enterClick, false);
	document.removeEventListener('click', levelModal, false);
	document.removeEventListener('click', difficultyModal, false);
	document.removeEventListener('click', closeModal, false);
}

function gameStart(){
	setGlobal();
	container.innerHTML = '';
	let wordType = (level == 'YBM김_4학년_1학기')? YBM김_4학년_1학기 : ((level == 'YBM김_4학년_2학기')? YBM김_4학년_2학기 : YBM김_4학년_전체);
	let rand = Math.floor(Math.random() * wordType.length);
	chosenWord = wordType[rand].toUpperCase();

	addLogo();

	let navBar = document.createElement('div');
	navBar.className = 'nav_bar';
		let difficultySelect = document.createElement('button');
		difficultySelect.id = 'difficultySelectBtn';
		difficultySelect.className = 'btn';
		difficultySelect.innerText = difficulty;
		difficultySelect.addEventListener('click', difficultyModal);
		navBar.append(difficultySelect);

		let giveUpBtn = document.createElement('button');
		giveUpBtn.id = 'giveUpBtn';
		giveUpBtn.className = 'btn';
		giveUpBtn.innerText = '포기';
		giveUpBtn.addEventListener('click', quitQlick);
		navBar.append(giveUpBtn);

		let levelSelect = document.createElement('button');
		levelSelect.id = 'levelSelectBtn';
		levelSelect.className = 'btn';
		levelSelect.innerText = level;
		levelSelect.addEventListener('click', levelModal = function(event){
			openModal('levelSelect');
		})
		navBar.append(levelSelect);
	container.append(navBar);

	let gameArea = document.createElement('div');
	gameArea.className = 'game_area';
	for(i = 0; i < 6; i++){
		let row = document.createElement('div');
		row.className = 'row';
		for(j = 0; j < maxBlock; j++){
			let rowBlock = document.createElement('div');
			rowBlock.className = 'row_block';
			row.append(rowBlock);
		}
		gameArea.append(row);
	}
	container.append(gameArea);

	let notification = document.createElement('div');
	notification.id = 'notification';
	notification.innerText = '정답을 맞춰봅시다!'
	container.append(notification);

	let keyLayoutTop = 'QWERTYUIOP';
	let keyLayoutMid = 'ASDFGHJKL';
	let keyLayoutBot = 'ZXCVBNM';

	let keyboard = document.createElement('div');
	keyboard.id = 'keyboard';

		let topKeys = document.createElement('div');
		topKeys.id = 'topKeys';
		addKeys(topKeys, keyLayoutTop, 'keyboardKey_s');
		keyboard.append(topKeys);

		let midKeys = document.createElement('div');
		midKeys.id = 'midKeys';
		addKeys(midKeys, keyLayoutMid, 'keyboardKey_m');
		keyboard.append(midKeys);

		let botKeys = document.createElement('div');
		botKeys.id = 'botKeys';

		let deleteKey = document.createElement('span');
		deleteKey.className = 'keyboardKey_l';
		deleteKey.innerHTML = '&#x2190;';
		deleteKey.addEventListener("click", deleteClick);
		botKeys.append(deleteKey);
		addKeys(botKeys, keyLayoutBot, 'keyboardKey_s');

		let enterKey = document.createElement('span');
		enterKey.className = 'keyboardKey_l';
		enterKey.innerText = 'Enter';
		enterKey.addEventListener("click", enterClick);
		botKeys.append(enterKey);
		keyboard.append(botKeys);

	container.append(keyboard);

	document.addEventListener('keyup', keyPress);
}

function difficultyModal(){
	openModal('difficultySelect');
}

function keyPress(event) {
	if(gameFin == 0){
		let alphabet = 'abcdefghijklmnopqrstuvwxyz';
		let wordRow = document.getElementsByClassName('row')[currentRow];
		let rowBlockEl = wordRow.childNodes;
		for(i = 0; i < alphabet.length; i++){
			if ((event.key === alphabet[i] || event.key === alphabet[i].toUpperCase())) {
				addLetter(rowBlockEl, alphabet[i]);
			}
		}
		if(event.key === 'Enter') {
			submitWord(wordRow, keyPress);
		}
		if(event.key === 'Backspace') {
			deleteLetter(rowBlockEl);
		}
	}
}

function quitQlick(){
	if(gameFin == 0){
		let url = '<a href="https://duckduckgo.com/?q=%22'+ chosenWord +'%22+%22definition%22&ia=definition" target="_blank">' + chosenWord + '</a>';
		notification = '정답은 ' + url + ' 입니다.'
		currentStreak = 0;
		userScore = userScore - 15;
		gameOver();

		setTimeout(function(){
			openModal('endScore', notification);
		}, 250);
	}
}

function enterClick(){
	if(gameFin == 0){
		let wordRow = document.getElementsByClassName('row')[currentRow];
		let rowBlockEl = wordRow.childNodes;
		submitWord(wordRow);
	}
}

function logoClick(event) {
	gameOn = 0;
	container.innerHTML = '';
	startMenu();
}

function menuClick(event) {
	let j = event.currentTarget.j;
	let modalType = (j == 0)? 'charSelect' : ((j == 1)? 'levelSelect' : ((j == 2)? 'difficultySelect' : ((j == 3)? 'highScores' : '도움말')));
	if(j < 5){
		openModal(modalType);
	}else{
		gameOn = 1;
		gameStart();
	}
}

function restart(event) {
	if (event.key === 'Enter') {
		document.removeEventListener('keyup', restart, false);
		document.removeEventListener('click', restartClick, false);
		gameStart();
	}
}

function restartClick(){
	document.removeEventListener('keyup', restart, false);
	document.removeEventListener('click', restartClick, false);
	gameStart();
}

function difficultySelect(){
	difficulty = this.innerText.toLowerCase();
	if(gameOn == 1){
		userScore = 0;
		currentStreak = 0;
		gameOver();
		document.removeEventListener('keyup', restart, false);
		gameStart();
	}else{
		startMenu();
	}
}
function charSelect(){
	maxBlock = parseInt(this.innerText.replace(/\D/g, ''));
	if(gameOn == 1){
		userScore = 0;
		currentStreak = 0;
		gameOver();
		document.removeEventListener('keyup', restart, false);
		gameStart();
	}else{
		startMenu();
	}
}

function changeScore(){
	let j = event.currentTarget.j;
	let modal = event.currentTarget.modal;
	document.getElementsByClassName('scoreBtnActive')[0].className = 'scoreBtn';
	this.className = 'scoreBtnActive';
	if(j == 0 || j == 1){
		document.getElementById('msBlock').remove();
		showScores(modal, 'score', this.innerText.toLowerCase());
	}else{
		document.getElementById('msBlock').remove();
		showScores(modal, 'streak', this.innerText.toLowerCase());
	}
}

function closeModal(){
	let modal = event.currentTarget.modal;
	let shadowBack = event.currentTarget.shadowBack;
	modal.style.cssText = 'opacity:0';
	shadowBack.style.cssText = 'opacity:0';
	setTimeout(function(){
		modal.remove();
		shadowBack.remove();
	}, 355);
}

function deleteClick(){
	if(gameFin == 0){
		let wordRow = document.getElementsByClassName('row')[currentRow];
		let rowBlockEl = wordRow.childNodes;
		deleteLetter(rowBlockEl);
	}
}

function levelSelect(){
	level = this.innerText.toLowerCase().replace(/ /g, "");
	if(gameOn == 1){
		userScore = 0;
		currentStreak = 0;
		gameOver();
		document.removeEventListener('keyup', restart, false);
		gameStart();
	}else{
		startMenu();
	}
}

function keyboardPress(){
	if(gameFin == 0){
		let layout = event.currentTarget.layout;
		let wordRow = document.getElementsByClassName('row')[currentRow];
		let rowBlockEl = wordRow.childNodes;
		addLetter(rowBlockEl, layout);
	}
}

function deleteLetter(rowBlockEl){
	if(nextRowBlock > 0){
		nextRowBlock--;
		rowBlockEl[nextRowBlock].innerText = '';
	}
}

function count(str, find) {
    return (str.split(find)).length - 1;
}

function checkAnswer(wordRow, answer){
	let answerArray = [];

	for(i = 0; i < answer.length; i++){
		let letter = answer[i].toUpperCase();
		answerArray.push(letter);
		let blockClass = 'blockGrey';
		if(chosenWord.toUpperCase().includes(letter)){
			if(chosenWord[i].toUpperCase() === letter){
				score++;
				blockClass = ' blockGreen';
				if(count(answer, letter) > count(chosenWord, letter)){
					for(j = 0; j < wordRow.childNodes.length; j++){
						if(wordRow.childNodes[j].innerText == letter && wordRow.childNodes[j].className == 'row_block  blockGold'){
							wordRow.childNodes[j].className = 'row_block  blockGrey';
							let index = answerArray.indexOf(letter);
							if (index !== -1) {
								answerArray.splice(index, 1);
							}
						}
					}
				}
			}else{
				if(countOccurrences(answerArray, letter) <= count(chosenWord, letter)){
					blockClass = ' blockGold';
				}
				else{
					blockClass = ' blockGrey';
				}
			}
		}
		wordRow.childNodes[i].className = 'row_block ' + blockClass;
		let keyboard = document.getElementById('keyboard_' + letter);
		if(chosenWord.toUpperCase().includes(letter)){
			if(letter == chosenWord[i]){
				if(!keyboard.className.includes('blockGreen')){
					keyboard.classList.remove('blockGold');
					keyboard.className += ' blockGreen';
				}
			}else{
				if(!keyboard.className.includes('blockGreen') && !keyboard.className.includes('blockGold')){
					keyboard.className += ' blockGold';
				}
			}
			if(count(answer, letter) > count(mustUse, letter) && count(mustUse, letter) <= count(chosenWord, letter)){
				mustUse += letter;
			}
		}
		else{
			if(!keyboard.className.includes('blockGrey')){
				keyboard.className += ' blockGrey';
			}
		}
	}

	if(score === maxBlock){
		let scoreLevel = (level == 'beginner')? 1 : ((level == 'intermediate')? 2 : ((level == 'advanced')? 3 : 4));
		userScore = userScore + ((scoreLevel * 10) - ((scoreLevel + 1) * currentRow));

		if(userScore > localStorage.getItem('score' + difficulty + level)){
			localStorage.setItem('score' + difficulty + level, userScore);
		}

		currentStreak++;
		if(currentStreak > localStorage.getItem('streak' + difficulty + level)){
			localStorage.setItem('streak' + difficulty + level, currentStreak);
		}

		let notification = 'Well done, you won! Click to play again';
		gameOver();

		setTimeout(function(){
			openModal('endScore', notification);
		}, 250);
	}
	else if(currentRow == 5){
		let url = '<a href="https://duckduckgo.com/?q=%22'+ chosenWord +'%22+%22definition%22&ia=definition" target="_blank">' + chosenWord + '</a>';
		let notification = '정답은 ' + url + ' 입니다.';
		userScore = userScore - 10;
		currentStreak = 0;
		gameOver();

		setTimeout(function(){
			openModal('endScore', notification);
		}, 250);
	}
	else{
		score = 0;
		nextRowBlock = 0;
		currentRow++;
	}
}

function submitWord(wordRow){
	if(nextRowBlock > 0 && nextRowBlock % maxBlock == 0){
		let answer = wordRow.innerText.replace(/[\n\r]/g, '');
		if(fullList.includes(answer)){
			if(difficulty == 'difficult'){
				for(i = 0; i < mustUse.length; i++){
					if(!answer.includes(mustUse[i])){
						remNotification = 0;
						document.getElementById('notification').innerText = 'You must use found characters';
						return;
					}
				}
			}
			checkAnswer(wordRow, answer);		
		}else{
			remNotification = 0;
			document.getElementById('notification').innerText = '4학년에서 배운 단어가 아니에요.';
		}
	}else{
		remNotification = 0;
		document.getElementById('notification').innerText = '정답은' + maxBlock + ' 글자입니다.'
	}
}

function addKeys(el, layout, keyClass){
	for(i = 0; i < layout.length; i++){
		let key = document.createElement('span');
		key.className = keyClass;
		key.id = 'keyboard_' + layout[i];
		key.innerText = layout[i];
		key.layout = layout[i];
		key.addEventListener("click", keyboardPress);
		el.append(key);
	}
}

function addLetter(rowBlockEl, letter){
	if(remNotification == 0){
		remNotification = 1;
		document.getElementById('notification').innerText = '';
	}
	if(nextRowBlock < maxBlock){
		rowBlockEl[nextRowBlock].innerText = letter.toUpperCase();
		nextRowBlock++;
	}
}
