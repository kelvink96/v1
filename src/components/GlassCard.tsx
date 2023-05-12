import {createStyles, Paper, PaperProps} from "@mantine/core";
import {ReactNode} from "react";

const useStyles = createStyles((theme) => ({
    card: {
        backdropFilter: 'blur(16px) saturate(180%)',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        boxShadow: theme.shadows.md
    }
}))

interface IProps extends PaperProps {
    children: ReactNode
}

const GlassCard = ({children, ...rest}: IProps) => {
    const {classes} = useStyles()

    return (
        <Paper className={classes.card} {...rest} withBorder>
            {children}
        </Paper>
    );
};

export default GlassCard;
