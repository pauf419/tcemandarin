import { useEffect} from 'react'

export const usePagination = (pageState, callback) => {
    useEffect(() => {
        callback()
    }, [pageState])
}
