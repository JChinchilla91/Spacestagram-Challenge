import CreatorCard from "./CreatorCard.js"
import Interests from "./Interests.js";

function LeftColumn() {
    return (
        <div className='left-column'>
            <CreatorCard />
            <Interests />

        </div>
    )
}

export default LeftColumn;