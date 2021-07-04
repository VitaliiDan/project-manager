import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderWrapper = () => {
    return (
        <div className='loaderWrapper'>
            <Loader
                type="Puff"
                color="#4DB5FF"
                height={100}
                width={100}
            />
        </div>
    )
}

export default LoaderWrapper;