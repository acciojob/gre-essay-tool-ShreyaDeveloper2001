//your code here
// Get the textarea element and the h3 element
const evaluatedText = document.getElementById("evaluatedText");
const wordCount = document.getElementById("wordCount");

// Function to count words
function countWords() {
    const text = evaluatedText.value.trim();
    const words = text === "" ? 0 : text.split(/\s+/).length;
    return words;
}

// Function to update the word count
function updateWordCount() {
    const words = countWords();
    wordCount.textContent = words;
}

// Add an event listener to the textarea to update word count in real-time
evaluatedText.addEventListener("input", updateWordCount);

// Initial word count
updateWordCount();

