const fetch = require('node-fetch');

class GithubApiClient {
  async showUserAndRepos(handle) {
    const userPromise = await fetch(`https://api.github.com/users/${handle}`);
    const reposPromise = await fetch(`https://api.github.com/users/${handle}/repos`);

    return {
      user: await userPromise.json(),
      repos: await reposPromise.json()
    }
  }
}

(async () => {
  const client = new GithubApiClient();
  const response = await client.showUserAndRepos('mattyao1984');
  console.log('response: ', response);
})();
