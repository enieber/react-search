import React, {PropTypes} from 'react';

const Search = (props) => (
    <input onChange={props.onChange} />
);

Search.propTypes = {
  onChange: PropTypes.func.isRequered
}

export {Search};
