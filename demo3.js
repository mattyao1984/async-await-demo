const fetch = require('node-fetch');

class GithubApiClient {
  async showGithubUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    return await response.json();
  }
}

(async () => {
  const client = new GithubApiClient();
  const user = await client.showGithubUser('mattyao1984');
  console.log('user in async wrapper: ', user);
})();
