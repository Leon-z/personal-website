var board = new Array();
var score = 0;

$(document).ready(function() {
    //页面加载完毕执行newgame函数
    newgame();
    $('#newgamebtn').bind('click',newgame);
})

//新游戏
function newgame() {
    //初始化棋盘格
    init();
    //随机两个格子生成数字
    generateOneNumber();
    generateOneNumber();
}

//初始化棋盘格
function init() {

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {

            var gridCell = $('#grid-cell-' + i + '-' + j);

            gridCell.css('top', support.getPosTop(i, j));
            gridCell.css('left', support.getPosLeft(i, j));
        }
    }
    for(var i =0 ; i < 4 ; i ++){

    	board[i]=new Array();

    	for( var j = 0 ; j < 4 ; j ++){
    		board[i][j] = 0;
    	}

    }

    //更新界面
    updateBoardView();
}

//根据board数组里的数据对页面进行渲染
function updateBoardView() {
	
	$('.number-cell').remove();
	for (var i = 0 ; i < 4 ; i ++){

		 for(var j =0;j<4; j++){

		 	$('#grid-container').append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
		 	var theNumberCell=$('#number-cell-'+i+'-'+j);

		 	if(board[i][j]==0){
		 		theNumberCell.css('width','0px');
		 		theNumberCell.css('height','0px');
		 		theNumberCell.css('top', support.getPosTop(i, j) + 50);
		 		theNumberCell.css('left', support.getPosLeft(i, j) + 50);
		 	}else {
		 		theNumberCell.css('width','100px');
		 		theNumberCell.css('height','100px');
		 		theNumberCell.css('top', support.getPosTop(i, j) );
		 		theNumberCell.css('left', support.getPosLeft(i, j) );

		 		theNumberCell.css('background-color', support.getNumberBackgroundColor( board[i][j]) );
		 		theNumberCell.css('color', support.getNumberColor( board[i][j]) );
		 		theNumberCell.text( board[i][j] );
		 	}
		 }
	}
}

//生成一个数字
function generateOneNumber() {

	if(support.nospace(board)){
		return false 
	}

	//随机一个位置
	var renderX = parseInt(Math.floor(Math.random() * 4));
	var renderY = parseInt(Math.floor(Math.random() * 4));

	while ( true ){
		if( board[renderX][renderY] == 0){
			break;
		}
		renderX = parseInt(Math.floor(Math.random() * 4));
		renderY = parseInt(Math.floor(Math.random() * 4));
	}

	//随机一个数字
	var randNumber =Math.random() < 0.5 ? 2 : 4 ;
	//在随机位置显示随机数字
	board[renderX][renderY]=randNumber;
	animation.showNumWithAnimation(renderX,renderY,randNumber);
	return true;
}
$(document).keydown(function (event) {
	
	switch(event.keyCode){
		case 37://left
			event.preventDefault()
			if(moveLeft()){
				generateOneNumber();
				isGameOver();
			}
			break;
		case 38://up
			event.preventDefault()
			if(moveUp()){
				generateOneNumber();
				isGameOver();
			}
			break;
		case 39://right
			event.preventDefault()
			if(moveRight()){
				generateOneNumber();
				isGameOver();
			}
			break;
		case 40://down
			event.preventDefault()
			if(moveDown()){
				generateOneNumber();
				isGameOver();
			}
			break;
		default ://default
			break;
	}
})
//左移
function moveLeft() {

	if(! support.canMoveLeft(board)){
		return false 
	}
	for (var i=0;i<4;i++){
		for (var j=1;j<4;j++){
			if(board[i][j]!=0){
				for(var k=0;k<j;k++){
					if(board[i][k]==0&&support.noBlockLHorizontal(i,k,j,board)){
						//move
						animation.showMoveAnimation(i,j,i,k);
						board[i][k]=board[i][j];
						board[i][j]=0;
						continue
					}else if(board[i][k]==board[i][j]&&support.noBlockLHorizontal(i,k,j,board)){
						//move
						animation.showMoveAnimation(i,j,i,k);
						
						//add
						board[i][k]+=board[i][j];
						board[i][j]=0;
						continue
					}
				}
			}
		}
	}
	setTimeout(updateBoardView,200)
	return true
}
//上移
function moveUp() {

	if(! support.canMoveUp(board)){
		return false 
	}
	for (var i=0;i<4;i++){
		for (var j=1;j<4;j++){
			if(board[j][i]!=0){
				for(var k=0;k<j;k++){
					if(board[k][i]==0&&support.noBlockVertical(i,k,j,board)){
						//move
						animation.showMoveAnimation(j,i,k,i);
						board[k][i]=board[j][i];
						board[j][i]=0;
						continue
					}else if(board[k][i]==board[j][i]&&support.noBlockVertical(i,k,j,board)){
						//move
						animation.showMoveAnimation(j,i,k,i);
						
						//add
						board[k][i]+=board[j][i];
						board[j][i]=0;
						continue
					}
				}
			}
		}
	}
	setTimeout(updateBoardView,200)
	return true
}
//右移
function moveRight() {

	if(! support.canMoveRight(board)){
		return false 
	}
	for (var i=0;i<4;i++){
		for (var j=2;j>=0;j--){
			if(board[i][j]!=0){
				for(var k=3;k>j;k--){
					if(board[i][k]==0&&support.noBlockRHorizontal(i,k,j,board)){
						//move
						animation.showMoveAnimation(i,j,i,k);
						board[i][k]=board[i][j];
						board[i][j]=0;
						continue
					}else if(board[i][k]==board[i][j]&&support.noBlockRHorizontal(i,k,j,board)){
						//move
						animation.showMoveAnimation(i,j,i,k);
						
						//add
						board[i][k]+=board[i][j];
						board[i][j]=0;
						continue
					}
				}
			}
		}
	}
	setTimeout(updateBoardView,200)
	return true
}
//下移
function moveDown() {

	if(! support.canMoveDown(board)){
		return false 
	}
	for (var i=2;i>=0;i--){
		for (var j=0;j<4;j++){
			if(board[i][j]!=0){
				for(var k=3;k>i;k--){
					if(board[k][j]==0&&support.noBlockVertical(j,i,k,board)){
						//move
						animation.showMoveAnimation(i,j,k,j);
						board[k][j]=board[i][j];
						board[i][j]=0;
						continue
					}else if(board[k][j]==board[i][j]&&support.noBlockVertical(j,i,k,board)){
						//move
						animation.showMoveAnimation(i,j,k,j);
						
						//add
						board[k][j]+=board[i][j];
						board[i][j]=0;
						continue
					}
				}
			}
		}
	}
	setTimeout(updateBoardView,200)
	return true
}

//判断是否游戏结束
function isGameOver() {
	if( support.nospace(board) && support.noMove(board) ){
		gameOver()
	}
	
}

function gameOver() {
	console.log('游戏结束')
}
