import classes from './Card.module.css';

const Card = props => {
    return (
        <div className={classes.card}>
            <div className={classes.header}>{props.headerText}</div>
            <div>{props.children}</div>
        </div>
    )
}

export default Card;