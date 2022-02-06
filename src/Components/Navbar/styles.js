import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 0,
        margin: '0 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '1500px',

    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: "20px"
    }
}))
export default useStyles;