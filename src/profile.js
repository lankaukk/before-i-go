import React from "react"
// import { UserProPic } from './svgs.js'
// import {
//   AquaMan,
//   Wonderer,
//   BirbWatcher,
//   Mixologist,
//   Tropicologist,
//   RiskTaker,
//   Cryophile,
// } from './stickers.js'
// import {
//   DecorativeLines,
//   Checkerboard,
// } from './cardcomponents/decorations.js'

export var Profile = () => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          background: 'var(--white)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '44px 0px 25px',
          gap: '26px',
          boxShadow: '0px 5px 30px #10629290',
          left: 0,
        }}
      >
        <div
          style={{
            width: '100%',
            color: 'var(--orange)',
            fontFamily: 'var(--primary)',
            textAlign: 'center',
            fontWeight: 400,
            fontStyle: 'normal',
            border: '0px solid rgb(255, 174, 52, 1)',
            fontSize: '22px',
            textShadow:
              '0px 1px 1px #646464, 0px 4px 1px rgba(0, 0, 0, 0.25)',
          }}
        >
          Things I want to do
        </div>
        <div style={{ width: '130%' }}>
          <div
            style={{
              color: 'var(--orange)',
              fontFamily: 'var(--primary)',
              textAlign: 'center',
              fontWeight: 400,
              fontStyle: 'normal',
              border: '0px solid rgb(255, 174, 52, 1)',
              fontSize: '72px',
              lineHeight: '125%',
              textShadow:
                '0px 1px 1px #646464, 0px 8px 1px rgba(0, 0, 0, 0.25)',
            }}
          >
            BBeffore I Go
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
            padding: 40,
            margin: 'auto',
            width: 740,
            height: 600,
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              color: 'var(--purple)',
              fontFamily: 'var(--primary)',
              fontSize: '38px',
            }}
          >
            McKayyyla Lannkauu
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 40,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                flexGrow: 1,
              }}
            >
              <div
                style={{
                  background: 'var(--white)',
                  padding: 10,
                  borderRadius: '5px',
                  fontFamily: 'var(--secondary)',
                  color: 'var(--purple)',
                  fontWeight: 700,
                  fontSize: 18,
                  display: 'flex',
                  justifyContent: 'space-between',
                  boxShadow: 'inset 2px 2px 10px #10629299',
                }}
              >
                <div>Primary Location: </div>
                <div>New York City, USA</div>
              </div>
              <div
                style={{
                  background: 'var(--white)',
                  padding: 10,
                  borderRadius: '5px',
                  fontFamily: 'var(--secondary)',
                  color: 'var(--purple)',
                  fontWeight: 700,
                  fontSize: 18,
                  display: 'flex',
                  justifyContent: 'space-between',
                  boxShadow: 'inset 2px 2px 10px #10629299',
                }}
              >
                <div>Living Since: </div>
                <div>1999</div>
              </div>
              <div
                style={{
                  background: 'var(--white)',
                  padding: 10,
                  borderRadius: '5px',
                  fontFamily: 'var(--secondary)',
                  color: 'var(--purple)',
                  fontWeight: 700,
                  fontSize: 18,
                  display: 'flex',
                  justifyContent: 'space-between',
                  boxShadow: 'inset 2px 2px 10px #10629299',
                }}
              >
                <div>Life Level: </div>
                <div>Advanced</div>
              </div>
            </div>
            {/* <UserProPic
              style={{
                borderRadius: '50%',
                border: '6px solid var(--orange)',
                overflow: 'hidden',
                background: 'var(--purple)',
                height: 160,
                width: 160,
              }}
              color='var(--orange)'
            /> */}
          </div>
        </div>
        {/* <Cryophile
          style={{
            position: 'absolute',
            left: 210,
            top: 620,
          }}
        />
        <Wonderer
          style={{
            position: 'absolute',
            left: 11,
            top: 199,
            transform: 'rotate(-15deg)',
          }}
        />
        <BirbWatcher
          style={{
            position: 'absolute',
            left: 107,
            top: 235.5,
            width: 121,
          }}
        />
        <RiskTaker
          style={{
            position: 'absolute',
            left: 678,
            top: 666.5,
          }}
        />
        <AquaMan
          style={{
            position: 'absolute',
            left: 574,
            top: 188,
          }}
        />
        <Mixologist
          style={{
            position: 'absolute',
            left: 705,
            top: 352,
            transform: 'rotate(5deg)',
          }}
        />
        <Tropicologist
          style={{
            position: 'absolute',
            left: 136,
            top: 680,
            transform: 'rotate(-19deg)',
          }}
        /> */}
      </div>
    </div>
  )
}

export default Profile;