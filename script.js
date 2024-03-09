// This code is for right image sliding window
$(document).ready(function () {
    $('.carousel').carousel();
});

// This code is for bottom left trailer video play and pause
function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    video.pause();
    trailer.classList.toggle('active');
}

//This is use for change the background
function changeBg(bg, title) {
    const banner = document.querySelector('.movie-deatils');
    const contents = document.querySelectorAll('.poster');  
    
    banner.style.background = `url("images/movie/${bg}")`; 
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
    });

    contents.forEach(content => {
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}
