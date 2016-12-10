import React from 'react';

const ErrorMessage = (props) => {
  return (
    <div className='error'>
      { props.errorMessage }
    </div>
  );
}