import * as React from 'react'
import {
  Birb,
  Drink,
  PalmTree,
  RiskMan,
  Snowflake,
} from './svgs.js'

export var AquaMan = (props) => {
  return (
    <div
      style={{
        border: '16px double var(--white)',
        background: 'var(--white)',
        backgroundImage:
          'url(https://cdn.utopia.app/editor/sample-assets/flamingo.jpg)',
        backgroundSize: '400px',
        backgroundPosition: '5% 60%',
        width: 100,
        height: 100,
        ...props.style,
      }}
    />
  )
}

export var Wonderer = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        border: '3px solid var(--white)',
        background: 'var(--orange)',
        backgroundImage:
          'url(https://cdn.utopia.app/editor/sample-assets/northernlights.jpg)',
        backgroundSize: '250px',
        backgroundPosition: '55% 30%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--white)',
        fontFamily: 'primary',
        fontSize: '.6em',
        textAlign: 'center',
        width: 100,
        height: 100,
        ...props.style,
      }}
    >
      <div style={{ fontSize: '8em', marginTop: -5 }}>
        7
      </div>
      <div style={{ marginTop: -5 }}>Wonders</div>
    </div>
  )
}

export var BirbWatcher = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        border: '5px groove var(--white)',
        backgroundImage:
          'url(https://images.pexels.com/photos/3289880/pexels-photo-3289880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize: 200,
        height: 100,
        width: 113,
        ...props.style,
      }}
    >
      <Birb
        color='var(--white)'
        style={{ width: 40, height: 0 }}
      />
      <div
        style={{
          color: 'var(--white)',
          textAlign: 'right',
          width: '51.11517289066%',
          alignSelf: 'end',
          height: 50,
          marginLeft: -10,
        }}
      >
        Birb Watcher
      </div>
    </div>
  )
}

export var Mixologist = (props) => {
  return (
    <div
      style={{
        border: '2px solid var(--white)',
        backgroundColor: 'purple',
        backgroundImage:
          'url(https://images.pexels.com/photos/239466/pexels-photo-239466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize: '500px',
        backgroundPosition: '45% 50%',
        backgroundBlendMode: 'darken',
        width: 100,
        height: 100,
        ...props.style,
      }}
    >
      <Drink color='var(--white)' />
      <div
        style={{
          textAlign: 'center',
          color: 'var(--white)',
          fontFamily: 'Futura',
          fontSize: '.8em',
          padding: 5,
        }}
      >
        MIXOLOGIST
      </div>
    </div>
  )
}

export var Tropicologist = (props) => {
  return (
    <div
      style={{
        border: '6px double var(--white)',
        backgroundImage:
          'url(https://images.pexels.com/photos/2237348/pexels-photo-2237348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundColor: '#5C885C',
        backgroundSize: '100px',
        backgroundPosition: '45% 50%',
        backgroundBlendMode: 'darken',
        width: 100,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...props.style,
      }}
    >
      <PalmTree color='var(--white)' />
    </div>
  )
}

export var RiskTaker = (props) => {
  return (
    <div
      style={{
        border: '2px solid var(--white)',
        background: 'var(--purple)',
        backgroundImage:
          'url(https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize: '120px',
        backgroundBlendMode: 'linear-burn',
        width: 75,
        height: 75,
        overflow: 'hidden',
        alignSelf: 'center',
        margin: '0 12px',
        ...props.style,
      }}
    >
      <RiskMan
        color='var(--white)'
        style={{ transform: 'rotate(-45deg)' }}
      />
    </div>
  )
}

export var Cryophile = (props) => {
  return (
    <div
      style={{
        border: '2px solid var(--white)',
        backgroundImage:
          'url(https://images.pexels.com/photos/1717212/pexels-photo-1717212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize: '220%',
        backgroundPosition: '0% 12%',
        width: 100,
        height: 100,
        ...props.style,
      }}
    >
      <Snowflake color='var(--white)' width={4} />
    </div>
  )
}
