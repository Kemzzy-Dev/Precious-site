        let currentSlide = 0;
        const slides = document.querySelectorAll(".banner");
        const slideInterval = 5000; // Time in milliseconds between slide transitions
        let slideTimer;

        function showSlide(n) {
            if (n >= slides.length) {
                currentSlide = 0;
            }
            if (n < 0) {
                currentSlide = slides.length - 1;
            }

            slides.forEach(slide => {
                slide.style.display = "none";
            });
            slides[currentSlide].style.display = "block";
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
            resetSlideTimer();
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
            resetSlideTimer();
        }

        function resetSlideTimer() {
            clearTimeout(slideTimer);
            slideTimer = setTimeout(nextSlide, slideInterval);
        }

        // Show the first slide initially
        showSlide(currentSlide);

        // Start automatic slide transitions
        slideTimer = setTimeout(nextSlide, slideInterval);

        // Pause slide transitions on hover
        slides.forEach(slide => {
            slide.addEventListener("mouseenter", () => {
                clearTimeout(slideTimer);
            });
            slide.addEventListener("mouseleave", () => {
                slideTimer = setTimeout(nextSlide, slideInterval);
            });
        })