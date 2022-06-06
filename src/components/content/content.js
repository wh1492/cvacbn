import React from "react"


const PostCard = (props) => {
  const { name, content, date_init, date_end, institution, location } = props
  return (
    <>
      <div className="wh-cnt-block-item">
        <h2 className="text-bold">{name}</h2>
        <h4 className="text-semiBold">{institution}</h4>
        <h6 className="text-orange text-italic">{date_init} / {date_end}</h6>
        <h6 className="text-orange text-italic">{location}</h6>
        {content && (
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        )}
      </div>
    </>
  )
}

const Content = (props) => {
  const { name, posts } = props
  return (
    <>
      <div className="wh-cnt-block">
        <h3 className="wh-cnt-block--title text-orange">{name.toUpperCase()}</h3>
        {posts.map(post => <PostCard
          name={post.name}
          date_end={post.date_end}
          date_init={post.date_init}
          location={post.location}
          institution={post.institution}
          content={post.content}
        />
        )}
      </div>
    </>
  )


}

export default Content