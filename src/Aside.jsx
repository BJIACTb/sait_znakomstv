import './Aside.css';



const Aside=(props) => {
  return (
    <div className='Aside'>
      <div class="sidebar">
          <div class="block b-beige leader desktop">
            <div class="top"></div>
            <div class="inner">
              <div class="headline">

                <h2>Быстрый поиск</h2>

              </div>

              Я ищу
              <select class="gender" name="gender">
                <option label="Кошек" value="1" selected="selected">Кошек</option>
                <option label="Котов" value="2">Котов</option>
              </select><br /><br />
              Возраст
              <select class="ageFrom" name="ageFrom">
                <option label="4" value="4" selected="selected">4</option>
                <option label="5" value="5">5</option>
                <option label="6" value="6">6</option>
                <option label="7" value="7">7</option>
                <option label="8" value="8">8</option>
                <option label="9" value="9">9</option>
                <option label="10" value="10">10</option>
                <option label="11" value="11">11</option>
                <option label="12" value="12">12</option>
                <option label="13" value="13">13</option>
                <option label="14" value="14">14</option>
                <option label="15" value="15">15</option>
                <option label="16" value="16">16</option>
                <option label="17" value="17">17</option>
                <option label="18" value="18">18</option>


              </select>
              -
              <select  name="ageTo">
                <option label="4" value="4" selected="selected">4</option>
                <option label="5" value="5">5</option>
                <option label="6" value="6">6</option>
                <option label="7" value="7">7</option>
                <option label="8" value="8">8</option>
                <option label="9" value="9">9</option>
                <option label="10" value="10">10</option>
                <option label="11" value="11">11</option>
                <option label="12" value="12">12</option>
                <option label="13" value="13">13</option>
                <option label="14" value="14">14</option>
                <option label="15" value="15">15</option>
                <option label="16" value="16">16</option>
                <option label="17" value="17">17</option>
                <option label="18" value="18">18</option>
              </select>
              <br /><br />
              <button class="custom-btn btn-11">Поиск<div class="dot"></div></button>
              <br /><br /><br />
              <div class="block b-beige leader">
                <div class="top"></div>
                <div class="inner">
                  <h2>{props.message}</h2>
                  <div><a href="#">Кошек: 23</a> </div>
                  <div><a href="#">Котов: 34</a></div>
                </div>
                <div class="bottom"></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export  { Aside };