const fetch = require('node-fetch');

async function showGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  return await response.json();
}

showGithubUser('mattyao1984')
  .then(user => {
    console.log('user in promise chain: ', user);
  })