const fetch = require('node-fetch');

async function showGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const body = await response.json();

  if(response.status !== 200) {
    throw Error(body.message);
  }

  return body;
}

async function fetchGithubUser(handle) {
  try {
    const user = await showGithubUser(handle);
    console.log('user: ', user);
  } catch (err) {
    console.error('Error: ', err);
  }
}

fetchGithubUser('Idontexist-ok')