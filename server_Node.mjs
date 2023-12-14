import express from 'express';
import { json } from 'express';
import cors from 'cors'; // Import the cors package

const app = express();
const port = 3000;

app.use(json());

// Enable CORS
app.use(cors());

// Define your routes here

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


app.post('/api/data', json(), (req, res) => {
    // Handle JSON data in the request body here
});

app.post('/api/data', json(), (req, res) => {
    const jsonData = req.body; // Access the JSON data from the request body
    // Process jsonData or perform any necessary operations
    res.json({ message: 'Data received and processed' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

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
