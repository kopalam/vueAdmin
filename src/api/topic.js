import request from '@/utils/request'

export function createdit(params) {
  return request({
    url: '/admin/creadeditTopic',
    method: 'post',
    data: {
      params
    }
  })
}

export function createType(name, handle) {
  return request({
    url: '/admin/createType',
    method: 'post',
    data: {
      name,
      handle
    }
  })
}
