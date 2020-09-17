import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Training outdoor!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='images/out.jpg'
                            text="Explore your limits inside nature"
                            label='Adventure'
                            path='/Services'
                        />

                        <CardItem
                            src='images/95.jpg'
                            text="Test test "
                            label='Adventure'
                            path='/Services'
                        />


                    
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='images/out.jpg'
                            text="Explore your limits inside nature"
                            label='Adventure'
                            path='/Services'
                        />

                        <CardItem
                            src='images/95.jpg'
                            text="Test test "
                            label='Adventure'
                            path='/Services'
                        />


                        <CardItem
                            src='images/cross.jpeg'
                            text="Explore your limits inside nature"
                            label='Adventure'
                            path='/Services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
