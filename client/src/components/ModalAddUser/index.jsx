import { Modal } from 'antd';
import React, { useState } from 'react'
import FormAddUser from '../FormAddUser';
import { useAppContext } from '../../context';

const ModalAddUser = () => {

    const [loading, setLoading] = useState(false);

    const { showModal, setShowModal } = useAppContext();

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setShowModal(false);
            setLoading(false);
        }, 2000);
    };

    return (
        <Modal
            title="Agregar usuario"
            open={showModal}
            onOk={handleOk}
            onCancel={() => setShowModal(false)}
            okText="Agregar"
            okButtonProps={{ loading: loading }}
            cancelButtonProps={{ style: { display: "none" } }}
        >
            <FormAddUser onSubmit={loading} />
        </Modal>
    );
};

export default ModalAddUser;