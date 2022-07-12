import React, { useEffect, useState } from 'react'
import { arrDate } from '../../utils/createTime'
import { NewschildProps } from '../../model/PageModel'
import { useIntl } from 'gatsby-plugin-intl'
import { getRequest } from '../../utils/axiosData'
import { newsEnvUrl } from '../../utils/url'

const News: React.FC<NewschildProps> = props => {
  const intl = useIntl()
  const { title } = props
  const [data, setData] = useState([])

  useEffect(() => {
    const newlUrl = newsEnvUrl + '/api/v1/press/latest/'
    const fetchData = async () => {
      const res = await getRequest(newlUrl)
      setData(res.data.result)
    }
    fetchData()
  }, [])

  return (
    <>
      <div className={'news'}>
        <h2>{title}</h2>
        <ul>
          {data && data.length > 0 ? (
            data.map((item: any, index) => {
              return (
                <li key={index}>
                  <a href={item.url} target="_blank" key={index}>
                    <div className={'news-img'}>
                      <img src={newsEnvUrl + '/filestorage/' + item.image} alt="img" />
                    </div>
                    <div className={'news-title'}>
                      <h3>{item.title}</h3>
                      <p>{arrDate(item.published_at)}</p>
                    </div>
                  </a>
                </li>
              )
            })
          ) : (
            <>{intl.formatMessage({ id: 'Loading' })}</>
          )}
        </ul>
        <div className={'news-more'}>
          <a href={newsEnvUrl + '/press/'} target="_blank">
            {intl.formatMessage({ id: 'More' })}
          </a>
        </div>
      </div>
    </>
  )
}

export default News
