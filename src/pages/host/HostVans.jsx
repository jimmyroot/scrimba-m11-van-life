import React from 'react'
import { Link } from 'react-router-dom'
import HostVanDetail from './HostVanDetail'
import { getHostVans } from '../../api'

export default function HostVans() {

    const [hostVans, setHostVans] = React.useState([])

    React.useEffect(() => {
        !(async () => {
            const vans = await getHostVans()
            setHostVans(vans)
        })()
    }, [])

    const hostVanElements = hostVans.map(hostVan => (
        <Link
            to={hostVan.id}
            key={hostVan.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={hostVan.id}>
                <img src={hostVan.imageUrl} alt={`Photo of ${hostVan.name}`} />
                <div className="host-hostVan-info">
                    <h3>{hostVan.name}</h3>
                    <p>${hostVan.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
                {
                    hostVans.length > 0 ? (
                        <section>
                            {hostVanElements}
                        </section> 
                    ) : (
                        <h2>Loading...</h2>
                    )
                }
        </section>
    )
}