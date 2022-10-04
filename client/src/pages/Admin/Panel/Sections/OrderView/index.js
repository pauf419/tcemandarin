import {useState, useContext, useEffect} from 'react'
import { Context } from '../../../../../index'
import cl from './index.module.sass'
import Order from './Order'
import SvgBtn from '../../../../../components/UI/SvgBtn'

export default function OrderView() {

  const [selector, setSelector] = useState('waiting')

  const [preExitState, setPreExitState] = useState(false)

  const [orders, setOrders] = useState([])

  const filteredOrders = orders.filter(order => order.status == selector)

  const { store } = useContext(Context)

  const fetchOrders = async() => {
    let orders = await store.getOrders()
    return setOrders(orders)
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  const clickHandler = async (id, status) => {
    await store.changeOrderStatus(id, status)
    fetchOrders()
  }

  return (
    <div className={cl.OrdersPage_container}>
      <div className={cl.OrderType_select}>
        <span className={cl.Text}> Сортировать по: </span>
        <span className={cl.Selector}>
          <span className={`${cl.Selector_chose} ${selector === 'hidden' ? cl.Active : ''}`} onClick={() => setSelector('hidden')}>
            Скрытые
          </span>
          <span className={cl.Chose_iterlayer}>
            /
          </span>
          <span className={`${cl.Selector_chose} ${selector === 'waiting' ? cl.Active : ''}`} onClick={() => setSelector('waiting')}>
            В ожидании
          </span>
        </span>
      </div>
      {
        filteredOrders
          ?
          filteredOrders.length
            ?
            <div className={cl.OrderList_container}>
              {
                filteredOrders.map(order =>
                  <Order order={order} key={order._id} onClick={clickHandler}/>
                )
              }
            </div>
            :
            <>
              <div className={cl.Empty_container}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.353 100.352">
                  <path d="M74.59,20.761c-4.721-4.224-10.812-6.357-17.124-6.006c-6.323,0.351-12.131,3.143-16.354,7.861   c-8.718,9.742-7.885,24.761,1.857,33.479c4.518,4.042,10.167,6.03,15.799,6.03c6.515,0,13.004-2.662,17.68-7.887   C85.165,44.498,84.332,29.479,74.59,20.761z M74.211,52.239c-7.613,8.509-20.732,9.237-29.242,1.62   c-8.51-7.615-9.237-20.733-1.623-29.242c3.689-4.122,8.763-6.561,14.285-6.867c0.393-0.021,0.783-0.032,1.173-0.032   c5.099,0,9.955,1.851,13.785,5.278C81.099,30.612,81.826,43.73,74.211,52.239z">
                  </path>
                  <path d="M46.011,26.957c-0.553,0.618-0.5,1.566,0.117,2.118c0.287,0.256,0.644,0.382,1,0.382c0.412,0,0.822-0.168,1.118-0.5   c5.224-5.837,14.22-6.335,20.057-1.113c0.617,0.553,1.564,0.5,2.118-0.117c0.552-0.618,0.499-1.566-0.118-2.118   C63.233,19.283,52.336,19.889,46.011,26.957z">
                  </path>
                  <path d="M90.676,36.496c-0.509-8.492-4.294-16.276-10.658-21.921C73.654,8.93,65.48,6.11,56.98,6.611   C48.489,7.12,40.704,10.905,35.06,17.269c-11.315,12.757-10.501,32.142,1.585,43.923l-5.173,5.902l-1.659-1.471   c-0.619-0.55-1.563-0.494-2.113,0.122l-18,20.115c-0.266,0.296-0.402,0.686-0.38,1.083s0.201,0.77,0.497,1.035l5.655,5.061   c0.287,0.256,0.644,0.382,1,0.382c0.412,0,0.822-0.169,1.118-0.5L35.614,72.78c0.266-0.297,0.403-0.688,0.38-1.087   c-0.023-0.397-0.204-0.771-0.502-1.035l-1.775-1.574l5.17-5.898c5.683,4.597,12.66,7.064,19.956,7.064   c0.647,0,1.298-0.02,1.949-0.059c8.491-0.51,16.276-4.295,21.921-10.659S91.185,44.988,90.676,36.496z M16.355,89.803l-3.419-3.06   L28.94,68.859l3.434,3.045L16.355,89.803z M80.468,57.542c-5.113,5.765-12.165,9.193-19.856,9.654   c-7.69,0.474-15.102-2.101-20.867-7.213c-11.9-10.555-12.995-28.824-2.44-40.724c5.113-5.765,12.165-9.193,19.856-9.654   c0.59-0.036,1.178-0.053,1.765-0.053c7.054,0,13.78,2.546,19.103,7.267c5.765,5.113,9.193,12.165,9.654,19.856   C88.143,44.367,85.58,51.778,80.468,57.542z">
                  </path>
                </svg>
                <span>
                  Пока-что здесь ничего нет.
                </span>
                <div className={cl.Reload_container}>
                  <button onClick={() => fetchOrders()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                    </svg>
                  </button>
                </div>
              </div>
              <span> </span>
            </>
          :
          <p> </p>
      }
    </div>
  )
}
