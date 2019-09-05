import React from 'react';

// Input: liked:boolean
// Output: onClick

const Like = (props) => {
  let classes = 'cp fa fa-heart';
  if(!props.liked){
    classes += '-o';
  }
  return (
    <React.Fragment>
      <i
        onClick={props.onClick} 
        className={classes} 
        aria-hidden="true"
      ></i>
    </React.Fragment>
  );
}

export default Like;