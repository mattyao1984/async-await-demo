const fetch = require('node-fetch');

async function fetchFromGithub(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  const response = await fetch(url);
  const body = await response.json();

  if(response.status !== 200) {
    throw Error(body.message);
  }

  return body;
}

async function showUserAndRepos(handle) {
  const [user, repos] = await Promise.all(
    [
      fetchFromGithub(`/users/${handle}`),
      fetchFromGithub(`/users/${handle}/repos`)
    ]
  );

  console.log('user: ', user.login);
  console.log('total repos: ', repos.length);
}

showUserAndRepos('mattyao1984');