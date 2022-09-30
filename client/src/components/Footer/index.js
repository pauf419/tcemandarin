import cl from './index.module.sass'
import logo from '../../img/logo.png'
import Hr from '../../components/UI/Hr'

export default function Footer() {
  return (
    <footer className={cl.Footer} id="footer">
      <div className={cl.Footer_inner}>
        <div className={cl.Logo_section}>
          <div className={cl.Logo}>
            <img className="logo medium" src={logo}/>
          </div>
          <div className={cl.Email}>
            first.jim@yandex.ru
          </div>
        </div>
        <div className={cl.Promo_section}>
          <div className='phone_promo'>
            <span> +86 187 1780 6931 </span>
          </div>
          <div className={cl.Social_section}>
            <div className={cl.Block}>
              <a href="https://t.me/test1" className={cl.Icon}>
                <svg width="24px" height="24px" version="1.1" viewBox="0 0 24 24"><path id="telegram-3" d="M19,24l-14,0c-2.761,0 -5,-2.239 -5,-5l0,-14c0,-2.761 2.239,-5 5,-5l14,0c2.762,0 5,2.239 5,5l0,14c0,2.761 -2.238,5 -5,5Zm-2.744,-5.148c0.215,0.153 0.491,0.191 0.738,0.097c0.246,-0.093 0.428,-0.304 0.483,-0.56c0.579,-2.722 1.985,-9.614 2.512,-12.09c0.039,-0.187 -0.027,-0.381 -0.173,-0.506c-0.147,-0.124 -0.351,-0.16 -0.532,-0.093c-2.795,1.034 -11.404,4.264 -14.923,5.567c-0.223,0.082 -0.368,0.297 -0.361,0.533c0.008,0.235 0.167,0.44 0.395,0.509c1.578,0.471 3.65,1.128 3.65,1.128c0,0 0.967,2.924 1.472,4.41c0.063,0.187 0.21,0.334 0.402,0.384c0.193,0.05 0.397,-0.002 0.541,-0.138c0.811,-0.765 2.064,-1.948 2.064,-1.948c0,0 2.381,1.746 3.732,2.707Zm-7.34,-5.784l1.119,3.692l0.249,-2.338c0,0 4.324,-3.9 6.79,-6.124c0.072,-0.065 0.082,-0.174 0.022,-0.251c-0.06,-0.077 -0.169,-0.095 -0.251,-0.043c-2.857,1.825 -7.929,5.064 -7.929,5.064Z"/></svg>
              </a>
            </div>
            <div className={`${cl.Block} tooltip_inner`}>
              <a href="weixin://dl/chat?124563456" className={cl.Icon}>
                <svg width="24" height="24" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 24 24"><path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-.665-6.984c1.016-.736 1.665-1.825 1.665-3.035 0-2.218-2.158-4.016-4.819-4.016-2.662 0-4.819 1.798-4.819 4.016s2.157 4.016 4.819 4.016c.55 0 1.081-.079 1.573-.22l.141-.021c.093 0 .177.028.256.074l1.055.609.093.03c.089 0 .161-.072.161-.161l-.026-.117-.217-.811-.017-.102c0-.108.053-.203.135-.262zm-8.552-11.485c-3.194 0-5.783 2.158-5.783 4.82 0 1.452.779 2.759 1.998 3.642.098.07.162.185.162.314l-.02.123-.261.972-.031.141c0 .107.086.193.193.193l.111-.036 1.266-.731c.096-.055.196-.089.307-.089l.17.025c.591.17 1.228.265 1.888.265l.318-.008c-.126-.376-.194-.772-.194-1.181 0-2.427 2.361-4.395 5.274-4.395l.314.008c-.436-2.302-2.827-4.063-5.712-4.063zm3.791 7.807c-.355 0-.642-.287-.642-.642 0-.355.287-.643.642-.643.355 0 .643.288.643.643 0 .355-.288.642-.643.642zm3.213 0c-.355 0-.642-.287-.642-.642 0-.355.287-.643.642-.643.355 0 .643.288.643.643 0 .355-.288.642-.643.642zm-8.932-3.759c-.425 0-.771-.345-.771-.771 0-.426.346-.771.771-.771.426 0 .772.345.772.771 0 .426-.346.771-.772.771zm3.856 0c-.426 0-.771-.345-.771-.771 0-.426.345-.771.771-.771.426 0 .771.345.771.771 0 .426-.345.771-.771.771z"/></svg>
              </a>
              <span className="tooltip_text">+86 187 1780 6931</span>
            </div>
            <div className={cl.Block}>
              <a href="https://wa.me/861850170990" className={cl.Icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={cl.Footer_privacy}>
        <span className={cl.Owns}>
          © 2022 ICE MANDARIN
        </span>
        <span className={cl.PrivacyPolicy}>
          <a href='#'> Политика конфиденциальности </a>
        </span>
      </div>
    </footer>
  )
}
