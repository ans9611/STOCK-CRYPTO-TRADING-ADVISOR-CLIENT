
import apiUrl from '../apiConfig'
import axios from 'axios'

// Create product Request
export const createProduct = (data, user) => {
  return axios({
    url: apiUrl + '/products/',
    method: 'post',
    data: { product: data },
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const indexProducts = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/products',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

// GET /products/:id
export const showProduct = (id, user) => {
  return axios({
    url: apiUrl + '/products/' + id,
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const deleteProduct = (id, user) => {
  return axios({
    url: apiUrl + '/products/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const updateProduct = (data, id, user) => {
  return axios({
    url: apiUrl + `/products/${id}/`,
    method: 'patch',
    data: { product: data },
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
