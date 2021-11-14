import axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios'

const successHandler = (response: AxiosResponse) => response.data
const requestHandler = async (request: AxiosRequestConfig) => {
  if (!(request.headers as AxiosRequestHeaders)['Content-Type']) {
    (request.headers as AxiosRequestHeaders)['Content-Type'] = 'application/json'
  }
  return request
}
axios.interceptors.request.use(requestHandler)

const errorHandler = (reject: (error: AxiosError) => void) => (error: AxiosError) => {
  return reject(error)
}

export const http = <T>(options: AxiosRequestConfig, responseMapper = successHandler): Promise<T> => {
  return new Promise((resolve, reject) => {
    const { url, method, data, headers, params, responseType, timeout } = options
    axios.request({
      url,
      method,
      data,
      headers,
      params,
      responseType,
      timeout: timeout || 15000
    }).then(res => resolve(responseMapper(res)))
      .catch(errorHandler(reject))
  })
}
