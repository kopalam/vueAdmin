import request from '@/utils/request'

export function group(handle) {
  return request({
    url: '/admin/getRules',
    method: 'post',
    data: {
      handle
    }
  })
}

