// var heart=document.getElementsByClassName("heart");
var i;
function on_heart(i)
{
    document.getElementById("heart"+i).classList.add('heart_new');
}
function show()
{
    document.getElementById("inner_div").style.display='block';
    document.getElementById("inner_div").style.transition='1s ease-in-out';
}
function show_queue()
{
    document.getElementById("queue_block1").style.display='block';
}



