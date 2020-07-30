import * as graph from '@microsoft/microsoft-graph-client'
import * as authService from './AuthService'
import { AuthProviderCallback, Client } from '@microsoft/microsoft-graph-client'
import {
  Notebook,
  OnenotePage,
  OnenoteResource,
  User
} from 'microsoft-graph'

class GraphService {
  async getUserInfo(): Promise<User> {
    const client = await this.getAuthClient()
    return await client.api('/me').get()
  }

  async getUserAvatar(): Promise<string> {
    const client = await this.getAuthClient()
    const avatar = await client.api('/me/photo/$value').version('beta').get()
    return (window.URL || window.webkitURL).createObjectURL(avatar)
  }

  async getNotebooks(): Promise<Notebook[]> {
    const client = await this.getAuthClient()
    const response = await client
      .api('/me/onenote/notebooks')
      .select('id,createdDateTime,displayName')
      .expand('sections($select=id,createdDateTime,displayName)')
      .orderby('displayName')
      .version('beta')
      .get()
    return response.value
  }

  async getPages(sectionId: string): Promise<OnenotePage[]> {
    const client = await this.getAuthClient()
    return await client
      .api('/me/onenote/sections/' + sectionId + '/pages')
      .select('id,createdDateTime,title')
      .orderby('title')
      .version('beta')
      .get()
  }

  async getNoteContent(pageId: string): Promise<OnenoteResource> {
    const client = await this.getAuthClient()
    return await client
      .api('/me/onenote/pages/' + pageId + '/content')
      .version('beta')
      .get()
  }

  private async getAuthClient(): Promise<Client> {
    const token = await authService.getToken()
    return graph.Client.init({
      authProvider: (done: AuthProviderCallback) => {
        done(null, token)
      }
    })
  }
}

const graphService = new GraphService()

export default graphService
