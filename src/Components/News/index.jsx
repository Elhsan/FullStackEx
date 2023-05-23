import Cards from '../Cards.jsx'
import Email from '../Email.jsx'
import style from '../Cards.style.css'

function News() {
    return (
        <div className='news-section'>
            <div className='Name'>
            <img src='../../Assets/background.png'/>
            <p><b>Hellow my name Elshan</b></p>

            <h2>A fullStack Develop A posiant learn and a propblem solver</h2>
            </div>
            
            <Cards />
            <Email />

            {/* <Banner /> */}
        </div>
    );
}

export default News;