import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60'
export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",  //Google Font
            textTransform: "none",  //To lowerCase 
            fontWeight: "700",
            fontSize: "1rem",       //Responsive FontSize For NavLinks
        },
        estimate: {
            fontFamily: "Pacifico",
            textTransform: "none",
            fontSize: "1rem",
            color: "white"
        }
    }
    
})