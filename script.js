document.addEventListener("DOMContentLoaded", function () {
    // Array of news objects
    const newsData = [
        {
            background: "images/image.png",
            headline: "Breaking News: AI Takes Over the Tech World",
            description: "The rapid growth of artificial intelligence is reshaping industries worldwide."
        },
        {
            background: "images/gs.png",
            headline: "Global Summit 2025: Leaders Discuss Future",
            description: "World leaders gather to discuss climate change, economy, and new strategies."
        },
        {
            background: "images/football.png",
            headline: "Champions League Final: The Biggest Game!",
            description: "The most awaited football match of the year is finally here!"
        },
        {
            background: "images/vaccine.png",
            headline: "New Vaccine Breakthrough: A Hope for All",
            description: "Scientists develop a vaccine that promises better immunity and fewer side effects."
        }
    ];

    let index = 0; // Track the current news item

    function changeHeroContent() {
        index = (index + 1) % newsData.length; 

        // Change background image
        document.querySelector(".hero").style.backgroundImage = `url('${newsData[index].background}')`;
        // Change heading and description
        document.querySelector(".hero-content h1").textContent = newsData[index].headline;
        document.querySelector(".hero-content p").textContent = newsData[index].description;
    }

    // Change hero content every 5 seconds
    setInterval(changeHeroContent, 5000);
});
