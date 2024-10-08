import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearNotification } from "../reducers/notificationReducer"

const Notification = () => {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch(clearNotification())
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [notification, dispatch])

  if (!notification) {
    return null
  }
  
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification