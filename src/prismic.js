import * as prismic from '@prismicio/client';

export const repositoryName = 'growther'; // Replace with your Prismic repo name

const accessToken = import.meta.env.PRISMIC_ACCESS_TOKEN;
const clientSecret = import.meta.env.PRISMIC_CLIENT_SECRET;
const repoName = import.meta.env.PRISMIC_REPO_NAME;
const apiEndpoint = `https://${repoName}.prismic.io/api/v2`;

export const createClient = () => {
  return prismic.createClient(apiEndpoint, {
    accessToken: accessToken,
    clientSecret: clientSecret,
  });
};
