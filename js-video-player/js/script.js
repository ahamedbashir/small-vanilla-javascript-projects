const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// play and pause
const toggleVideoStatus = () => {
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
}

// update play/pause icon
const updatePlayIcon = () => {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }
    else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

// update progress and timestamp
const updateProgress = () => {
    progress.value = (video.currentTime / video.duration) * 100;
    let currTime = video.currentTime;
    let hrs = Math.floor(video.currentTime / 3600);
    if (hrs < 10) {
        hrs = '0' + String(hrs);
    }
    currTime %= 3600;

    let mins = Math.floor(currTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }
    let secs = Math.floor(currTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${hrs}:${mins}:${secs}`;
}

// set video time to progress
const setVideoProgress = () => {
    video.currentTime = (+ progress.value * video.duration) / 100;
}

// stop video
const stopVideo = () => {
    video.currentTime = 0;
    video.pause();
}

// event listener
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);


play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);