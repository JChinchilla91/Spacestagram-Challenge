import CreatorCard from "./CreatorCard.js"
import ContactBox from './ContactBox'
import Interests from "./Interests.js";

function LeftColumn() {
    return (
        <div className='left-column'>
            <CreatorCard />
            <ContactBox />
            <Interests />

        </div>
    )
}

export default LeftColumn;