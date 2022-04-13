import { alpha, makeStyles } from "@material-ui/core";

export default makeStyles(( theme) => ({
    title: {
        display: 'none',
        [ theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': { backgroundColor:  alpha(theme.palette.common.white, 0.25)},
        marginRight: theme.spacing(2),
        width: '100%',
        [ theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: "auto" },
    },
    searchIcon: {
        padding: theme.spacing(1, 2), height: '100%', position: 'absolute', pointerEvents: 'none', 
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 6), paddingLeft: 'calc(1em + ${theme.spacing(4)}px)',
    },
    toolbar: {
        dispaly: 'flex', justifyContent: "space-between",
    },
}))