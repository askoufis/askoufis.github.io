// eslint-disable no-console
import path from 'path';
import { publish } from 'gh-pages';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const packageJson = require('../package.json');

const deployDirectory = path.join(path.dirname(import.meta.url), '../dist');
console.log(`Deploying files from ${deployDirectory}`);

const repoUrl = packageJson.repository.url;
if (!repoUrl) {
  throw new Error('Repo URL not found in package.json');
}

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!GITHUB_TOKEN) {
  throw new Error('GITHUB_TOKEN not found');
}

const createGitTag = () => {
  const date = new Date();
  const formattedDateParts = new Intl.DateTimeFormat('en-AU', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    second: 'numeric',
    minute: 'numeric',
    hour: 'numeric',
    hourCycle: 'h24',
  }).formatToParts(date);

  return formattedDateParts
    .filter(({ type }) => type !== 'literal')
    .map(({ value }) => value)
    .join('');
};

const tokenRegex = new RegExp(GITHUB_TOKEN, 'g');

const log = (message) => {
  console.log(message.replace(tokenRegex, '[GITHUB_TOKEN]'));
};

const publishConfig = {
  repo: repoUrl.replace('https://', `https://${GITHUB_TOKEN}@`),
  logger: log,
  tag: createGitTag(),
};

const publishCallback = (err) => {
  if (err) {
    log('Deployment error');
    log(JSON.stringify(err));
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  } else {
    log('Deployment complete!');
  }
};

publish(deployDirectory, publishConfig, publishCallback);
