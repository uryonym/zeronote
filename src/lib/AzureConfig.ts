export interface AzureConfig {
  appId: string
  redirectUri: string
  scopes: string[]
}

export const config: AzureConfig = {
  appId: '3203ee46-d08f-421f-9233-160cfa27a931',
  redirectUri: 'http://localhost:3000',
  scopes: ['user.read', 'notes.readwrite', 'notes.create']
}
