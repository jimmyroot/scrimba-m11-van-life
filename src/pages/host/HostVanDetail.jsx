import React from 'react'
import { Link, useParams, Outlet } from 'react-router-dom'
import HostVansLayout from '../../components/HostVansLayout'
import { getVan } from '../../api'

export default function HostVanDetail() {

    const params = useParams()
    const [currentVan, setCurrentVan] = React.useState({})

    React.useEffect(() => {
        !(async () => {
            const van = await getVan(params.id)
            setCurrentVan(van)
        })()


        // fetch(`/api/host/vans/${params.id}`)
        // .then(res => res.json())
        // .then(data => setCurrentVan(data.vans[0]))
    }, [])


    return (
        <section>

            <Link to=".." relative="path" className="back-button">
                <span>&larr; Back to all vans</span>
            </Link>

            <div className="host-van-detail-layout-container">

                    <div className="host-van-detail">
                        <img src={currentVan.imageUrl} />
                        <div className="host-van-detail-info-text">
                            <i
                                className={`van-type van-type-${currentVan.type}`}
                            >
                                {currentVan.type}
                            </i>
                            <h3>{currentVan.name}</h3>
                            <h4>${currentVan.price}/day</h4>
                        </div>
                    </div>

                    <HostVansLayout currentVan={currentVan} />

                </div>
        </section>
    )
}