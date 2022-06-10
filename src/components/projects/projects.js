import React from "react";
import './projects.scss';

const ProjectCard = (props) => {
  const { name, content } = props
  return (
    <>
      <div className="wh-cnt-block-item projects-item">
        {/* <h2 className="text-bold projects-item--title">{name}</h2> */}
        <a className="projects-item--link" href={content} target="_blank">{content}</a>
      </div>
    </>
  )
}
const Projects = (props) => {
  const { name, posts } = props
  if (posts === null) {
    return null
  } else {
    return (
      <>
        <div className="wh-cnt-block">
          <h3 className="wh-cnt-block--title text-orange">{name.toUpperCase()}</h3>
          {posts.map(post => <ProjectCard
            key={post.id}
            name={post.name}
            content={post.url_portafolio}
          />
          )}
        </div>
      </>
    )
  }

}

export default Projects