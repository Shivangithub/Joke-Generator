const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "How does a penguin build its house? Igloos it together!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Did you hear about the claustrophobic astronaut? He just needed a little space!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "How do you organize a space party? You planet!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What did one ocean say to the other ocean? Nothing, they just waved!",
    "Why don't some couples go to the gym? Because some relationships don't work out!"
  ];
  
  function generateJoke() {
    const jokeContainer = document.getElementById("joke");
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeContainer.textContent = jokes[randomIndex];
  }
  
  document.getElementById("getJokeBtn").addEventListener("click", generateJoke);
  