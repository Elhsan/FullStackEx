import Card2 from './Card2.jsx'
import Cards from './Cards';
import './style2.scss'
import { Button } from 'react-bootstrap';

function tablesCarsd(props) {
    const tablesCarsd = [
        {
            id: 1,

            title: 'Главные турниры октября',
            subtitle: 'FURIA представила помощника тренера. Отныне tacitus...',
            owner: {

                name: 'Максим Рихтер',
                date: '12.10.2021',
                views: '1,2k'
            }
        },
        {
            id: 2,

            title: 'Lorem test text 2',
            subtitle: 'FURIA представила помощника тренера. Отныне tacitus...',
            owner: {

                name: 'Максим Рихтер',
                date: '12.10.2021',
                views: '1,2k'
            }
        },
        {
            id: 3,

            title: 'This is 3rd title',
            subtitle: 'FURIA представила помощника тренера. Отныне tacitus...',
            owner: {

                name: 'Максим Рихтер',
                date: '12.10.2021',
                views: '1,2k'
            }
        },
        {
            id: 4,

            title: 'Главные турниры октября',
            subtitle: 'FURIA представила помощника тренера. Отныне tacitus...',
            owner: {

                name: 'Максим Рихтер',
                date: '12.10.2021',
                views: '1,2k'
            }
        },
    ]
    return (
        <div className='tablesCarsd'>
            {tablesCarsd.map((card, index) => {
                return (

                        <Card2 key={index} card={card} />
            
                )
            })}
        </div>
    );
}

export default tablesCarsd;