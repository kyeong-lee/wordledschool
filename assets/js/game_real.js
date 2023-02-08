let currentRow = 0;let nextRowBlock = 0;let score = 0;let remNotification = 0;let gameFin = 0;let gameOn = 0;
let maxBlock = 5; let grade = 3; let level = '일학기'


function downloadSelect(){
	if(grade == 3){
    var wb = XLSX.utils.book_new();
	var newWorksheet3 = excelHandler.getWorksheet();
	XLSX.utils.book_append_sheet(wb, newWorksheet3, excelHandler.getSheetName3());
	var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
	saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), excelHandler.getExcelFileName3());
	}else if(grade == 4){
		var wb = XLSX.utils.book_new();
		var newWorksheet4 = excelHandler.getWorksheet();
		XLSX.utils.book_append_sheet(wb, newWorksheet4, excelHandler.getSheetName4());
		var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
		saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), excelHandler.getExcelFileName4());
	}else if(grade == 5){
		var wb = XLSX.utils.book_new();
		var newWorksheet5 = excelHandler.getWorksheet();
		XLSX.utils.book_append_sheet(wb, newWorksheet5, excelHandler.getSheetName5());
		var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
		saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), excelHandler.getExcelFileName5());
	}else{
		var wb = XLSX.utils.book_new();
		var newWorksheet6 = excelHandler.getWorksheet();
		XLSX.utils.book_append_sheet(wb, newWorksheet6, excelHandler.getSheetName6());
		var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
		saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), excelHandler.getExcelFileName6());
	}}
var excelHandler = {
		getExcelFileName3 : function(){
		    return '3학년 영어단어목록.xlsx';
		},
		getExcelFileName4 : function(){
		    return '4학년 영어단어목록.xlsx';
		},
		getExcelFileName5 : function(){
		    return '5학년 영어단어목록.xlsx';
		},
		getExcelFileName6 : function(){
		    return '6학년 영어단어목록.xlsx';
		},
		getSheetName3 : function(){
			return '3학년 영어단어';
		},
		getSheetName4 : function(){
			return '4학년 영어단어';
		},
		getSheetName5 : function(){
			return '5학년 영어단어';
		},
		getSheetName6 : function(){
			return '6학년 영어단어';
		},
		getExcelData : function(){
			let wordsList= document.createElement('script');
			wordsList.id = 'wordsList';
			wordsList.src = './assets/js/words/grade3.js';
			let data = [['세글자_1학기' , '세글자_2학기', '네글자_1학기' , '네글자_2학기', '다섯글자_1학기' , '다섯글자_2학기']
						,['', '', '', '', '', '']
						,[세글자_일학기[0], 세글자_이학기[0], 네글자_일학기[0], 네글자_이학기[0], 다섯글자_일학기[0], 다섯글자_이학기[0]]
						,[세글자_일학기[1], 세글자_이학기[1], 네글자_일학기[1], 네글자_이학기[1], 다섯글자_일학기[1], 다섯글자_이학기[1]]
						,[세글자_일학기[2], 세글자_이학기[2], 네글자_일학기[2], 네글자_이학기[2], 다섯글자_일학기[2], 다섯글자_이학기[2]]
						,[세글자_일학기[3], 세글자_이학기[3], 네글자_일학기[3], 네글자_이학기[3], 다섯글자_일학기[3], 다섯글자_이학기[3]]
						,[세글자_일학기[4], 세글자_이학기[4], 네글자_일학기[4], 네글자_이학기[4], 다섯글자_일학기[4], 다섯글자_이학기[4]]
						,[세글자_일학기[5], 세글자_이학기[5], 네글자_일학기[5], 네글자_이학기[5], 다섯글자_일학기[5], 다섯글자_이학기[5]]
						,[세글자_일학기[6], 세글자_이학기[6], 네글자_일학기[6], 네글자_이학기[6], 다섯글자_일학기[6], 다섯글자_이학기[6]]
						,[세글자_일학기[7], 세글자_이학기[7], 네글자_일학기[7], 네글자_이학기[7], 다섯글자_일학기[7], 다섯글자_이학기[7]]
						,[세글자_일학기[8], 세글자_이학기[8], 네글자_일학기[8], 네글자_이학기[8], 다섯글자_일학기[8], 다섯글자_이학기[8]]
						,[세글자_일학기[9], 세글자_이학기[9], 네글자_일학기[9], 네글자_이학기[9], 다섯글자_일학기[9], 다섯글자_이학기[9]]
						,[세글자_일학기[10], 세글자_이학기[10], 네글자_일학기[10], 네글자_이학기[10], 다섯글자_일학기[10], 다섯글자_이학기[10]]
						,[세글자_일학기[11], 세글자_이학기[11], 네글자_일학기[11], 네글자_이학기[11], 다섯글자_일학기[11], 다섯글자_이학기[11]]
						,[세글자_일학기[12], 세글자_이학기[12], 네글자_일학기[12], 네글자_이학기[12], 다섯글자_일학기[12], 다섯글자_이학기[12]]
						,[세글자_일학기[13], 세글자_이학기[13], 네글자_일학기[13], 네글자_이학기[13], 다섯글자_일학기[13], 다섯글자_이학기[13]]
						,[세글자_일학기[14], 세글자_이학기[14], 네글자_일학기[14], 네글자_이학기[14], 다섯글자_일학기[14], 다섯글자_이학기[14]]
						,[세글자_일학기[15], 세글자_이학기[15], 네글자_일학기[15], 네글자_이학기[15], 다섯글자_일학기[15], 다섯글자_이학기[15]]
						,[세글자_일학기[16], 세글자_이학기[16], 네글자_일학기[16], 네글자_이학기[16], 다섯글자_일학기[16], 다섯글자_이학기[16]]
						,[세글자_일학기[17], 세글자_이학기[17], 네글자_일학기[17], 네글자_이학기[17], 다섯글자_일학기[17], 다섯글자_이학기[17]]
						,[세글자_일학기[18], 세글자_이학기[18], 네글자_일학기[18], 네글자_이학기[18], 다섯글자_일학기[18], 다섯글자_이학기[18]]
						,[세글자_일학기[19], 세글자_이학기[19], 네글자_일학기[19], 네글자_이학기[19], 다섯글자_일학기[19], 다섯글자_이학기[19]]
						,[세글자_일학기[20], 세글자_이학기[20], 네글자_일학기[20], 네글자_이학기[20], 다섯글자_일학기[20], 다섯글자_이학기[20]]
						,[세글자_일학기[21], 세글자_이학기[21], 네글자_일학기[21], 네글자_이학기[21], 다섯글자_일학기[21], 다섯글자_이학기[21]]
						,[세글자_일학기[22], 세글자_이학기[22], 네글자_일학기[22], 네글자_이학기[22], 다섯글자_일학기[22], 다섯글자_이학기[22]]
						,[세글자_일학기[23], 세글자_이학기[23], 네글자_일학기[23], 네글자_이학기[23], 다섯글자_일학기[23], 다섯글자_이학기[23]]
						,[세글자_일학기[24], 세글자_이학기[24], 네글자_일학기[24], 네글자_이학기[24], 다섯글자_일학기[24], 다섯글자_이학기[24]]	
					]
			return data
	    },
		getWorksheet : function(){
			var wscols = [
				{ width: 18 },
				{ width: 18 },
				{ width: 18 },
				{ width: 18 },
				{ width: 18 },
				{ width: 18 }]
			let workSheet = XLSX.utils.aoa_to_sheet(this.getExcelData())
			workSheet["!cols"] = wscols;
			return workSheet
		}
}
function s2ab(s) { 
    var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    var view = new Uint8Array(buf);  //create uint8array as viewer
    for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
    return buf;    
}

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

let container = document.createElement('div');
container.id = 'container';
document.body.append(container);

startMenu()

function showHelp(modal, type){
	let exampleWords = ['SUNNY', 'WORLD', 'TITAN'];
	let mhBlock = document.createElement('div');
	mhBlock.id = 'mhBlock';
	mhbHead = document.createElement('div');
	mhbHead.className = 'mhbHead';
	mhbHead.innerText = (type == '게임')? '단어를 맞추기 위한 6번의 도전 기회가 있습니다.\n\n해당 학년에서 배운 단어만 입력할 수 있습니다.\n정답을 제출하려면 ENTER키를 눌러주세요.\n\n매 시도마다 알파벳의 색이 변합니다.' : '\n해당 학년에서 배운 단어가 기억나지 않는다면 위 버튼을 클릭하여 단어목록을 다운받을 수 있습니다.\n\n 다른 학년의 단어를 보고싶다면 처음 화면에서 학년을 바꿔주세요.\n\n';
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
		opendownload()
}
	mhBlock.append(mhbBody);
	modal.append(mhBlock);}

function opendownload(){
	let modalBtn = document.createElement('button');
	modalBtn.className = 'modalBtn';
	modalBtn.innerText = grade + '학년 영어단어 다운로드';
	modalBtn.addEventListener('click', downloadSelect);
	modal.append(modalBtn);
	}

function openModal(type, notification){
	let modal = document.createElement('div');
	modal.id = 'modal';
	
	if(type == 'gradeSelect'){
		for(i = 3; i < 7; i++){
			let modalBtn = document.createElement('button');
			modalBtn.className = 'modalBtnL';
			modalBtn.innerText = i + '학년';
			modalBtn.addEventListener('click', gradeSelect);
			modal.append(modalBtn);
		}
	}
	else if(type == 'levelSelect'){
		for(i = 0; i < 3; i++){
			let modalBtn = document.createElement('button');
			modalBtn.className = 'modalBtn';
			modalBtn.innerText = (i == 0)? '일학기' : ((i == 1)? '이학기' : '전학기');
			modalBtn.addEventListener('click', levelSelect);
			modal.append(modalBtn);
		}
	}
	else if(type == 'charSelect'){
		for(i = 3; i < 6; i++){
			let modalBtn = document.createElement('button');
			modalBtn.className = 'modalBtnL';
			modalBtn.innerText = i + '글자';
			modalBtn.addEventListener('click', charSelect);
			modal.append(modalBtn);
			setTimeout(function(){
				modal.style.cssText = 'opacity: 1';
			}, 1);
		}
	}
	else if(type == 'end'){
		let message = document.createElement('span');
		message.className = 'modalMessage';
		message.innerHTML = notification;
		modal.append(message);
		setTimeout(function(){
			document.addEventListener('click', restartClick);
			document.addEventListener('keyup', restart);
		}, 100);
	}
	else if(type == 'help'){
		for(i = 0; i < 2; i++){
			let helpBtn = document.createElement('button');
			helpBtn.className = (i == 0)? 'helpBtnActive' : 'helpBtn';
			helpBtn.innerText = (i == 0 || i == 2)? '게임' : '단어목록';
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

	let domName = '초등학교영어단어';
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
		showHelp(modal, '단어목록');
	}
}

function setGlobal(){
	gameFin = 0;
	currentRow = 0;
	score = 0;
	nextRowBlock = 0;
	remNotification = 0;
	mustUse = '';
}

function startMenu(){
	if(document.getElementById('wordscript') != null){
		document.getElementById('wordscript').remove();
	}
	let script = document.createElement('script');
	script.id = 'wordscript';
	script.src = './assets/js/words/' + 'grade' + grade + '.js';
	document.body.prepend(script);
	setGlobal();
	container.innerHTML = '';
	addLogo();
	let menu = document.createElement('div');
	menu.id = 'menu';
	for(i = 0; i < 5; i++){
		let j = i;
		let menuBtn = document.createElement('button');
		menuBtn.className = 'menuBtn';
		menuBtn.innerText = (i == 0)? grade + '학년' : ((i == 1)? level : ((i == 2)? maxBlock + '글자' : ((i == 3)?  '도움말' : '게임시작')));
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
	document.removeEventListener('click', closeModal, false);
}

function gameStart(){
	setGlobal();
	container.innerHTML = '';
	let wordType = 세글자_일학기
	if(maxBlock == 3){
		wordType = (level == '일학기')? 세글자_일학기 : ((level == '이학기')? 세글자_이학기 : 세글자_전학기);
	}else if(maxBlock == 4){
		wordType = (level == '일학기')? 네글자_일학기 : ((level == '이학기')? 네글자_이학기 : 네글자_전학기);
	}else{
		wordType = (level == '일학기')? 다섯글자_일학기 : ((level == '이학기')? 다섯글자_이학기 : 다섯글자_전학기);
	}
	console.log(wordType)
	let rand = Math.floor(Math.random() * wordType.length);
	chosenWord = wordType[rand].toUpperCase();

	addLogo();

	let navBar = document.createElement('div');
	navBar.className = 'nav_bar';
		let giveUpBtn = document.createElement('button');
		giveUpBtn.id = 'giveUpBtn';
		giveUpBtn.className = 'btn';
		giveUpBtn.innerText = '포기하기';
		giveUpBtn.addEventListener('click', quitQlick);
		navBar.append(giveUpBtn);

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
		let url = '<a href="https://dict.naver.com/search.nhn?dicQuery=' + chosenWord + '&query=" target="_blank">' + chosenWord + '</a>'
		notification = '정답은 ' + url + ' 입니다.'
		gameOver();
	}
	setTimeout(function(){
		openModal('end', notification);
	}, 250);
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
	let modalType = (j == 0)? 'gradeSelect' : (j == 1)? 'levelSelect' : ((j == 2)? 'charSelect' : ((j == 3)? 'help' : 'gameStart'));
	if(j < 4){
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

function charSelect(){
	maxBlock = parseInt(this.innerText.replace(/\D/g, ''));
	if(gameOn == 1){
		gameOver();
		document.removeEventListener('keyup', restart, false);
		gameStart();
	}else{
		startMenu();
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

function gradeSelect(){
	grade = this.innerText.replace(/ /g, "")[0];
	if(gameOn == 1){
		gameOver();
		document.removeEventListener('keyup', restart, false);
		gameStart();
	}else{
		startMenu();
	}
}

function levelSelect(){
	level = this.innerText.replace(/ /g, "");
	if(gameOn == 1){
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
		let url = '<a href="https://duckduckgo.com/?q=%22'+ chosenWord +'%22+%22definition%22&ia=definition" target="_blank">' + chosenWord + '</a>';
		let notification = '잘했어요! 정답은 ' + url + " 입니다.";
		gameOver();

		setTimeout(function(){
			openModal('end', notification);
		}, 250);
	}
	else if(currentRow == 5){
		let url = '<a href="https://duckduckgo.com/?q=%22'+ chosenWord +'%22+%22definition%22&ia=definition" target="_blank">' + chosenWord + '</a>';
		let notification = '아쉬워요. 정답은 ' + url + ' 입니다.';
		gameOver();

		setTimeout(function(){
			openModal('end', notification);
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
		checkAnswer(wordRow, answer);		

	}else{
		remNotification = 0;
		document.getElementById('notification').innerText = '정답은 ' + maxBlock + ' 글자입니다.'
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
