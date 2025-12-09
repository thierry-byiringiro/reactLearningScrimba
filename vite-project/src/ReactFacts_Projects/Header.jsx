import reactLogo from '../assets/react.svg'
const Header = () => {
    return (
        <>
            <header>
                    <nav>
                        <img src={reactLogo} alt="ReactLogo"/>
                        <span>ReactFacts</span>
                    </nav>
            </header>
        </>
    );
}
export default Header;