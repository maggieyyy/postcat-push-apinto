import { ApiData } from './shared/src/types/apiData'
import { Group } from './shared/src/types/group'
import { compareVersion } from './shared/src/utils/common'
import PcToOpenAPI from './shared/src/utils/Pc2OpenAPI'


export const sync_to_remote = async (data) => {
  const url = pc.getExtensionSettings?.('apinto.addr')  + '/api2/apis/import'
  const upstream = pc.getExtensionSettings?.('apinto.upstream')
  const group = pc.getExtensionSettings?.('apinto.group')
  const prefix = pc.getExtensionSettings?.('apinto.prefix')
  const secretKey = pc.getExtensionSettings?.('apinto.token')
  if (!( pc.getExtensionSettings?.('apinto.addr') )) {
    return {
      status: 1,
      message: '请先进入插件详情页设置 Apinto 控制台地址'
    }
  }
  if (!(secretKey)) {
    return {
      status: 1,
      message: '请先进入插件详情页设置配置密钥'
    }
  }
  if (!(upstream)) {
    return {
      status: 1,
      message: '请先进入插件详情页设置配置上游服务名'
    }
  }
  if (!(group)) {
    return {
      status: 1,
      message: '请先进入插件详情页设置配置分组 ID'
    }
  }

  let projectData = data
  if (compareVersion(data.version || '1.0.0', '1.12.0') < 0) {
    projectData = new PcToOpenAPI(projectData).data
  } else {
    const groups: any | Group[] = []
    const apis: ApiData[] = []
    let groupIndex = 1
    const flatData = (arr, groupID) => {
      arr.forEach((val) => {
        if (val.uri) {
          val.groupID = groupID
          apis.push(val)
        } else {
          groups.push(
            Object.assign(
              {
                parentID: groupID,
                uuid: ++groupIndex
              },
              val
            )
          )
          if (val.children?.length) {
            flatData(val.children, groupIndex)
          }
        }
      })
    }
    flatData(projectData.collections, 0)
    projectData = new PcToOpenAPI({
      version: data.version,
      environmentList: data.environments,
      collections: [...groups, ...apis]
    }).data
  }
  const formData = new FormData()
  formData.append(
    'file',
    new Blob([JSON.stringify(projectData)], {
      type: 'application/json'
    })
  )
  formData.append('upstream', upstream)
  formData.append('group', group)
  formData.append('prefix', prefix)
  formData.append('format', 'OpenAPI3.0')

  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': secretKey,
    },
    body: formData
  })
  const res = await rawResponse.json()
  if (res?.status === 'error' || res?.code !== 0) {
    return {
      status: 1,
      message: res?.error_info || res.msg
    }
  }
  return {
    status: 0
  }
}
