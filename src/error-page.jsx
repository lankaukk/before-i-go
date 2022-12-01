import React from "react";
import { useRouteError } from "react-router-dom";
import "./globals.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 10,

    }}>
      <h1 style={{fontFamily: 'var(--primary-basic)', fontSize: 100}}>Oops!</h1>
      <p style={{fontFamily: 'var(--secondary)'}}>Sorry, an unexpected error has occurred:
      <br></br><br></br>
        <center><i style={{color: 'red'}}>{error.statusText || error.message}</i></center>
      </p>
    </div>
  );
}
