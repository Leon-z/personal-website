var support = {
    /**
     * 计算出方块距离顶端的位置
     * @param  {[num]} i [横坐标]
     * @param  {[num]} j [纵坐标]
     * @return {[num]}   [方块距离顶端的距离]
     */
    getPosTop: function(i, j) {

        return 120 * i + 20
    },
    /**
     * 计算出方块距离左侧的位置
     * @param  {[num]} i [横坐标]
     * @param  {[num]} j [纵坐标]
     * @return {[num]}   [方块距离左侧的距离]
     */
    getPosLeft: function(i, j) {

        return 120 * j + 20
    },
    //传入单元的值返回值对应背景的颜色
    getNumberBackgroundColor: function(num) {
        switch (num) {
            case 2:
                return '#eee4da';
                break;
            case 4:
                return '#ede0c8';
                break;
            case 8:
                return '#f2b179';
                break;
            case 16:
                return '#f59563';
                break;
            case 32:
                return '#f67c5f';
                break;
            case 64:
                return '#f65e3b';
                break;
            case 128:
                return '#edcf72';
                break;
            case 256:
                return '#edcc61';
                break;
            case 512:
                return '#9c0';
                break;
            case 1024:
                return '#33b5e5';
                break;
            case 2048:
                return '#09c';
                break;
            case 4096:
                return '#a6c';
                break;
            case 8192:
                return '#93c';
                break;
        }

        return '#000'
    },
    //传入单元的值返回值对应文字的颜色
    getNumberColor: function(num) {
        if (num <= 4) {
            return '#776e65'
        }
        return '#fff'

    },
    //是否还有空间？对每个格子进行判断，还有为0的格子返回假，没有返回真
    nospace(board) {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (board[i][j] == 0) {
                    return false
                }
            }
        }
        return true;
    },
    //判断可否向左移动
    canMoveLeft(board) {

        for (var i = 0; i < 4; i++) {
            for (var j = 1; j < 4; j++) { //最左边一列无法再往左，所以从第二列开始（j从1开始）
                if (board[i][j] != 0) {
                    if (board[i][j - 1] == 0 || board[i][j - 1] == board[i][j]) {
                        
                        return true
                    }
                }
            }
        }
        return false
    },
    //判断可否向上移动
    canMoveUp(board) {

        for (var i = 1; i < 4; i++) {
            for (var j = 0; j < 4; j++) { //最上边一列无法再往上，所以从第二行开始（i从1开始）
                if (board[i][j] != 0) {
                    if (board[i - 1][j] == 0 || board[i - 1][j] == board[i][j]) {
                        
                        return true
                    }
                }
            }
        }
        return false
    },
    //判断可否向右移动
    canMoveRight(board) {

        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) { //最左边一列无法再往右，所以到第3列结束
                if (board[i][j] != 0) {
                    if (board[i][j + 1] == 0 || board[i][j + 1] == board[i][j]) {
                        return true
                    }
                }
            }
        }
        return false
    },
    //判断可否向下移动
    canMoveDown(board) {

        for (var i = 0; i < 3; i++) {

            for (var j = 1; j < 4; j++) { //最左边一列无法再往左，所以从第二列开始（j从1开始）
                if (board[i][j] != 0) {
                    if (board[i + 1][j] == 0 || board[i + 1][j] == board[i][j]) {
                        return true
                    }
                }
            }
        }
        return false
    },
    //判断水平两点之间是否可移动
    noBlockHorizontal(row, col1, col2, board) {
        for (var i = col1 + 1; i < col2; i++) {
            if (board[row][i] != 0) {
                return false
            }
        }
        return true
    },
    noBlockVertical(col,row1,row2,board){
        for (var i = row1 + 1; i < row2; i++) {
            if (board[i][col] != 0) {
                return false
            }
        }
        return true
    }
}
