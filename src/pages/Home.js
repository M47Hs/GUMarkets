import { useState, useEffect } from 'react'
import Collection from "../components/Collection"
import Popup from '../components/Popup'
import { fetchProtoCollection } from '../utils/getProtoCollection'

function Home() {

    const [showPopup, setPopup] = useState(false);
    const [popupCard, setPopupCard] = useState(null)

    console.log(popupCard)

    return (
        <div className="container">
            <Collection showPopup={showPopup} setPopup={setPopup} popupCard={popupCard} setPopupCard={setPopupCard} loadCollection={fetchProtoCollection} />
            {showPopup ?
                <Popup showPopup={showPopup} setPopup={setPopup} popupCard={popupCard} />
                : null}

        </div>
    )
}

export default Home