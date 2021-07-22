import useCard from "./useCard";
import Item from "../Item";

function Card({ data }) {




    return (
        <div>
            {(data.token_proto && data.buyPrice !== undefined) && (
                <div className="jumbotron container justify-content-center">
                    <Item key={`${data.token_proto}`} proto={data} />
                    <p>buying price : {data.buyPrice} </p>
                    <span> actual price : {data.actualPrice}</span>
                    <span> diff : {data.diffPrice}</span>

                </div>)
            }


        </div>
    )

}

export default Card