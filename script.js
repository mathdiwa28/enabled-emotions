// Arrays of videos and games
const upliftingVideos = [
    "https://www.youtube.com/embed/_d4zSb3OR7g", // Replace with your actual uplifting video URLs
    "https://www.youtube.com/embed/z4xF81HlQ5Y",
    "https://www.youtube.com/embed/NVH79ehGfY0",
];

const funVideos = [
    "https://www.youtube.com/embed/cE92gCGnOGE", // Replace with your actual fun video URLs
    "https://www.youtube.com/embed/wYabWWW7mX0",
    "https://www.youtube.com/embed/X_4EJZ4aors",
];

const breathingExercise = "🌬️ Breathing Exercise: Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds.";

const games = [
    "<iframe src='https://example.com/game1' frameborder='0' allowfullscreen></iframe>", // Replace with actual game URLs
    "<iframe src='https://example.com/game2' frameborder='0' allowfullscreen></iframe>",
];

// Function to get a random video or game from the provided array
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Show activities based on selected emotion
function showActivities(emotion) {
    const activityMessage = document.querySelector('.activity-message');
    const activitiesContainer = document.querySelector('.activities');

    // Clear previous activities
    activitiesContainer.innerHTML = '';

    switch (emotion) {
        case 'Happy':
            activityMessage.textContent = "🎈 Let's celebrate your happiness! Here's a fun video for you:";
            const funVideo = getRandomElement(funVideos);
            activitiesContainer.innerHTML += `<iframe src="${funVideo}" frameborder="0" allowfullscreen></iframe>`;
            activitiesContainer.innerHTML += `<h4>🎮 Play this game:</h4><div id="pacman-game" style="display: block;"><iframe id="pacmanGame" src="pacman.html" width="800" height="600" frameborder="0" allowfullscreen></iframe></div>`;
            activitiesContainer.innerHTML += `<button onclick="openFullscreen()">Go Full Screen</button>`; // Button for full screen
            break;

        case 'Sad':
            activityMessage.textContent = "🌈 It's okay to feel sad. Here's an uplifting video to help you:";
            const upliftingVideo = getRandomElement(upliftingVideos);
            activitiesContainer.innerHTML += `<iframe src="${upliftingVideo}" frameborder="0" allowfullscreen></iframe>`;
            break;

        case 'Angry':
            activityMessage.textContent = "😌 Take a deep breath. Try this breathing exercise:";
            activitiesContainer.innerHTML += `<div class="activity-item">${breathingExercise}</div>`;
            break;

        case 'Anxious':
            activityMessage.textContent = "🌼 When feeling anxious, practice slow breathing or watch a relaxing video.";
            activitiesContainer.innerHTML += `<div class="activity-item">${breathingExercise}</div>`;
            activitiesContainer.innerHTML += `<iframe src="https://www.youtube.com/embed/TTXcHEMfLb4" frameborder="0" allowfullscreen></iframe>`;
            break;
    }
}

// Function to enter full-screen mode
function openFullscreen() {
    const gameFrame = document.getElementById('pacmanGame');
    if (gameFrame.requestFullscreen) {
        gameFrame.requestFullscreen();
    } else if (gameFrame.mozRequestFullScreen) { // Firefox
        gameFrame.mozRequestFullScreen();
    } else if (gameFrame.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        gameFrame.webkitRequestFullscreen();
    } else if (gameFrame.msRequestFullscreen) { // IE/Edge
        gameFrame.msRequestFullscreen();
    }
}

// Emotion button event listeners
document.querySelector('.happy').addEventListener('click', () => showActivities('Happy'));
document.querySelector('.sad').addEventListener('click', () => showActivities('Sad'));
document.querySelector('.angry').addEventListener('click', () => showActivities('Angry'));
document.querySelector('.anxious').addEventListener('click', () => showActivities('Anxious'));
