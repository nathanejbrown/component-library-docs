function LibraryComponent(componentName) {
  // Code to return button or card based on name
  // Update routes to use /components for Component detail, /components/:component as children to get specific component
}

function ComponentDetail({
  details,
  children
}) {
  return (
    <div className="detail-container">
      <h1>{details}</h1>
      {children}
    </div>
  )
}

export default ComponentDetail