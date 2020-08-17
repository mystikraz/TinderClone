import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase'
import './TinderCards.css';

const TinderCards = () => {
    const [people, setPeople] = useState([]);

    const unsubscribe = useEffect(() => {
        database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
        return () => {
            //this is the clean up...
            // unsubscribe();
        }
    }, [])
    //const people=[];
    //BAD
    // people.push('sunny', qazi)
    //GOOD(Push to an array in REACT)
    // setPeople([...people, 'sunny', qazi]);

    return (
        <div className="tinderCards__cardContainer">
            <h1>Tinder cards</h1>
            {people.map((person) => {
                return <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                >
                    <div
                        style={{ backgroundImage: `url(${person.url})` }}
                        className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            })}
        </div>
    );
}

export default TinderCards;
