// apiUrl will be either the production or development url defined
// in the apiConfig.js file
import apiUrl from '../apiConfig'
import axios from 'axios'

// Create Product Request
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

// Index request
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

// DELETE /products/:id
export const deleteProduct = (id, user) => {
  return axios({
    url: apiUrl + '/products/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

// PATCH /products/:id
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
