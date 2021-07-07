var move = 1;
var play = true;
$('table tr td').click(function(){
    if($(this).text()== "" && play){
        if( (move%2)==1){
            $(this).append("X");
            $(this).css('color', '#61892f');
        }else {
            $(this).append('O');
            $(this).css('color', '#e85a4f')
        }
        move++;
        if (findWinner () != -1 && findWinner() != ""){
            if(findWinner()=="X"){
                $('body').append('<div class="winner"><span>Winner</span>X</div>');
                $('body').append('<button onclick="location.reload()">Play Again </button>');
                $('.winner').css('background', '#61892f');
                $('button').css('color','#61892f');
            }else {
                $('body').append('<div class="winner"><span>Winner</span> O </div>');
                $('body').append('<button onclick="location.reload()">Play Again </button>');
                $('.winner').css('background-color', '#e85a4f');
                $('button').css('color','#e85a4f');
            }
            play = false;
        }
    }
})
function findWinner(){
    rc1 = $('table tr:nth-child(1) td:nth-child(1)').text();
    rc2 = $('table tr:nth-child(1) td:nth-child(2)').text();
    rc3 = $('table tr:nth-child(1) td:nth-child(3)').text();
    rc4 = $('table tr:nth-child(2) td:nth-child(1)').text();
    rc5 = $('table tr:nth-child(2) td:nth-child(2)').text();
    rc6 = $('table tr:nth-child(2) td:nth-child(3)').text();
    rc7 = $('table tr:nth-child(3) td:nth-child(1)').text();
    rc8 = $('table tr:nth-child(3) td:nth-child(2)').text();
    rc9 = $('table tr:nth-child(3) td:nth-child(3)').text();
    // Check rows
    if((rc1 == rc2) && (rc2 == rc3)){
        return rc3;
    }else if ((rc4 == rc5) && (rc5 == rc6)){
        return rc6;
    }else if ((rc7 == rc8) && (rc8 == rc9)){
        return rc9;
    }
    // Check columns
    else if ((rc1 == rc4) && (rc4 == rc7)){
        return rc7;
    }else if ((rc2 == rc5) && (rc5 == rc8)){
        return rc8;
    }else if ((rc3 == rc6) && (rc6 == rc9)){
        return rc9;
    }
    // ckeck diagonals
    else if (( rc1 == rc5) && (rc5 == rc9)){
        return rc9;
    }else if ((rc3 == rc5) && (rc5 == rc7)){
        return rc7;
    }
    //No Winner
    return -1;
}