import notificationIcon from '../../assets/img/notification_icon.svg'
import './style.css'

function NotificationButton() {
  return(
    <div className="dsmeta-red-btn">
      <img src={notificationIcon} alt="Ícone de notificação" />
    </div>
  )
}

export default NotificationButton