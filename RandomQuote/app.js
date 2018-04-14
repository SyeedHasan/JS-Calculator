quotes = [

    ["It’s the people in power who pass power on to other people.", "Steve Wozniak"],
    ["Whatever the mind of man can conceive and believe, it can achieve.", "Napolean Hill"],
    ["Strive not to be a success, but rather to be of value", "Albert Einstein"],
    ["You miss 100% of the shots you don’t take. ", "Wayne Gretzky"],
    ["I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.", "Michael Jordan"],
    ["Strive not to be a success, but rather to be of value", "Albert Einstein"],
    ["The most difficult thing is the decision to act, the rest is merely tenacity. ", "Amelia Earheart"],
    ["Every strike brings me closer to the next home run.", "Babe Ruth"],
    ["Definiteness of purpose is the starting point of all achievement.", "W. Clement Stone"],
    ["Life isn't about getting and having, it's about giving and being.", "Kevin Kruse"],
    ["We become what we think about.", "Earl Nightingale"],
    ["The most common way people give up their power is by thinking they don’t have any.", "Alice Walker"]
    ["Every child is an artist.  The problem is how to remain an artist once he grows up.", "Pablo Picasso"],
    ["You can never cross the ocean until you have the courage to lose sight of the shore.", "Christopher Columbus"],
    ["Either you run the day, or the day runs you.", "Jim Rohn"],
    ["The two most important days in your life are the day you are born and the day you find out why.", "Mark Twain"],
    ["The best revenge is massive success.", "Frank Sinatra"],
    ["Whether you think you can or you think you can’t, you’re right. ", "Henry Ford"],
    ["People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily. ", "Zig Ziglar"],
    ["Life shrinks or expands in proportion to one's courage. ", "Anais Nin"],
    ["There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", "Aristotle"],
    ["Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.", "Jesus"]
    ["The only person you are destined to become is the person you decide to be. ", "Ralph Waldo"],
    ["Go confidently in the direction of your dreams.  Live the life you have imagined.", "Henry David Thoreau"],
    ["When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.", "Erma Bombeck"],
    ["Believe you can and you’re halfway there.", "Theodore Roosevelt"]
];

var quote = document.getElementById("mainQuote");
var button = document.getElementById("genQuote");
var author = document.getElementById("author");

var previousQuote; //to keep track if the previous one is repeated again

button.addEventListener("click", function () {
    var randomNum = Math.floor(Math.random() * quotes.length);

    while(previousQuote == randomNum) {
        randomNum = Math.floor(Math.random() * quotes.length)
    }

    previousQuote = randomNum;


    quote.innerHTML = '\" ' + quotes[randomNum][0] + ' \"';
    author.innerHTML = "- " + quotes[randomNum][1];
})