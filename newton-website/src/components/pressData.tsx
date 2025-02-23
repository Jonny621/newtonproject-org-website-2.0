import React, { useState, useEffect } from 'react'
import { Pagination } from 'antd'
import { getRequest } from '../utils/axiosData'
import { newsEnvUrl } from '../utils/url'
import { arrDate } from '../utils/createTime'
import { Skeleton } from 'antd'

function PressData() {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  useEffect(() => {
    const listUrl = newsEnvUrl + '/api/v1/press/list'
    getDate(listUrl)
  }, [])
  const getDate = (listUrl: any) => {
    const fetchData = async (listUrl: any) => {
      const res = await getRequest(listUrl)
      setData(res.data.result.data)
      setCurrentPage(res.data.result.page_id)
      setTotalPage(res.data.result.total_page)
    }
    fetchData(listUrl)
  }
  const onPageChange = (page: any) => {
    const detailUrl = newsEnvUrl + '/api/v1/press/list?page_id=' + page + '&page_size=10'
    getDate(detailUrl)
  }

  return (
    <div className={'container community-data'}>
      <ul className={'data-list'}>
        {data && data.length > 0 ? (
          data.map((item: any, index) => {
            return (
              <li key={index}>
                <a href={item.url} target="_blank">
                  <h3>{arrDate(item.created_at)}</h3>
                  <p>{item.title}</p>
                </a>
              </li>
            )
          })
        ) : (
          <Skeleton paragraph title active />
        )}
      </ul>
      <Pagination defaultCurrent={1} current={currentPage} total={totalPage * 10} onChange={onPageChange} />
    </div>
  )
}
export default PressData
