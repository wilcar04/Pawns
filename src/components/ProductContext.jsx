import { useQuery } from "@tanstack/react-query"
import { Outlet } from "react-router-dom"
import { getProducts } from "../api/queries"
import Loading from './Loading'

export default function ProductContext() {

    
    const { data: products, isLoading } = useQuery({
        queryKey: ['getProducts'],
        queryFn: () => getProducts()
        })
        
    if (isLoading) {
        return <Loading />
    }

    return (
        <Outlet context={products} />
    )
}