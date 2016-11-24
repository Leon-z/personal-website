var board = new Array();
var score = 0;

$(document).ready(function() {
    //页面加载完毕执行newgame函数
    newgame();
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
	console.log(board,renderX,renderY)
	//在随机位置显示随机数字
	board[renderX][renderY]=randNumber;
	updateBoardView();
	return true;
}
