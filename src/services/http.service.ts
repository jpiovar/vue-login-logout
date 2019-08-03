import { Vue } from 'vue-property-decorator';

// export class HttpMockService {
//   getMockData () {
//     return require('./../mocks/records.json')
//   }

//   get = (url:string) => {
//     const mockData = this.getMockData()
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(mockData)
//       }, 2000)
//     })
//   }
// }
export class HttpService {
//   serverURL = 'https://domain.com/api/orders';
    protocol = 'http';
    hostname = 'localhost';
    port = '3030';
    formedURL = `${this.protocol}://${this.hostname}:${this.port}/api/`;

  /** GET request
   * @param endpoint :string, endpoint name
   * @returns Promise<any>
  */
  public get (endpoint: string): Promise<any> {
    return Vue.axios.get(`${this.formedURL}${endpoint}`)
  }

  /** POST request
   * @param url :string, endpoint name
   * @param body : post body content
   * @returns Promise<any>
  */
  public post (endpoint: string, body: any): Promise<any> {
    return Vue.axios.post(`${this.formedURL}${endpoint}`, body)
  }
}
