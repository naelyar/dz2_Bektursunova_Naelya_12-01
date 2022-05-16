import  classes from "./Header.module.css"



 export const Header = () => {
    return (
        <ul className={classes.header}>
            <li className={classes.lishki}> Home</li>
            <li className={classes.lishki}>About</li>
            <li className={classes.lishki}>Contacts</li>
            <li className={classes.lishki}> Log in</li>

        </ul>
    )
}