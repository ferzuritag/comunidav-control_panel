import React from 'react'
import '../index.css'
import like from './Logo.svg'
export const Banner = () => {
    return (
        <div className = 'banner'>
            <a href = 'https://comunidav.org/' target = '_blank'><img src = {like} className = 'logo' /></a>
        </div>
    )
}
