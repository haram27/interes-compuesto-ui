const Notification = ({ messages }) => {
  if (messages === null || messages.length === 0) {
    return null
  }

  return (
    <>
      {messages.map((message) => (
        <div key={message} className="error">
          {message}
        </div>
      ))}
    </>
  )
}

export default Notification
