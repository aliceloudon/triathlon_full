import React from 'react'
import MemberContainer from '../containers/MemberContainer'
import MemberForm from '../components/MemberForm'
import TimeTrialContainer from '../containers/TimeTrialContainer'
import DetailContainer from './DetailContainer'

class DashboardContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      members: [],
      timetrials: [],
      results: [],
      timeTrialDetails: [],
      resultsDetails: []
    }
  }

  componentDidMount(){
    var member_url = 'http://localhost:5000/api/members'
    var member_request = new XMLHttpRequest()
    member_request.open('GET', member_url)

    member_request.onload = () => {
      if (member_request.status === 200){
        var data = JSON.parse(member_request.responseText)
        this.setState({members: data})
      }
    }
    member_request.send()

    var time_trial_url = 'http://localhost:5000/api/time_trials'
    var time_trial_request = new XMLHttpRequest()
    time_trial_request.open('GET', time_trial_url)

    time_trial_request.onload = () => {
      if (time_trial_request.status === 200){
        var data = JSON.parse(time_trial_request.responseText)
        this.setState({timetrials: data})
      }
    }
    time_trial_request.send()

    var result_url = 'http://localhost:5000/api/results'
    var result_request = new XMLHttpRequest()
    result_request.open('GET', result_url)

    result_request.onload = () => {
      if (result_request.status === 200){
        var data = JSON.parse(result_request.responseText)
        this.setState({results: data})
      }
    }
    result_request.send()
  }

  handleTimeTrialClick(timeTrial){
    var newDetailsArray = []
    var newResultsArray = []
    newDetailsArray.push(timeTrial)
    // console.log(this.state.results)
    this.state.results.forEach((result) => {
      // console.log(result.time_trial.id)
      if (result.time_trial.id === timeTrial.id){
        newResultsArray.push(result)
      }
    })

    this.setState((prevState) => ({
      timeTrialDetails: newDetailsArray,
      resultsDetails: newResultsArray
    }))

  }

  render(){
    return(
      <section className='main-container'>

        <section>
          <MemberContainer members={this.state.members}/>  
        </section>

        <section>
          <DetailContainer 
            timeTrialDetails={this.state.timeTrialDetails} 
            resultsDetails={this.state.resultsDetails}
          />
        </section>
        
        <section>
          <TimeTrialContainer 
            timetrials={this.state.timetrials} 
            handleTimeTrialClick={this.handleTimeTrialClick.bind(this)}
          />
        </section>

        <section>
          <MemberForm />  
        </section>

      </section>
    )
  }

}

export default DashboardContainer