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
      setActiveStyle,
      setInactiveStyle,
    } = this.props;

    return (
      <div style={{ "display": "flex" }} className={classNameWrapper} onFocus={setActiveStyle} onBlur={setInactiveStyle}>
        <input
          type="hidden"
          id={forID}
          value={value || ObjectID().toHexString()}
          onChange={e => onChange(e.target.value.trim())}
        />
        <div>{value || ObjectID().toHexString()}</div>
        <div
          style={{
            "position": "absolute",
            "right": "20px",
            "width": "fit-content",
            "z-index": "1"
          }}
        >
          <button onClick={() => {onChange(ObjectID().toHexString()) }} >Regenerate ID</button>
        </div>
      </div>
    );
  }
}

ObjectIDControl.propTypes = {
  onChange: PropTypes.func.isRequired,
  forID: PropTypes.string,
  value: PropTypes.node,
  classNameWrapper: PropTypes.string.isRequired,
  setActiveStyle: PropTypes.func.isRequired,
  setInactiveStyle: PropTypes.func.isRequired,
}

ObjectIDControl.defaultProps = {
  value: '',
}


export function ObjectIDPreview({ value }) {
  return <div>{value}</div>;
}

ObjectIDPreview.propTypes = {
  value: PropTypes.node,
};

if (typeof window !== 'undefined') {
  window.ObjectIDControl = ObjectIDControl;
  window.ObjectIDPreview = ObjectIDPreview;
}
const exportObject = { ObjectIDControl, ObjectIDPreview };

export default exportObject;
