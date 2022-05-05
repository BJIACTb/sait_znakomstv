import { Link } from 'react-router-dom';
import './Nav.css';



const Nav=() => {
  return (
    <div className='Nav'>
    <nav>
        <ul>
          <li><Link to='/home'>Главная</Link></li>
          <li><Link to='/questionnaire'>Поиск пары</Link></li>
          <li><Link to=''>Блоги</Link></li>
          <li><Link to='/about'>О нас</Link></li>
          <li><Link to=''>Наш блог</Link></li>
          <li class="pl pl_1"><Link to=''>Регестрация</Link></li>
          <li class="pl pl_2"><Link to=''>Войти</Link></li>






          
          {/* <li><a href="/questionnaire"></a>Поиск пары</li>
          <li><a href="#">Блоги</a></li>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Наш блог</a></li>
          <li class="pl pl_1"><a href="#">Регистрация</a></li>
          <li class="pl pl_2"><a href="#">Вход</a></li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;