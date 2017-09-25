function curr_pos(){
    if (window.pageYOffset !== undefined)
        return window.pageYOffset;
    else
        return 0;
}

function tar_pos(tar_id){
    var tar = document.getElementById(tar_id);
//    alert("Coordinates: " + rect.left + "px, " + rect.top + "px");
    var top_pos = tar.offsetTop;
    console.log(top_pos);
    if(top_pos !== undefined) return top_pos;
    else return 0;
}

/////////////////////////////////////////////////////
//smooth scroll start
/////////////////////////////////////////////////////
function scroll_win_profile(){
    console.log("scrolling profile");
    var tar_id = "the_profile";
    console.log(tar_id);
    var startY = curr_pos();
    console.log(startY);
    var tarY = tar_pos(tar_id);
    console.log(tarY);
    if (tarY < startY){
        scroll_up(startY, tarY);
    }
    else if(tarY > startY){
        scroll_down(startY, tarY);
    }
    return;
}

function scroll_win_works(){
    console.log("scrolling works");
    var tar_id = "works";
    var startY = curr_pos();
    var tarY = tar_pos(tar_id);
    if (tarY < startY){
        scroll_up(startY, tarY);
    }
    else if(tarY > startY){
        scroll_down(startY, tarY);
    }
    return;
}


function scroll_win_albums(){
    console.log("scrolling albums");
    var tar_id = "albums";
    var startY = curr_pos();
    var tarY = tar_pos(tar_id);
    if (tarY < startY){
        scroll_up(startY, tarY);
    }
    else if(tarY > startY){
        scroll_down(startY, tarY);
    }
    return;
}

function scroll_win_lives(){
    console.log("scrolling lives");
    var tar_id = "lives";
    var startY = curr_pos();
    var tarY = tar_pos(tar_id);
    if (tarY < startY){
        scroll_up(startY, tarY);
    }
    else if(tarY > startY){
        scroll_down(startY, tarY);
    }
    return;
}


function scroll_up(startY, tarY){
    console.log("scrolling up");
    var distance = startY-tarY;
    var times = distance / 40;
    var curY = startY;
    var i = 0;
    var nextY = curY;
    for (curY = startY + 40; curY > tarY; curY-=40){
        //console.log(nextY);
        setTimeout("window.scrollTo(0, "+nextY+")", i * 10);
        i++;
        nextY -= 40;
        if(nextY < tarY) nextY = tarY;
    }
}

function scroll_down(startY, tarY){
    console.log("scrolling down");
    console.log(tarY);
    var distance = tarY-startY;
    var times = distance / 40;
    var curY = startY;
    var i = 0;
    var nextY = curY;
    for (curY = startY - 40; curY < tarY; curY+=40){
        console.log(nextY);
        setTimeout("window.scrollTo(0, "+nextY+")", i * 10);
        i++;
        nextY += 40;
        if(nextY > tarY) nextY = tarY;
    }
}
/////////////////////////////////////////////////////
//smooth scroll end
/////////////////////////////////////////////////////


/////////////////////////////////////////////////////
//resizing navibar start
/////////////////////////////////////////////////////
function change_nav_size(){
    console.log("resizing!");
    var currY = curr_pos();
    var navibar = document.getElementById("global-nav");
    if (currY < 50){
        navibar.classList.add("navi_bar"); 
        navibar.classList.remove("navi_bar_s");    
    }
    else{
        navibar.classList.remove("navi_bar");
        navibar.classList.add("navi_bar_s");
    }
}

/////////////////////////////////////////////////////
//resizing navibar end
/////////////////////////////////////////////////////


/////////////////////////////////////////////////////
//pos indicator start
/////////////////////////////////////////////////////
function pos_indicator(){
    var currY = curr_pos();
    //console.log(currY);
    if (currY < works_pos){
        profile.style.background = '#f4fffd';        
        profile.style.color = '#19264d';
        works.style.background = '#2280c3';
        works.style.color = '#e5ffff';
        albums.style.background = '#2280c3';
        albums.style.color = '#e5ffff';
        lives.style.background = '#2280c3';
        lives.style.color = '#e5ffff';
        return;
    }
    else if (currY < albums_pos){
        profile.style.background = '#2280c3';
        profile.style.color = '#e5ffff';
        works.style.background = '#f7fbfa';
        works.style.color = '#19264d';
        albums.style.background = '#2280c3';          
        albums.style.color = '#e5ffff';
        lives.style.background = '#2280c3';
        lives.style.color = '#e5ffff';
        return;
    }
    else if (currY < lives_pos){
        profile.style.background = '#2280c3';
        profile.style.color = '#e5ffff';
        works.style.background = '#2280c3';
        works.style.color = '#e5ffff';
        albums.style.background = '#BDC4BD';        
        albums.style.color = '#19264d';
        lives.style.background = '#2280c3';
        lives.style.color = '#e5ffff';
        return;
    }
    else {
        profile.style.background = '#2280c3';
        profile.style.color = '#e5ffff';
        works.style.background = '#2280c3';
        works.style.color = '#e5ffff';
        albums.style.background = '#2280c3';        
        albums.style.color = '#e5ffff';
        lives.style.background = '#eefaff';
        lives.style.color = '#19264d';
    }
    
}

/////////////////////////////////////////////////////
//pos indicator end
/////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////

function preDiv(){
    plusDivs(-1);
}
function nextDiv(){
    plusDivs(1);
}

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    console.log("showdivs");
    console.log(slideIndex);
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (slideIndex > (x.length - 1)) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = x.length - 1}
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
        console.log(slideIndex);

    x[slideIndex].style.display = "block";
}
///////////////////////////////////////////////////////////////////


var profile = document.getElementById("profile_nav");
profile.addEventListener("click", scroll_win_profile);
var profile_pos = document.getElementById("the_profile").offsetTop;
//profile.style.background = 'red';

var works = document.getElementById("works_nav");
works.addEventListener("click", scroll_win_works);
var works_pos = document.getElementById("works").offsetTop;

var albums = document.getElementById("albums_nav");
albums.addEventListener("click", scroll_win_albums);
var albums_pos = document.getElementById("albums").offsetTop;

var lives = document.getElementById("lives_nav");
lives.addEventListener("click", scroll_win_lives);
var lives_pos = document.getElementById("lives").offsetTop;

window.addEventListener("scroll", change_nav_size);
window.addEventListener("scroll", pos_indicator);


var slideIndex = 1;
showDivs(slideIndex);

var prev = document.getElementById("prev");
var next = document.getElementById("next");

prev.addEventListener("click", preDiv);
next.addEventListener("click", nextDiv);




var k_modal_a = document.getElementById("koitsu_a");
var close_a = document.getElementById("close_a");
var trigger_a = document.getElementById("trigger_a");

close_a.addEventListener("click", function(){
    k_modal_a.style.display = "none";}
)
trigger_a.addEventListener("click", function(){
    k_modal_a.style.display = "inline-block";}
)
window.addEventListener("click", function(event){
    if(event.target == k_modal_a)
        k_modal_a.style.display = "none";}
)


var k_modal_b = document.getElementById("koitsu_b");
var close_b = document.getElementById("close_b");
var trigger_b = document.getElementById("trigger_b");

close_b.addEventListener("click", function(){
    k_modal_b.style.display = "none";}
)
trigger_b.addEventListener("click", function(){
    k_modal_b.style.display = "inline-block";}
)
window.addEventListener("click", function(event){
    if(event.target == k_modal_b)
        k_modal_b.style.display = "none";}
)


var k_modal_c = document.getElementById("koitsu_c");
var close_c = document.getElementById("close_c");
var trigger_c = document.getElementById("trigger_c");

close_c.addEventListener("click", function(){
    k_modal_c.style.display = "none";}
)
trigger_c.addEventListener("click", function(){
    k_modal_c.style.display = "inline-block";}
)
window.addEventListener("click", function(event){
    if(event.target == k_modal_c)
        k_modal_c.style.display = "none";}
)

var k_modal_d = document.getElementById("koitsu_d");
var close_d = document.getElementById("close_d");
var trigger_d = document.getElementById("trigger_d");

close_d.addEventListener("click", function(){
    k_modal_d.style.display = "none";}
)
trigger_d.addEventListener("click", function(){
    k_modal_d.style.display = "inline-block";}
)
window.addEventListener("click", function(event){
    if(event.target == k_modal_d)
        k_modal_d.style.display = "none";}
)
