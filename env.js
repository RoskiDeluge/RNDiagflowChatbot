export const dialogueFlow = {
  type: 'service_account',
  project_id: 'rndiagbot',
  private_key_id: process.env.FAQ_KEY_ID,
  private_key: process.env.FAQ_KEY,
  client_email: 'faqbot@rndiagbot.iam.gserviceaccount.com',
  client_id: '112398761636826928445',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/faqbot%40rndiagbot.iam.gserviceaccount.com',
};
