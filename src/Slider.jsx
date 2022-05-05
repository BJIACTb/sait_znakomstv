import './Slider.css';




const Slider=(props) => {
  return (
    <div className='Slider'>
      <hr/>
<div className='txt'>
<h1>{props.message}</h1>

<p>{props.message1}</p>
</div>


<div className='disp'>
<div class="wrapper relative">
  <div class="avtar"><img src="https://avavatar.ru/images/full/1/c0cM4CeAQABAbF7O.jpg" alt="user-avtar" width="100%"/></div>
    <span class="client-name">Апроксий, 5 лет</span>
    <div class="testimonial-content">  Отличный сайт, нашел ту которую искал всю жизнь. Всем любви.</div>
</div>

<div class="wrapper relative">
  <div class="avtar"><img src="https://w-dog.ru/wallpapers/6/0/304084550564146/koshka-kot-belaya-morda.jpg" alt="user-avtar" width="100%"/></div>
  <span class="client-name">Арсюша, 7 лет</span>
  <div class="testimonial-content">Благодаря сайту, нашла пару с который общаюсь до сих пор. Спасибо администрации сайта.</div>
</div>

<div class="wrapper relative">
  <div class="avtar"><img src="https://ava-24.com/_ph/23/118767871.jpg" alt="user-avtar" width="100%"/></div>
  <span class="client-name">Котофейкин, 10 лет</span>
  <div class="testimonial-content"> Не смог на данный момент найти пару, но я не отчаиваюсь. Всем удачи! </div> 
</div>
</div>


</div>
  );
}

export  { Slider };