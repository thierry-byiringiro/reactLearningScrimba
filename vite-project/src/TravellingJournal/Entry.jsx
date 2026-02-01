import map from '../assets/map.png'
import japan from '../assets/japan.png'
const Entry = () => {
    return (
        <div className='light'>
            <div><img src={japan} alt="mount fuji picture" />
            </div>
            <div className='save'>
                <div className='top'>
                    <div>Japan</div>
                    <div>
                        <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1
                            s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m
                            2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google maps
                        </a>
                    </div>
                </div>
                <div><p>Mount Fuji</p></div>
                <div><p>12 Jan, 2021 - 24 Jan, 2021</p></div>
                <div className='div'>
                    <p>
                        Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Entry;
