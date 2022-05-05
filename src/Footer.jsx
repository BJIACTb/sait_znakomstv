import './Footer.css';
import React, {Component} from 'react';



class Footer extends Component {
  render(){
    const state = 'Сайт знакомств'
    const name = '"Кошкин рай"';
  return (
    <div className='Footer'>
       <footer>
        <div class="footer-content">
          
            {name && <h3>{state} {name}</h3>}
            <p></p>
            <ul class="socials">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-odnoklassniki"></i></a></li>
                <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                <li><a href="#"><i class="fa fa-vk"></i></a></li>
            </ul>
        </div>
    </footer>
    </div>
  );
}
}
export default Footer;


// const name = 1;
//     if (name == 1) {
//       alert( '"Кошкин рай"' );
//     } else {
//       alert( '"Кошкин ад"' );