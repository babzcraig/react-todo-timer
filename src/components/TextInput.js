import PropTypes from 'prop-types';
import React from 'react';

class TextInput extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    validate: PropTypes.func,
    onChange: PropTypes.func.isRequired,
  };

  componentWillReceiveProps(update) {
    this.setState({ value: update.value });
  }

  onChange = (evt) => {
    const name = this.props.name;
    const value = evt.target.value;

    this.props.onChange({ name, value });
  };

  render() {
    return (
      <div>
        <input
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
};

export default TextInput;
