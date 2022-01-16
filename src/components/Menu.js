import React from 'react'

export default function Menu({milkshakes}) {
    return (
        <div className="section-center">
            {milkshakes.map((menuItem) => {
                const {id, title, price, img} = menuItem;
                return <article key={id} className='menu-item'>
                    <h3 className="title">{title}</h3>
                    <img src={img} alt={title} className='photo'/>
                    <div className='item-info'>
                        <h4 className='price'>${price}</h4>
                    </div>
                </article>
            })}
        </div>
    )
}
