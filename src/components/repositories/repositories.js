import React from "react";

const RepoCard = (props) => {
  const { name, content, date_init, date_end, institution, location } = props
  return (
    <>
      <div className="wh-cnt-block-item">
        <h2 className="text-bold">{name}</h2>
        <a href={content} target="_blank">{content}</a>
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
          name={post.name}
          content={post.url_repository}
        />
        )}
      </div>
    </>
  )
}

export default Repositories