import React from 'react'
import TimeTrial from '../components/TimeTrial'

class TimeTrialList extends React.Component {

  render(){
    const timeTrialNodes = this.props.timetrials.map((timetrial, index) => {
      return (
        <TimeTrial 
          key={index} 
          timetrial={timetrial} 
          handleTimeTrialClick={this.props.handleTimeTrialClick}
        />
      )
    })

    return(
      <section>
        <h4>Time Trials</h4>
        <ul className='time-trial-list' >
          {timeTrialNodes}        
        </ul>
      </section>
    )
  }

}

export default TimeTrialList