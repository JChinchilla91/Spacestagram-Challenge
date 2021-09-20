import React from 'react';
import './assets/CreatorCard.css'

const CreatorCard = () => {

    function formattedDate() {
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${month}/${date}/${year}`
    }

    return (
        <div className='creator-card'>
           <h1>Josh</h1>
           <div className='image-text-container'>
               <img className='profile-picture' src='/aha.jpg' alt='Myself and bandmates, over a decade ago!' />
               <div className='text-container'>
                   <p className='quote'>"But I still can't focus on anything"</p>
                   <p>Male</p>
                   <p>30 years old</p>
                   <p>Bakersfield,</p>
                   <p>CALIFORNIA</p>                   
                   <p>United States</p>
                   <img className='status' src='/online-now.gif' alt='Online Now' />
                   <p>Last Login:</p>
                   <p>{formattedDate()}</p>
               </div>
           </div> 
        </div>
    )
}

export default CreatorCard;
