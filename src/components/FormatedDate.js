import PropTypes from 'prop-types';

import React, {
    Component
} from 'react';

class FormatedDate extends Component {
  render() {
    const date =new Date(this.props.dateString);
    const dateString = date.toLocaleDateString();
    return (
      <span>{dateString}</span>
    );
  }
}

FormatedDate.propTypes = {
  dateString: PropTypes.string.isRequired
}

  export default FormatedDate;