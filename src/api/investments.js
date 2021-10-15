import apiUrl from '../apiConfig'
import axios from 'axios'

export const createInvestment = (data, user) => {
  return axios({
    url: apiUrl + '/investments/',
    method: 'post',
    data: { investment: data },
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const indexInvestments = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/investments',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const showInvestment = (id, user) => {
  return axios({
    url: apiUrl + '/investments/' + id,
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const deleteInvestment = (id, user) => {
  return axios({
    url: apiUrl + '/investments/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const updateInvestment = (data, id, user) => {
  return axios({
    url: apiUrl + `/investments/${id}/`,
    method: 'patch',
    data: { investment: data },
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
