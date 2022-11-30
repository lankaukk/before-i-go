import * as React from 'react'
export var Name = (props) => {
  return (
    <div
      style={{
        color: 'var(--purple)',
        fontFamily: 'var(--primary)',
        fontSize: '38px',
        lineHeight: '1.2em',
        ...props.style,
      }}
    >
      {props.text}
    </div>
  )
}