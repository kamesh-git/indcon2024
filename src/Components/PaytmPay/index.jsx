import React, { useEffect } from 'react'
import { DemoApp } from './Functions';

const PaytmPay = () => {
    useEffect(() => {
        // set merchant properties
        DemoApp.setInitialParameters();
        // Example using only mandatory fields
        DemoApp.createTxnTokenwithRequiredParams()
            // Example using mandatory and enabling and disabling payment modes fields
            // .then(() => DemoApp.createTxnTokenwithPaytmSSotokenAndPaymentMode())
            // Example using all fields
            // .then(() => DemoApp.createTxnTokenwithAllParams())
            // Example of get payment status
            .then(() => DemoApp.getPaymentStatus())
            // Example of refund
            // .then(() => DemoApp.initiateRefund())
            // Example of get refund status
            // .then(() => DemoApp.getRefundStatus());
    }, [])
    return (
        <div>PaytmPay</div>
    )
}

export default PaytmPay