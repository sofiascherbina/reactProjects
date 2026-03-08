import css from "./css/main.module.css";
export default function SecondSec(){
    return (
        <section>
          <div className={css.bottom}>
            <div className={css.container}>
              <h2 className={css.bottom_title}>Order now.</h2>
              <p className={css.text_center}>Available on your favorite store. Start your premium experience now</p>
              <div className={css.bottom_btns}>
                <button className={css.bottom_button} style={{width:"142px"}} >Playstore</button>
                <button className={css.bottom_button} style={{ width:"173px"}}>App store</button>
              </div>
            </div>
          </div>
        </section>
    )
}