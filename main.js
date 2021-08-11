var count_num = document.getElementById('num_id').innerHTML;
var count_style = document.getElementById('num_id');

function remove() {    
    count_num--;
    document.getElementById('num_id').innerHTML = count_num;
    color_detection();
}
function add_num() {    
    count_num++;
    document.getElementById('num_id').innerHTML = count_num;
    color_detection();
}

function color_detection() {
    if(count_num > 0) {
        count_style.style.color = 'blue';
    } else if(count_num < 0) {
        count_style.style.color = 'red';    
    } else {
        count_style.style.color = 'black';    
    }
}
