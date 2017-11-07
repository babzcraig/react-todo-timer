import React, { Component } from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import { connect } from 'react-redux';
import { fetchTimers } from '../actions/actions';

class TimersDashboard extends Component {
  state = {
    timers: []
  };

  componentDidMount() {
    // dispatch an action to get a list of todos
    this.props.fetchTimers();
  }

  componentWillReceiveProps({timers}) {
    // When we receive the updated redux state via props update the state. This helps
    // avoid a double render had we put it elsewhere
    console.log('receiving...', timers)
    this.setState({ timers: timers});
  }

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  };

  handleEditFormSubmit = (attrs) => {
    this.updateTimer(attrs);
  };

  handleTrashClick = (timerId) => {
    this.deleteTimer(timerId);
  };

  deleteTimer = (timerId) => {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== timerId),
    });
  };

  updateTimer = (attrs) => {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          });
        } else {
          return timer;
        }
      }),
    });
  }


  handleStartClick = (timerId) => {
    this.startTimer(timerId);
  };

  handleStopClick = (timerId) => {
    this.stopTimer(timerId);
  };

  startTimer = (timerId) => {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, {
            runningSince: now,
          });
        } else {
          return timer;
        }
      }),
    });
  };

  stopTimer = (timerId) => {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null,
          });
        } else {
          return timer;
        }
      }),
    });
  };

  render() {
    return (
      <div className='ui three column centered grid'>

        <div className='column'>
          <EditableTimerList 
            timers={this.state.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}  
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}          
          />
          <ToggleableTimerForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({todoReducer}) => {
  const { timers } = todoReducer;
  return {
    timers
  };
}

export default connect(mapStateToProps, {fetchTimers})(TimersDashboard);
