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
    <div className="skill-indicator">
      {rows}
    </div>
  )
}

const SkillCard = (props) => {
  const { name, content } = props
  // console.log('Skill: ', props)
  return (
    <>
      <div className="wh-cnt-block-item" >
        <h2 className="text-bold">{name}</h2>
        {loopSkill(content)}
      </div>
    </>
  )
}

const Skills = (props) => {
  const { id, name, posts } = props
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
export default Skills