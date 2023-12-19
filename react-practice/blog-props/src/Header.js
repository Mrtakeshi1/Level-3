import Navbar from './Navbar'

function Header(){
    return(
        <div className='header-all'>
            <Navbar />
            <div className='header--main'>
                <h1 className='header--h1'>Clean Blog</h1>
                <h3 className='header--h3'>A Blog Theme by Start Bootstrap</h3>
            </div>
        </div>
        
    )
}

export default Header