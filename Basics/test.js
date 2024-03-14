// Specify the API endpoint URL
const apiEndpoint = 'https://travel.paytm.com/api/trains/v1/status?vertical=train&client=web&is_genuine_pnr_web_request=1&pnr_number=2107568301';

// Fetch data from the API using the 'fetch' function
fetch(apiEndpoint)
  .then(response => {
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Handle the fetched data
    console.log('Fetched data:', data);
  })
  .catch(error => {
    // Handle errors during the fetch
    console.error('Fetch error:', error);
  });