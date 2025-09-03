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

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const library = document.querySelector('.library');
    let isLibraryOpen = false;

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            isLibraryOpen = !isLibraryOpen;
            
            if (isLibraryOpen) {
                library.style.transform = 'translateX(0)';
                library.style.zIndex = '1001';
                mobileMenuBtn.innerHTML = '<i class="fa fa-times"></i>';
            } else {
                library.style.transform = 'translateX(-100%)';
                library.style.zIndex = '999';
                mobileMenuBtn.innerHTML = '<i class="fa fa-bars"></i>';
            }
        });
    }


    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            library.style.transform = 'translateX(0)';
            library.style.zIndex = 'auto';
            mobileMenuBtn.innerHTML = '<i class="fa fa-bars"></i>';
            isLibraryOpen = false;
        } else if (!isLibraryOpen) {
            library.style.transform = 'translateX(-100%)';
        }
    });
});