// Write your code here
import './index.css'

import {Chrono} from 'react-chrono'
import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  console.log(timelineItemsList)

  const renderTimeLineCards = eachList => {
    if (eachList.categoryId === 'PROJECT') {
      return (
        <ProjectTimeLineCard key={eachList.id} detailsOfProject={eachList} />
      )
    }
    return <CourseTimeLineCard key={eachList.id} details={eachList} />
  }

  return (
    <div className="app-container">
      <h1 className="my-journey-heading">MY JOURNEY OF CCBP 4.0</h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(eachList => renderTimeLineCards(eachList))}
      </Chrono>
    </div>
  )
}

export default TimelineView
