import React from 'react';

export default function Error({ className, ...props }) {
  return (
    <span className={['Error', className].join(' ')} {...props}>
      &#42;{props.message}
    </span>
  );
}
