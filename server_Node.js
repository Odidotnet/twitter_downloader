// import fetch from 'node-fetch';

const fetch = require('node-fetch');
const express = ('express');
const app = express();
const port = 3000;

app.use(express.json());

// Define a route to fetch tweet data
app.get('/fetch-tweet', async (req, res) => {
    const tweetLink = req.query.tweetLink;

    try {
        // Fetch tweet data from the Twitter API
        const response = await fetch(`https://api.twitter.com/2/tweets?ids=${tweetLink}`, {
            headers: {
                "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAALCUqQEAAAAASWzyY0Mfhh7DG8LdNGxh7VpetiM%3DtLvWFaKd3vNz5U74mnwHDdVWjU9nWo3IgKyub8v174LY8s1Ruw",
            },
        });

        if (response.ok) {
            const tweetData = await response.json();
            // Extracting the video link from tweetData (modify this part based on the actual JSON structure)
            const mediaUrl = tweetData.data[0].media[0].url;

            res.json({ media_url: mediaUrl });
        } else {
            console.error("Error Fetching Video from Twitter API");
            res.status(500).json({ error: "Error fetching tweet data" });
        }
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({ error: "An error occurred" });
    }
});

app.listen(port, () => {
    console.log('Server is running on port', port);
});

const Twit = require('twit');

// Your Twitter API credentials (replace placeholders with your actual keys)
const T = new Twit({
  consumer_key: 'hKvN132j9AnpMkMddW7vKz9G8u62q8vmD33qij3cF9U5rKkkBw',
  consumer_secret: 'gFEyFmWDTgg8WllLZpB02o6S1',
  access_token: '1580773934244454400-osNV2opzgpiupbzcvyeNB8Ic9jA5sD',
  access_token_secret: 'S6Fgrv9Fj7MUvzXS7Jb7fP0b2rmFOa4jb3GYmm6nKoSsb',
});

// Example: Retrieve and print your own timeline
T.get('statuses/home_timeline', { count: 10 }, (err, data, response) => {
  if (!err) {
    data.forEach(tweet => {
      console.log(tweet.text);
    });
  } else {
    console.error(err);
  }
});

