import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import PuffLoader from "react-spinners/PuffLoader";

function Loading() {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 8000)
    }, []) 
  return (
    <div>
       <PuffLoader

            color={"#a07e96"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
    </div>
  )
}

export default Loading
