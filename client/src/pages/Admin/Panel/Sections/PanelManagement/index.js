import cl from './index.module.sass'
import documentation_1 from '../../../../../img/documentation_1.png'

export default function PanelManagement() {
  return (
    <div className={cl.PanelManagement_container}>
      <div className={cl.Header}>
        <h1> Краткое руководство для администраторов: </h1>
      </div>
      <div className={cl.Segment}>
        <div className={cl.Segment_header}>
          <h2> Создание новостей </h2>
        </div>
        <strong> При создании новой новости нужно учитывать 3 ключевых момента. </strong>
        <ul>
          <li> 1. Понятие предназначений полей заполнения </li>
          <li> 2. Учитывать размер прилагаемого изображения </li>
          <li> 3. Соблюдение правил разметки </li>
        </ul>
        <div>
          <h3 style={{paddingBottom: '1rem'}}> 1. </h3>
          <div className={cl.Default_content_block}> Поле "Короткое описание новости" нужно для отображения короткого содержимого поля "Описание". Данное поле будет отображено только на главной странице. </div>
          <div className={cl.Default_content_block}> Пример содержимого этого поля обведен красным цветом ниже: </div>
          <img src={documentation_1} style={{width: '100%'}}/>
        </div>
        <div>
          <h3 style={{paddingBottom: '1rem'}}> 2. </h3>
          <div className={cl.Default_content_block}> Во имя избежания проблем с масштабированием маленьких изображений, было принято решение использовать только изображения с максимально большим разрешением. </div>
        </div>
        <div>
          <h3 style={{paddingBottom: '1rem'}}> 3. </h3>
          <div className={cl.Default_content_block}> *Опционально* при использовании гипертекстовой разметки в составлении описания новости, советуется ознакомится с соответствующими ресурсами, или же обратится за помощью к администратору </div>
        </div>
      </div>
      <div className={cl.Segment}>
        <div className={cl.Segment_header}>
          <h2> Просмотр заявок </h2>
        </div>
        <div> Страница, но которой отображаются все отправленные пользователями заявки. Разделена на два раздела. </div>
        <h3> Раздел "В ожидании" </h3>
        <div className={cl.Default_content_block}> В данном разделе отображаются только заявки, на которые вы никаким образом не отреагировали </div>
        <h3> Раздел "Скрытые" </h3>
        <div className={cl.Default_content_block}> В этом же разделе отображены лишь завки, которые вы скрыли. </div>
        <h3> Зачем скрывать заявки? </h3>
        <div> Заявки можно скрывать, в большинстве своем, для отделения "непонятных\невнятных" заявок от нормальных. </div>
      </div>
    </div>
  )
}
