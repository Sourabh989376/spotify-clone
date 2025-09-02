function togglePlay(audioId, btnElement) {
    const currentAudio = document.getElementById(audioId);

    // Pause all other audio
    const allAudios = document.querySelectorAll("audio");
    allAudios.forEach(audio => {
        if (audio.id !== audioId) {
            audio.pause();
            audio.currentTime = 0;
            const otherBtn = document.querySelector(`[onclick*="${audio.id}"]`);
            if (otherBtn) otherBtn.innerHTML = '<i class="fa fa-play"></i>';
        }
    });

    // Toggle current audio
    if (currentAudio.paused) {
        currentAudio.play();
        btnElement.innerHTML = '<i class="fa fa-pause"></i>';
    } else {
        currentAudio.pause();
        btnElement.innerHTML = '<i class="fa fa-play"></i>';
    }
}
