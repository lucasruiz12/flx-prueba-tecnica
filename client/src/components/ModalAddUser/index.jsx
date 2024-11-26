import { Modal } from 'antd';
import React from 'react'

const ModalAddUser = ({ showModal, hideModal }) => {

    const handleOk = () => {
        console.log("AGREGAR");
        hideModal();
    };

    return (
        <Modal
            title="Agregar usuario"
            open={showModal}
            onOk={handleOk}
            onCancel={hideModal}
            okText="Agregar"
            cancelButtonProps={{ style: { display: "none" } }}
        >
            <p>AGREGAR USUARIO</p>
        </Modal>
    );
};

export default ModalAddUser;