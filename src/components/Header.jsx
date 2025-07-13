import globe from "../assets/globe.jpg";

const Header = () =>{
    return (
      <header>
          <img src={globe} alt="world image" className='header-logo' />
          <h1>My Travel Journal</h1>
      </header>
    );
}

export default Header;