import cl from '../section.module.sass'
import NewsList from './NewsList'

export default function News() {

  return (
    <section className={cl.News} id="news">
      <div className={cl.Section_header}>
        <span className='font-medium'>
          <h2> Новости компании </h2>
        </span>
      </div>
      <NewsList/>
    </section>
  )
}
