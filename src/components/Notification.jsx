// src/components/Notification.js
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)

  if (!notification) {
    return null
  }

  const style = {
    border: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    color: 'green', // Green text for create/vote actions
    marginBottom: 10
  }


  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification