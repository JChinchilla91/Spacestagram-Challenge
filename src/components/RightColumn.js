import BlogEntries from "./BlogEntries";
import Comments from "./Comments";
import PhotoCard from "./PhotoCard";


function RightColumn() {
    return (
        <div className='right-column'>
            <BlogEntries />
            <PhotoCard />
            <Comments />
        </div>
    )
}

export default RightColumn;