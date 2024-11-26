import { Modal } from 'antd';
import React from 'react'

const ModalUpdateUser = ({ showModal, hideModal, currentId }) => {

    const handleOk = () => {
        console.log("EDITAR", currentId);
        hideModal();
    };

    return (
        <Modal
            title="Editar usuario"
            open={showModal}
            onOk={handleOk}
            onCancel={hideModal}
            okText="Editar"
            cancelButtonProps={{ style: { display: "none" } }}
        >
            <p>EDITAR USUARIO {currentId}</p>
        </Modal>
    );
};

export default ModalUpdateUser;