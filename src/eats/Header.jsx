import css from "./css/header.module.css";
export default function Header(){
    return (
        <header> 
            <div className={css.container}>
                <div className={css.header_items}>  
                    <img className={css.logo} src="/img/logo.svg" width="150px" height="65px"/>
                        <ul className={css.navigation_ul}>
                            <li><a href="#" className={css.nav_items}>Home</a></li>
                            <li><a href="#" className={css.nav_items}>Prodact</a></li>
                            <li><a href="#" className={css.nav_items}>Faq</a></li>
                            <li><a href="#" className={css.nav_items}>Contact</a></li>
                        </ul>
                </div>
            </div>
        </header>
    )
}