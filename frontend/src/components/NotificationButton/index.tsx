import axios from 'axios';
import notificationIcon from '../../assets/img/notification_icon.svg'
import { BASE_URL } from '../../utils/request';
import './style.css'

type Props = {
  saleId: number;
}

const handleClick = (id : number) => {
  axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
      console.log("SUCESSO")
    })
}

function NotificationButton( {saleId} : Props ) {
  return(
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={notificationIcon} alt="Ícone de notificação" />
    </div>
  )
}

export default NotificationButton