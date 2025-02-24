
    document.addEventListener("DOMContentLoaded", function () {
        // Array of background images
        const backgrounds = [
            "images/image.png",
            "images/gs.png",
            "images/football.png",
            "images/vaccine.png"
        ];

        // Array of headlines and descriptions
        const headlines = [
            "Breaking News: AI Takes Over the Tech World",
            "Global Summit 2025: Leaders Discuss Future",
            "Champions League Final: The Biggest Game!",
            "New Vaccine Breakthrough: A Hope for All"
        ];

        const descriptions = [
            "The rapid growth of artificial intelligence is reshaping industries worldwide.",
            "World leaders gather to discuss climate change, economy, and new strategies.",
            "The most awaited football match of the year is finally here!",
            "Scientists develop a vaccine that promises better immunity and fewer side effects."
        ];

        let index = 0; // Track the current background and text

        function changeHeroContent() {
            index = (index + 1) % backgrounds.length; // Loop back to the first after last
            
            // Change background image
            document.querySelector(".hero").style.backgroundImage = `url('${backgrounds[index]}')`;

            // Change heading and description
            document.querySelector(".hero-content h1").textContent = headlines[index];
            document.querySelector(".hero-content p").textContent = descriptions[index];
        }

        // Change hero content every 5 seconds
        setInterval(changeHeroContent, 5000);
    });

