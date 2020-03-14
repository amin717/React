import React from 'react'
import KidsSvg from './kidsSvg';
import './kids.css';

function ImageList({ items, width_img, height_img }) {
    return (
        items.map((item, index) => {
            const { poster, title } = item;
            return (
                <div className="item">
                    <div className="item_poster">
                        <a href="#">
                            <img src={(`${poster}`)} alt={title} className='fake_img' />
                            <KidsSvg width_img={width_img} height_img={height_img}
                                item={item} index={index} />
                        </a>
                    </div>
                    <div className="item_title">
                        <p>{title}</p>
                    </div>
                </div>
            );
        })
    )
}

export default ImageList
