import React from 'react';
import './assets/BlogEntries.css'

function BlogEntries() {
    return (
        <div>
            <div className='ext-network'>
                <h2>Josh is in your extended network</h2>
            </div>
            <div className='blog-entries'>
                <h3>Josh's Latest Blog Entry <a href='/'>[Subscribe to this Blog]</a></h3>
                <p>Embarrasing High School Ramblings <a href='/'>(view more)</a></p>
                <p>Embarrasing High School Ramblings <a href='/'>(view more)</a></p>
                <p>Embarrasing High School Ramblings <a href='/'>(view more)</a></p>
                <p>Embarrasing High School Ramblings <a href='/'>(view more)</a></p>
                <a href='/'>[View all Blog Entries]</a>
            </div>
        </div>
    )
}

export default BlogEntries;