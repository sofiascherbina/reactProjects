import css from "./header.module.css";
export default function GoldenHeader(){
    return (
        <>
        <div className={css.container}>
            <header>
                    <a className={css.logo} href="#">Golden</a> 
                    <ul className={css.navigation}>
                        <li className={css.nav_li}><a href="#">Home</a></li>
                        <li className={css.nav_li}><a href="#">Services</a></li>
                        <li className={css.nav_li}><a href="#">Portfolio</a></li>
                        <li className={css.nav_li}><a href="#">About</a></li>
                        <li className={css.nav_li}><a href="#">Contacts</a></li>
                    </ul>
            </header>
        </div>
        </>
    )
}