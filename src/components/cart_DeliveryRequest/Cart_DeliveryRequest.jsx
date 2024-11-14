import React, { useEffect } from 'react';


function Cart_DeliveryRequest({headerImageHandler, pageTitleHandler}) {
    useEffect(() => {
        headerImageHandler();
        pageTitleHandler();
    }, []);



    return (
        <div>


        </div>
    );
}


export default Cart_DeliveryRequest;
