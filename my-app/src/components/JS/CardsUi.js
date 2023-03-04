import React from 'react'
import TinderCard from 'react-tinder-card';
// import database from '../firebase';
import '../CSS/Cards.css'

function CardsUi(props) {
    const [lastDirection, setLastDirection] = React.useState();
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
    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete+" "+direction)
        setLastDirection(direction)
      }

    return (
        <div>
            <div className='card__container'>
                {/* {people.map(person => ( */}
                <TinderCard className='swipe' onSwipe={(dir) => swiped(dir, props.data.name)} key={1} preventSwipe={['up', 'down']}>
                    <div style={{ backgroundImage: `url(${props.data.photourl})` }} className='card'>
                        <h3>{props.data.name}</h3>
                    </div>
                </TinderCard>
                {/* ))} */}
            </div>
        </div>
    )
}

export default CardsUi