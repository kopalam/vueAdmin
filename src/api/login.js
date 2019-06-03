import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/admin/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/admin/userInfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  debugger
  return request({
    url: '/admin/logOut',
    method: 'get'
  }).then(res => {
    console.log(res)
  })
}

export function test() {
  return request({
    url: '/admin/test',
    method: 'get'
  })
}
