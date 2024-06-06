document.addEventListener("DOMContentLoaded", function () {
    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");
    const newQuoteBtn = document.getElementById("new-quote-btn");
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");

    // Sample quotes
    const sampleQuotes = [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" }
    ];

    // Function to fetch a random quote
    function fetchRandomQuote() {
        const randomIndex = Math.floor(Math.random() * sampleQuotes.length);
        const quote = sampleQuotes[randomIndex];
        displayQuote(quote);
    }

    // Function to display quote
    function displayQuote(quote) {
        quoteText.textContent = `"${quote.text}"`;
        quoteAuthor.textContent = `- ${quote.author}`;
    }

    // Function to search quotes by author
    function searchQuotes(author) {
        const filteredQuotes = sampleQuotes.filter(quote => quote.author.toLowerCase().includes(author.toLowerCase()));
        if (filteredQuotes.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
            const quote = filteredQuotes[randomIndex];
            displayQuote(quote);
        } else {
            quoteText.textContent = "No quotes found for this author.";
            quoteAuthor.textContent = "";
        }
    }

    // Event listener for New Quote button
    newQuoteBtn.addEventListener("click", fetchRandomQuote);

    // Event listener for Search button
    searchBtn.addEventListener("click", function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== "") {
            searchQuotes(searchTerm);
        } else {
            quoteText.textContent = "Please enter an author name.";
            quoteAuthor.textContent = "";
        }
    });

    // Fetch a random quote on page load
    fetchRandomQuote();
});
