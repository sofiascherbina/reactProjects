import css from "./contactUs.module.css";
export default function ContactUs(){
    return(
             <footer>
                <h1 className={css.titleContent}>CONTACTS</h1>
                <form>
                    <div className={css.forms}>
                        <label>
                            <input className={css.forms_el} type="text" name="username" placeholder="YOUR NAME*"/>
                        </label>
                        <label>
                            <input className={css.forms_el} type="email" placeholder="YOUR E-MAIL*"/>
                        </label>
                        <label>
                            <input className={css.forms_el} type="text" placeholder="SUBJECTS"/>
                        </label>
                    </div>
                    <label>
                        <textarea className={css.comment} placeholder="YOUR MESSAGE*" rows="10"></textarea>
                    </label>
                </form>
                <button type="submit">SEND MESSAGGE</button>
            </footer>   
    )
}