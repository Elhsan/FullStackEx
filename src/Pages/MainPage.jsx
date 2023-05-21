import News from "../Components/News/index.jsx";
import Tablecard from "../Components/News/index2.jsx";
import mainStyle from '../Assets/styles/home.css'

function MainPage(props) {
    return (
        <header style={mainStyle}>
            <main>
                <News />
                <Tablecard />
            </main>
        </header>
    )
}

export default MainPage