import React from 'react'
import { Link } from 'react-router-dom'

const ProjectTemplate = ({liveLink, srcLink, heading1, heading2, para, imgsrc}) => {
    return (
        <div className="project-item">
            <div className="project-info">
                <div className="view-btn">
                    <Link to={{pathname: liveLink}} target="_blank">View</Link>
                    <Link to={{pathname: srcLink}} target="_blank">View Codes</Link>
                </div>

                <h1>{heading1}</h1>
                <h2>{heading2}</h2><br/>
                <p>{para}</p>
            </div>
            
            <div className="project-img">
                <img src={imgsrc} alt="image"/>
            </div>
        </div>
    )
}

export default ProjectTemplate
