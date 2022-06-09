import React from "react";

import './repositories.scss'

const RepoCard = (props) => {
  const { name, content } = props
  return (
    <>
      <div className="wh-cnt-block-item repositories-item">
        <h2 className="text-bold repositories-item--title">{name}</h2>
        <a className="repositories-item--link" href={content} target="_blank">{content}</a>
      </div>
    </>
  )
}

const Repositories = (props) => {
  const { name, posts } = props
  return (
    <>
      <div className="wh-cnt-block">
        <h3 className="wh-cnt-block--title text-orange">{name.toUpperCase()}</h3>
        {posts.map(post => <RepoCard
          key={post.id}
          name={post.name}
          content={post.url_repository}
        />
        )}
      </div>
    </>
  )
}

export default Repositories