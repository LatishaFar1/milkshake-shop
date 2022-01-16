import React from 'react'

export default function Categories({filterMilkshakes}) {
    return (
        <div className="btn-container">
           <button className="filter-btn" onClick={()=> filterMilkshakes("Fruit")}>Fruit</button>
           <button className="filter-btn" onClick={()=> filterMilkshakes("Dessert")}>Dessert</button>
        </div>
    )
}
