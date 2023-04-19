// Write your code here

import './index.css'

import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimeLineCard = props => {
  const {detailsOfProject} = props
  const {
    projectUrl,
    duration,
    imageUrl,
    description,
    projectTitle,
  } = detailsOfProject
  return (
    <div className="project-card-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-header">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="calender-container">
          <AiFillCalendar className="calender-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="visit-text">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimeLineCard
