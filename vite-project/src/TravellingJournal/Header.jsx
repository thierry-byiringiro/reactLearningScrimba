import global from '../assets/Globe.png';

const Header = () => {
    return (
        <div className='matter'>
            <img src={global} alt="The global object" />
            <p>my travel journal.</p>
        </div>
    );
}

export default Header;