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