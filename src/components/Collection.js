import { useState, useEffect } from 'react'
import Item from './Item'
import '../styles/Collection.css'
import { Spinner } from 'react-bootstrap'
import { getAllProtos } from '../utils/apiCalls'
import { SearchWrapper } from '../styles/GlobalStyle'

function Collection({ showPopup, setPopup }) {
    const [allProtos, setAllProtos] = useState([])
    const [isLoading, setLoading] = useState(false);
    const [searchParam, setSearchParam] = useState("");


    async function initPage() {
        setLoading(true)
        const myProtos = await getAllProtos();
        setAllProtos(myProtos)
        setLoading(false)
    }

    useEffect(() => {
        initPage();
    }, [])


    const handleInput = (e) => {
        setSearchParam(e.target.value.toLowerCase())
    }

    return (
        <>
            <SearchWrapper className="container d-flex justify-content-center">
                <input type="text" placeholder="Search a card" onChange={handleInput} />
            </SearchWrapper>
            {isLoading ? <div className="container d-flex justify-content-center">
                <Spinner animation="grow" /> </div> :
                <ul className="list-unstyled">
                    <div className="row">
                        {allProtos.map((proto) => (

                            JSON.parse(proto.metadata).name.toLowerCase().includes(searchParam) && <Item key={`${proto.token_proto}`} proto={proto} />
                        ))}
                    </div>
                </ul>
            }
        </>

    )
}

export default Collection