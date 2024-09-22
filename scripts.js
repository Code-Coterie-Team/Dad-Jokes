const jokeElement = document.querySelector('.joke');
const jokeBtn = document.querySelector('.btn');

async function getJoke() {
    try {
    
        jokeBtn.disabled = true;
        jokeBtn.textContent = 'Loading...';

        const response = await fetch('https://icanhazdadjoke.com/slack');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        jokeElement.textContent = data.attachments[0].text;
    } catch (error) {
        console.error('Error fetching joke:', error);
        jokeElement.textContent = 'Oops! Failed to fetch a joke. Please try again.';
    } finally {
        jokeBtn.disabled = false;
        jokeBtn.textContent = 'Get Another Joke';
    }
}


// initial joke when the page loads
getJoke();