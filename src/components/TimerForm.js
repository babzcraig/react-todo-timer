import React from 'react';
import TextInput from './TextInput';

class TimerForm extends React.Component {
  state = {
    fields: {},
    fieldErrors: {}
  };

  onInputChange = ({ name, value, error }) => {
    const fields = this.state.fields;
    const fieldErrors = this.state.fieldErrors;

    fields[name] = value;
    fieldErrors[name] = error;

    this.setState({ fields, fieldErrors });
  };

  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.fields.title,
      project: this.state.fields.project,
    });
  };
  
  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
      return (
        <div className='ui centered card'>
          <div className='content'>
            <div className='ui form'>
              <div className='field'>
                <label>Title</label>
                <TextInput
                  placeholder='Title'
                  name='title'
                  value={this.state.fields.title}
                  onChange={this.onInputChange}
                />
              </div>
              <div className='field'>
                <label>Project</label>
                <TextInput
                  placeholder='Project'
                  name='project'
                  value={this.state.fields.project}
                  onChange={this.onInputChange}
                />
              </div>
              <div className='ui two bottom attached buttons'>
                <button className='ui basic blue button'
                  onClick={this.handleSubmit}>
                  {submitText}
                </button>
                <button className='ui basic red button'
                  onClick={this.props.onFormClose}>
                  Cancel
                </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerForm;
