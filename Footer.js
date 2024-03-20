import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './Footer.css'

const Footer= ()=>{

    const Scto = ()=>{
        window.scrollTo(0,0);
    }
    return(
        <>
        <div className="Footer">
           <a> <div className="FooterBottomToTop">
              <KeyboardArrowUpIcon/>
            </div></a>
            <div className="FooterVerRow">
                <div className="FooterVerCol">
                    <div className="FooterVerColHead">
                        Get To Know More
                    </div>
                    <ul>
                        <li>About</li>
                        <li>Services</li>
                        <li>Amazon Cares</li>
                        <li>Gift Products</li>
                    </ul>
                </div>
                <div className="FooterVerCol">
                    <div className="FooterVerColHead">
                        Connect To Us
                    </div>
                    <ul>
                        <li>Meta</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>GitHub</li>
                    </ul>
                </div>
                <div className="FooterVerCol">
                    <div className="FooterVerColHead">
                        Make Money
                    </div>
                    <ul>
                        <li>Amazon Pay</li>
                        <li>Become An Affiliated</li>
                        <li>Sell On Amazon</li>
                        <li>Easy Coding</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="FooterLast">
                <span className="FooterMess">
                   Amazon Clone &copy; Easy Coding Tutorial
                </span>
            </div>
        </div>
        </>
    )
}
export default Footer;