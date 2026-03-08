import css from "./css/main.module.css";
export default function FirstSec(){
    return (
        <div className={css.container}>
            <section className={css.main_content}>
                <h2 className={css.content_article}>How the app works</h2>
                <ul className={css.content_ul}>
                    <li className={css.content_item}>
                        <img src="./img/app-img1.png" alt="app-login" width="250px" height="507px"/>
                        <div className={css.text_content}>
                            <p className={css.decorative_p}>Create an account</p>
                            <h2 className={css.content_h2}>Create/login to an existing account to get started</h2>
                            <p className={css.content_p}>An account is created with your email and a desired password</p>
                        </div>
                    </li>
                    <li className={css.content_item}>
                        <img src="./img/app-img2.png" alt="app-main page" width="250px" height="507px"/>
                        <div className={css.text_content}>
                            <p className={css.decorative_p}>Explore varieties</p>
                            <h2 className={css.content_h2}>Shop for your favorites meal as e dey hot.</h2>
                            <p className={css.content_p}>Shop for your favorite meals or drinks and enjoy while doing it.</p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    )
}