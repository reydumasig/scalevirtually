const Podio = require('podio-js');

// Set up authentication using your Podio API key and secret
const podio = new Podio({
  authType: 'client',
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET'
});

// Authenticate with Podio's API
podio.authenticateWithApp('YOUR_APP_ID', 'YOUR_APP_TOKEN')
  .then(() => {
    // Fetch all items in the app
    return podio.request('GET', `/item/app/YOUR_APP_ID/`);
  })
  .then(response => {
    // Display the items in the data container
    const dataContainer = document.getElementById('data-container');
    const items = response.body.items;
    items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.textContent = `Item ${item.item_id}: ${item.title}`;
      dataContainer.appendChild(itemDiv);
    });
  })
  .catch(error => {
    // Handle any errors that occur
    console.error(error);
  });
