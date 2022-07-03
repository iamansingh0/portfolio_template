// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Aman Kumar Singh" />

            <div className='header__content'>
                <h1>Hi, I'm Aman Kumar</h1>
                <p>Blockchain Developer</p>
                <button className='button'>Contact Me</button>
            </div>
        </section>
    );
}

export default Header;