export interface AzureConfig {
  appId: string
  redirectUri: string
  scopes: string[]
}

export const config: AzureConfig = {
  appId: '628001ff-baed-459b-aabe-a6846f761d4c',
  redirectUri: 'http://localhost:3000',
  scopes: ['user.read', 'notes.readwrite', 'notes.create']
}
