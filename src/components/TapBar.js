import React, { useState, useEffect } from 'react';
import './TapBar.css';

const TapBar = () => {
    const [scrollY, setScrollY] = useState(0);
    const [showTapBar, setShowTapBar] = useState(true);



    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            if (scrollY > 200) {
                setShowTapBar(false);
                setTimeout(() => {
                    setShowTapBar(true);
                }, 1000);
            } else {
                setShowTapBar(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: window.location.href
            })
            .then(() => console.log('Sharing succeeded'))
            .catch((error) => console.log('Sharing failed', error));
        } else {
            navigator.clipboard.writeText(window.location.href)
            .then(() => alert('Link copied to clipboard'))
            .catch((error) => console.error('Copy failed', error));
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const [commentCount, setCommentCount] = useState(0);
    const [favoriteCount, setFavoriteCount] = useState(0);

    const incrementCommentCount = () => {
        setCommentCount(commentCount + 1);
    };

    const incrementFavoriteCount = () => {
        setFavoriteCount(favoriteCount + 1);
    };

    return (
        <div className={`tap-bar ${showTapBar ? 'show' : 'hide'}`}>
            <button onClick={handleShare}>Поделиться</button>
            <button onClick={scrollToTop}>Вверх</button>
            <button onClick={incrementCommentCount}>💬 {commentCount}</button>
            <button className="btn-like" onClick={incrementFavoriteCount}>{favoriteCount}</button>
        </div>
    );
};

export default TapBar;
