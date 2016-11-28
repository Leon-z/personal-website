var animation = {
    showNumWithAnimation: function(i, j, randNum) {

        var numberCell = $(`#number-cell-${i}-${j}`)

        numberCell.css('background-color', support.getNumberBackgroundColor(randNum));
        numberCell.css('color', support.getNumberColor(randNum));
        numberCell.text(randNum);

        numberCell.animate({
        	width:'100px',
        	height:'100px',
        	top:support.getPosTop(i, j),
        	left:support.getPosLeft(i, j)
        },200)
    },
    showMoveAnimation:function (fromx,fromy,tox,toy) {
    	var numberCell= $(`#number-cell-${fromx}-${fromy}`);
    	numberCell.animate({
        	top:support.getPosTop(tox, toy),
        	left:support.getPosLeft(tox, toy)
    	},200)
    }
}
