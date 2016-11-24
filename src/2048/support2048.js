var support={
	/**
	 * 计算出方块距离顶端的位置
	 * @param  {[num]} i [横坐标]
	 * @param  {[num]} j [纵坐标]
	 * @return {[num]}   [方块距离顶端的距离]
	 */
	getPosTop:function (i,j) {
		
		return 120*i + 20
	},
	/**
	 * 计算出方块距离左侧的位置
	 * @param  {[num]} i [横坐标]
	 * @param  {[num]} j [纵坐标]
	 * @return {[num]}   [方块距离左侧的距离]
	 */
	getPosLeft:function (i,j) {
		
		return 120*j + 20
	},
	//传入单元的值返回值对应背景的颜色
	getNumberBackgroundColor:function (num){
		switch(num){
			case 2:return '#eee4da';break;
			case 4:return '#ede0c8';break;
			case 8:return '#f2b179';break;
			case 16:return '#f59563';break;
			case 32:return '#f67c5f';break;
			case 64:return '#f65e3b';break;
			case 128:return '#edcf72';break;
			case 256:return '#edcc61';break;
			case 512:return '#9c0';break;
			case 1024:return '#33b5e5';break;
			case 2048:return '#09c';break;
			case 4096:return '#a6c';break;
			case 8192:return '#93c';break;
		}

		return '#000'
	},
	//传入单元的值返回值对应文字的颜色
	getNumberColor:function (num){
		if( num <=4 ){
			return '#776e65'
		}
		return '#fff'

	},
	//是否还有空间？对每个格子进行判断，还有为0的格子返回假，没有返回真
	nospace(board){
		for (var i = 0; i <4; i++) {
			for (var j = 0; j <4; j++) {
				if(board[i][j] == 0){
					return false
				}
			}
		}
		return true;
	}
}