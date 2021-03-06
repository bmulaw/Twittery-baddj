import React from 'react';
import './Profile.css';

function Profile() {
    return (
        <div>
            <div className='profile-container'>
                <div className='profile-header'>
                    <div>
                        <img style={{width:"200px",height:"200px",borderRadius:"100px"}} 
                        src="https://www.booksie.com/files/profiles/22/mr-anonymous.png" alt=""/>
                    </div>
                    <div className='text'>
                        <div className='name'>
                            <h4>
                                Della Lin
                            </h4>
                        </div>
                        <div className='friends'>
                            <h5>
                                7 playlists &nbsp;&nbsp;|&nbsp;&nbsp; 10 friends &nbsp;&nbsp;|&nbsp;&nbsp; 3 mutual friends
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom-container'>
                <div className='main-playlist'>
                    <h4>
                        Della's Playlist
                    </h4>
                    <div className='songs'>
                        <ul>
                            <li className='song-item'>
                            1&nbsp;&nbsp;&nbsp;&nbsp;Song Name #1
                            </li>
                            <li className='song-item'>
                            2&nbsp;&nbsp;&nbsp;&nbsp;Song Name #2
                            </li>
                            <li className='song-item'>
                            3&nbsp;&nbsp;&nbsp;&nbsp;Song Name #3
                            </li>
                            <li className='song-item'>
                            4&nbsp;&nbsp;&nbsp;&nbsp;Song Name #4
                            </li>
                            <li className='song-item'>
                            5&nbsp;&nbsp;&nbsp;&nbsp;Song Name #5
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;