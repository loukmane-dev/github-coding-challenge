import React from 'react'

export default function Repository({repositories}) {
    return (
        <div>
           { repositories.map(p=> 
                <p>{p.id}</p>
            )}
        </div>
    )
}