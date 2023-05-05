import React from 'react';

const ErrorPage = () => {
    // const error = useRouteError()
    // console.log(error);
    return (
        <div className='text-center pt-48'>
            <h1 className='text-7xl font-bold '>Opps</h1>
            <h1 className='text-3xl font-bold py-10'>ERROR</h1>
            <h2 className='text-xl font-bold'>404 NOT FOUND</h2>
        </div>
    );
};

export default ErrorPage;