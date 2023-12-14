const Twit = require('twit');


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