import * as core from '@actions/core';
import * as gh from '@actions/github';

const github_token = core.getInput('GITHUB_TOKEN');
const context = gh.context;

async function main() {
	if (!context.payload.pull_request) {
		core.setFailed('No pull request found.');
		return
	}
	
	const octokit = gh.getOctokit(github_token);

	context.payload.pull_request.body
	
	await octokit.rest.issues.createComment({
		...context.repo,
		issue_number: context.payload.pull_request.number,
		body: 'test',
	});
}

await main()