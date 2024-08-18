import './header.scss';

const Header = () => {
  return (
    <header className='header_container'>
      <div className='header_desc'>
        <div className='header_logo'></div>
        <div >Abstract &nbsp;|</div>
        <div > Help Center</div>
      </div>
      <button className='header_button'>
        Submit a request
      </button>
    </header>
  )
}

export default Header