// Write your code here

import './index.css'

import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimeLineCard = props => {
  const {details} = props
  const {courseTitle, duration, description, tagsList} = details
  return (
    <div className="course-bg-container">
      <div className="header-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="clock-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="ul-list">
        {tagsList.map(eachTag => (
          <p key={eachTag.id} className="list-item">
            {eachTag.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimeLineCard
