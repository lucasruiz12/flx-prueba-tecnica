import { Modal } from 'antd';
import React from 'react'

const ModalDeleteUser = ({ showModal, hideModal, currentId }) => {

    const handleOk = () => {
        console.log("ELIMINAR", currentId);
        hideModal();
    };

    return (
        <Modal
            title="Eliminar usuario"
            open={showModal}
            onOk={handleOk}
            onCancel={hideModal}
            okText="Eliminar"
            cancelText="Cancelar"
            okButtonProps={{ danger: true }}
        >
            <p>ELIMINAR USUARIO {currentId}</p>
        </Modal>
    );
};

export default ModalDeleteUser;