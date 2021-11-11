import React from "react"
import experienceList from "./experiencelist";

const Experience = ()=>{
    return( <div className="expo"><h1>Experience</h1>
         
             {experienceList.map((list)=>(<div className="card">
                 <h3>{list.header} <label className="year">{list.year}</label></h3>
                 <p>{list.message}<a href={list.github_url} target="_blank" className="github">{list.Certificate}</a></p></div>))}
             </div>
     )
}

export default  Experience;