import React from 'react';

const PostingCard = () => {
    return (
        <div>
            <div className="userHeader">
                <img src={''} alt='user'/>
                <span>닉네임</span>
            </div>
            <div className='postingBody'>
                <img src='' alt='img'/>
                <p>포스팅 제목</p>
                <p>포스팅 요약</p>
            </div>


        </div>
        
    );
};

export default PostingCard;