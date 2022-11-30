import * as React from 'react'
export var Description = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: '5px 20px 14px 20px',
        gap: 10,
        width: 396,
        height: 'min-content',
        zIndex: '10',
        background: 'var(--yellow)',
        borderRadius: '0px 0px 20px 0px',
        fontFamily: 'var(--secondary)',
        fontWeight: 700,
        fontSize: 14,
        lineHeight: '144%',
        color: 'var(--purple)',
        ...props.style,
      }}
    >
      {props.description}
    </div>
  )
}