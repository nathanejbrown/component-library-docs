import React, { Fragment } from "react"

const componentMap = {
  BUTTON: React.lazy(() => import('component-library').then(module => {
    return {default: module.Button}
  })),
  CARD: React.lazy(() => import('component-library').then(module => {
    return {default: module.Card}
  })),
  NAV: React.lazy(() => import('component-library').then(module => {
    return {default: module.Nav}
  }))
}

function ComponentDetail({
  details
}) {
  let Component = <Fragment></Fragment>

  let props = {
    title: "testing"
  }

  if (details) {
    Component = componentMap[details.name]
  }
  console.log('component', details, Component)

  return (
    <div className="detail-container">
      <h1>{details.description}</h1>
      <Component {...props} />
    </div>
  )
}

export default ComponentDetail