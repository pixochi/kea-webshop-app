import axios from 'axios';

export default class RestClient {

  public static async get(url: string, data?: any) {
    return axios.get(`api/${url}`, {
      data,
    });
  }

  public static post(url: string, data?: any) {
    return axios.post(`api/${url}`, data);
  }

  public static delete(url: string, data?: any) {
    return axios.delete(`api/${url}`, {data});
  }

  public static update(url: string, data?: any) {
    return axios.put(`api/${url}`, {data});
  }

}
