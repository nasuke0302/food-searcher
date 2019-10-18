import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer tjObuqIYh_6ri7mrk9Wg7lJ8k6ja-h1W_2YfnVeR9__qIqvxgzMc5cBE8LiS7PC0RxFuhZoeOBYKBHczbVwDr3y57oriYZiJqJQcso_lkgEoD1AZFdVBTjA4b7KoXXYx`
    }
});

