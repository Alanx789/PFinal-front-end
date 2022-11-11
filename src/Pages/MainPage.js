import React from 'react'

export const MainPage = ( {userName = "guest"} ) => {

  const a = (userName === "guest") ? <div>
    Wanna log in? 
  </div> : <></>

  return (
    <>
      <p>Welcome {userName}</p>
      <>{a}</>
    </>
  )

}