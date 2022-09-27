import cl from '../index.module.sass'
import Btn from '../../../../../../components/UI/Btn'

export default function Order({order, onClick}) {

  return (
    <div className={cl.Order_container}>
      <div className={cl.Order_header}>
        <span className={cl.Name}> {order.name} </span>
        <span className={cl.Date}> {order.date} </span>
      </div>
      <div className={cl.Order_content}>
        <span className={cl.Email}> { order.email } </span>
        <span className={cl.Number}> { order.number } </span>
        <span className={cl.Description}> { order.description } </span>
        <div className={cl.Options}>
          {
            order.status === 'hidden'
              ?
              <Btn onClick={() => onClick(order._id, 'waiting')}> Вернуть </Btn>
              :
              <Btn onClick={() => onClick(order._id, 'hidden')}> Скрыть </Btn>
          }
          <Btn onClick={() => onClick(order._id, 'delete')}> Удалить </Btn>
        </div>
      </div>
    </div>
  )
}
