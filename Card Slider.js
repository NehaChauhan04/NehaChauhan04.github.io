document.getElementById('Next').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('FormList').scrollLeft += widthItem;
}

document.getElementById('Previous').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('FormList').scrollLeft -= widthItem;
}