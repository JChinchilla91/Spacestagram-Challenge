import React from 'react';
import './assets/ContactBox.css'

const ContactBox = () => {
    return (
        <div className='left-column-container'>
            <div className='left-column-title'>
                <h2 className='whitetext12'>Contacting Josh</h2>
            </div>
            <div className='icon-container'>
                <a href='mailto: joshuachinchilla91@gmail.com'><img src='/sendMailIcon.gif' alt='Send Message'/></a>
                <a href='/'><img src='/forwardMailIcon.gif' alt='Forward to Friend'/></a>
                <a href='/'><img src='/addFriendIcon.gif' alt='Add to Friends'/></a>
                <a href='/'><img src='/AddFavoritesIcon.gif' alt='Add to Favorites'/></a>
                <a href='/'><img src='/messagefriend.gif' alt='Instant Message'/></a>
                <a href='/'><img src='/blockuser.gif' alt='Block User'/></a>
                <a href='/'><img src='/icon_add_to_group.gif' alt='Add to Group'/></a>
                <a href='/'><img src='/icon_rank_user4.gif' alt='Rank User'/></a>
            </div>
        </div>
    )
}

export default ContactBox;