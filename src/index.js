import PropTypes from 'prop-types';
import React from 'react';
import * as ObjectID from 'bson-objectid';

export class ObjectIDControl extends React.Component {

  handleRegenerate(){

  }

  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
    } = this.props;

    return (
      <div style={{ "display": "flex" }}>
        <input
          type="hidden"
          id={forID}
          className={classNameWrapper}
          value={value || ObjectID().toHexString()}
          onChange={e => onChange(e.target.value.trim())}
        />
        <div>{value || ObjectID().toHexString()}</div>
        <button onClick={() => {onChange(ObjectID().toHexString()) }} style={{ marginLeft: "1em" }} >Regenerate ID</button>
      </div >
    );
  }
}

ObjectIDControl.propTypes = {
  onChange: PropTypes.func.isRequired,
  forID: PropTypes.string,
  value: PropTypes.node,
  classNameWrapper: PropTypes.string.isRequired,
}

ObjectIDControl.defaultProps = {
  value: '',
}


export function ObjectIDPreview({ value }) {
  return <div>{value}</div>;
}

ObjectID.propTypes = {
  value: PropTypes.node,
};
