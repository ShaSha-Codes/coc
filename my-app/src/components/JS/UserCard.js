import React from 'react'
import CardsUi from './CardsUi'
import Header from './Header'
import SwipeCards from './SwipeCards'

function UserCard() {
    return (
        <div>
            <Header />
            <CardsUi />
            <SwipeCards />
        </div>
    )
}

export default UserCard