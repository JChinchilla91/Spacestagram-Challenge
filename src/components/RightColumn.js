import BlogEntries from "./BlogEntries";
import PhotoCard from "./PhotoCard";


function RightColumn() {
    return (
        <div className='left-column'>
            <BlogEntries />
            <PhotoCard />
        </div>
    )
}

export default RightColumn;