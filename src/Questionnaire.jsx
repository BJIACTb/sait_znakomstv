import s from './Questionnaire.module.css';


const Questionnaire=()=> {
  const text = "Learn Microinteraction";
  return (
    <div className={s.Questionnaire}>
     
     <div className={s.card}>
  <div className={s.card_imgholder}>
    <img src="https://images.unsplash.com/photo-1640102953836-5651f5d6b240?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80" alt="Blog image"/>
  </div>
  <h3 className={s.blog_title}>{text}</h3>
  <span className={s.blog_time}>Monday Jan 20, 2020</span>
  <p className={s.description}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra turpis, non cursus ex accumsan at.
  </p>
</div>

<div className={s.card}>
  <div className={s.card_imgholder}>
    <img src="https://images.unsplash.com/photo-1640102953836-5651f5d6b240?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80" alt="Blog image"/>
  </div>
  <h3 className={s.blog_title}>{text}</h3>
  <span className={s.blog_time}>Monday Jan 20, 2020</span>
  <p className={s.description}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra turpis, non cursus ex accumsan at.
  </p>
</div>

<div className={s.card}>
  <div className={s.card_imgholder}>
    <img src="https://images.unsplash.com/photo-1640102953836-5651f5d6b240?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80" alt="Blog image"/>
  </div>
  <h3 className={s.blog_title}>{text}</h3>
  <span className={s.blog_time}>Monday Jan 20, 2020</span>
  <p className={s.description}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis viverra turpis, non cursus ex accumsan at.
  </p>
</div>






    </div>
  );
}

export {Questionnaire};
