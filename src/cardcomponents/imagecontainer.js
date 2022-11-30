import * as React from 'react'

export var ImageContainer = (props) => {
  return (
    <div
      className='imageContainer'
      style={{
        width: 834,
        height: 710,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '0',
        ...props.style,
      }}
    >
      <img
        src={props.imageUrl}
        width='105%'
        alt='awesome activity'
        style={{
          filter: props.hidden ? 'blur(15px)' : 'blur(0px)',
        }}
      />
    </div>
  )
}