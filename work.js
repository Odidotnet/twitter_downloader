// document.getElementById("downLoader").addEventListener("click", async function (event) {
//     event.preventDefault();
//     const TweetLink = document.getElementById("Tweet-Link").value;
//     const url = document.getElementById("url");

//     try {
//         // Send a request to your server to fetch tweet data
//         const response = await fetch(`/fetch-tweet?tweetLink=${TweetLink}`);

//         if (response.ok) {
//             const tweetData = await response.json();
//             const videoUrl = tweetData.media_url;

//             const a = document.getElementById("a");
//             a.href = videoUrl;
//             a.download = "video.mp4";
//             a.textContent = "Download Video";

//             url.innerHTML = "";
//             url.appendChild(a);
//         } else {
//             console.error("Error Fetching Video from source");
//         }
//     } catch (error) {
//         console.error("An error occurred:", error);
//     }
// });


document.getElementById("downLoader").addEventListener("click", async function (event) {
    event.preventDefault();
    const TweetLink = document.getElementById("Tweet-Link").value;

    try {
        // Send a request to your server to fetch tweet data
        const response = await fetch('http://127.0.0.1:3000/fetch-tweet?tweetLink=' + TweetLink);

        // const response = await fetch(`/fetch-tweet?tweetLink=${TweetLink}`);

        if (response.ok) {
            const tweetData = await response.json();
            const videoUrl = tweetData.media_url;

            const a = document.getElementById("a");
            a.href = videoUrl;
            a.download = "video.mp4";
            a.textContent = "Download Video";

            const url = document.getElementById("url");
            url.innerHTML = "";
            url.appendChild(a);
        } else {
            console.error("Error Fetching Video from source");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
});

