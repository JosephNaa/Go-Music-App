import React from 'react'
import {Modal, ModalHeader, ModalBody} from 'reactstrap'
import CreditCardInformation from './CreditCards'

export function BuyModalWindow(prosp) {
    return (
        <Modal id="buy" tabIndex="-1" role="dialog" isOpen={props.showModal} toggle={props.toggle}>
        <div role="document">
                <ModalHeader toggle={props.toggle} className="bg-success text-white">
                    Buy Item
                </ModalHeader>
                <ModalBody>
                    <CreditCardInformation user={props.user} seperator={false} show={true} productid={props.productid} price={props.price} operation="Charge" toggle={props.toggle} />
                </ModalBody>
            </div>
        </Modal>
    )
}