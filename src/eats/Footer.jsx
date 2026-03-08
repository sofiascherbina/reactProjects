import css from "./css/footer.module.css";
export default function Footer(){
    return(
         <footer>
            <div className={css.container}>
                <div className={css.footer_cont}>
                    <img className={css.logo} src="./img/logo.svg" width="150px" height="65px"/>
                    <a href="#" className={css.link_secondary} >Copywright 2020 Bella Onojie.com</a>    
                </div>
            </div>
        </footer>
    )
}