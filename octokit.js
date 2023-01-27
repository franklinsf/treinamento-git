const { Octokit } = require("@octokit/core");

async function init() {
    // Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
    const octokit = new Octokit({ auth: `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` });

    // const response = await octokit.request("GET /users/{user}/repos", {
    // user: "franklinsf",
    // type: "public",
    // });

    const response = await octokit.request('GET /repos/{owner}/{repo}/branches/{branch}/protection', {
        owner: 'franklinsf',
        repo: 'treinamento-git',
        branch: 'main'
      })

    console.log('Response 2: ',response)
}

init()