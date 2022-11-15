import React from 'react'

import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        < div className='container-fluid' >
            <div className='row'>
                <div className='col-lg-2'>
                    <Link>
                        Image
                    </Link>
                </div>

            </div>
        </div >
    )
}
