import axios from 'axios';

export default class RestClient {

  public static async get(url: string, data?: any) {
    return axios.get(`/${url}`, {
      data,
    });
  }

  public static post(url: string, data?: any) {
    return axios.post(`/${url}`, {data});
  }

  public static delete(url: string, data?: any) {
    return axios.delete(`/${url}`, {data});
  }

  public static update(url: string, data?: any) {
    return axios.put(`/${url}`, {data});
  }

}
