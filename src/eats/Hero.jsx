import css from "./css/hero.module.css";
export default function Hero(){
    return(
        <div className={css.article}>
                <div className={css.container}>
                    <p className={css.top_p}>Restaurant app</p>
                    <h1>Why stay hungry when you can order form Eats </h1>
                    <p className={css.down_p}>Order in exchange for hunger</p>
                    <div className={css.buttTop} >
                        <button className={css.buttTop_el} type="button">Delivery</button>
                        <button className={css.buttTop_el} type="button">Menu</button>
                    </div>
                </div>
        </div>
    )
}