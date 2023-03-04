import React from 'react'
import TinderCard from 'react-tinder-card';
// import database from '../firebase';
import '../CSS/Cards.css'

function CardsUi() {
    // const [people, setPeople] = useState([]);

    // useEffect(() => {
    //     // this is where the code run ...
    //     const unSubscribe = database.collection('people').onSnapshot(snapshot => (
    //         setPeople(snapshot.docs.map(doc => doc.data()))
    //     ));
    //     return () => {
    //         // cleanUp
    //         unSubscribe()
    //     }
    // }, [])
    //console.log(people);

    // Bad
    // const people =[];
    // people.push('sashen', 'hasindu')

    // Good
    // setPeople([...people, 'sashen', 'hasindu'])

    return (
        <div>
            <div className='card__container'>
                {/* {people.map(person => ( */}
                <TinderCard className='swipe' key={1} preventSwipe={['up', 'down']}>
                    <div style={{ backgroundImage: `url("http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik")` }} className='card'>
                        <h3>Elon Musk</h3>
                    </div>
                </TinderCard>
                {/* ))} */}
            </div>
        </div>
    )
}

export default CardsUi