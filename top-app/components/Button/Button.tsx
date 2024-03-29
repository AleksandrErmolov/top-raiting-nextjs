import { ButtonProps } from './Button.props'
import styles from './Button.module.css'
import ArrowIcon from './arrow.svg'
import cn from 'classnames'

export const Button = ({ children, appearance, className, arrow = 'none', ...props }: ButtonProps): JSX.Element => {

    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost',

            })}
            {...props}



        // Можно так   
        // className={cn(styles.button, className, styles[appearance]
        // )}
        // {...props}


        >
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down'
            })}>
                <ArrowIcon />
            </span>}
        </button>
    )

}
