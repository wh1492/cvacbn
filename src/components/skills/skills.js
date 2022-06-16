import React from "react";

import './skills.scss'

function loopSkill(value) {
  let rows = [];

  for (let i = 1; i <= 5; i++) {
    //  rows.push(`<span class="circle-skill ${i <= value ? 'active text-orange' : ''}">4</span>`)
    if (i <= value) {
      rows.push(<span key={i} className="circle-skill active"></span>)
    } else {
      rows.push(<span key={i} className="circle-skill "></span>)
    }
  }
  return (
    // <div dangerouslySetInnerHTML={{ __html: rows }}></div>
    <div className="wh-cnt-skill--indicator">
      {rows}
    </div>
  )
}

const SkillCard = (props) => {
  const { name, content } = props
  // console.log('Skill: ', props)
  return (
    <>
      <div className="wh-cnt-skill-item d-flex justify-content-between" >
        <h4 className="wh-cnt-skill--title text-bold">{name}</h4>
        {loopSkill(content)}
      </div>
    </>
  )
}

const Skills = (props) => {
  const { name, posts } = props
  if (posts === null) {
    return null
  } else {
    return (
      <>
        <div className="wh-cnt-block">
          <h3 className="wh-cnt-block--title text-orange">{name.toUpperCase()}</h3>
          {posts.map(post => <SkillCard
            key={post.id}
            name={post.name}
            content={post.skill_range}
          />
          )}
        </div>
      </>
    )
  }
}
export default Skills