import React from 'react'
import Link from 'react-router-dom/Link'

const AsideCategory = props => {
    const { payload } = props
    const html = payload.map(item => {
        return (
            <Link key={item._id} to={`/category/${item._id}`} className="topic-item clearfix">
                <span className="avatar-link">
                    <img src="/static/images/topic-1.png" className="avatar-image" />
                </span>
                <h3 className="topic-title">{item.cate_name}</h3>
                <p className="topic-meta">{item.cate_num || 0} 篇文章</p>
                <i className="icon icon-arrow-right" />
            </Link>
        )
    })
    return <div className="card card-topics">{html}</div>
}

export default AsideCategory
