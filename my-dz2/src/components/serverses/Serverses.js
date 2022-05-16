import classes from "./Serverses.module.css"
export const Serverses = (props) => {
    return(
       
        <ul  className={classes.serul} >
            {props.servises.map ((el, key) =>{
                return <li className={classes.link}>{el}</li>
            })}
        </ul>
    )
     
}

 