import fetch from 'node-fetch'

(async () => {
    const response = await fetch(
        'https://parseapi.back4app.com/classes/Usuniversitieslist_University?count=1&limit=3202',
        {
            headers: {
                'X-Parse-Application-Id': '6OHco8JSQp4s4FjxgA2JeoI0BOpEW01nhmLfGg9v', // This is your app's application id
                'X-Parse-REST-API-Key': 'r3a509OxXqRPfaXMQcs3fGQm9pE1NjJIcaKFVly2', // This is your app's REST API key
            }
        }
    );
    const data = await response.json(); // Here you have the data that you need
    console.log(JSON.stringify(data, null, 2));
})();