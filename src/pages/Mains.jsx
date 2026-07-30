import Blog from './Blog';
import './mains.css';
import Schedule from './Schedule';
import Booking from './Booking';

function Mains (){
    return(
        <main>
            <Schedule />
            <Blog />
            <Booking />
        </main>

    );
}
export default Mains;