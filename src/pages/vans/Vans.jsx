import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getVans } from '../../api'

export default function Vans() {

    const [vans, setVans] = React.useState([])

    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get('type')
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        
        (async () => {
            setIsLoading(true)

            try {
                const vans = await getVans()
                setVans(vans)
            }
            catch (err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
            
        })()
        
    }, [])

    const vansToDisplay = typeFilter ? 
        vans.filter(van => van.type.toLowerCase() === typeFilter) :
        vans

    const vanElements = vansToDisplay.map(van => (
        <Link key={van.id} to={van.id} state={{ 
                queryString: `?${searchParams.toString()}`,
                queryType: typeFilter
                }}>   
            <div className="van-tile">
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
        </Link>
    ))

    if (isLoading) return (<h1>Loading...</h1>)
    if (error) return (<h1>{error.message}</h1>)

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            
            <div className="van-list-filter-buttons">
                    <button
                        className={`van-type simple ${typeFilter === 'simple' ? 'selected' : null}`}
                        onClick={() => setSearchParams({type: 'simple'})}>Simple</button>
                    <button
                        className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : null}`}
                        onClick={() => setSearchParams({type: 'rugged'})}>Rugged</button>
                    <button
                        className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : null}`}
                        onClick={() => setSearchParams({type: 'luxury'})}>Luxury</button>
                    {
                        typeFilter ? 
                            (<button
                                className="van-type clear-filters"
                                onClick={() => setSearchParams({})}>Clear</button>) :
                            null}
                    {/* <button onClick={() => setSearchParams({})>Clear</button> */}
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}