import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context';
import { Modal } from 'antd';
import FormUpdateUser from '../FormUpdateUser';

const ModalUpdateUser = () => {

    const [loading, setLoading] = useState(false);
    const { users, currentId, showModal, setShowModal } = useAppContext();

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setShowModal(false);
            setLoading(false);
        }, 2000);
    };

    return (
        <Modal
            title="Editar usuario"
            open={showModal}
            onOk={handleOk}
            onCancel={() => setShowModal(false)}
            okText="Editar"
            okButtonProps={{ loading: loading }}
            cancelButtonProps={{ style: { display: "none" } }}
        >
            <FormUpdateUser onSubmit={loading} user={users.find(el => el.id === currentId)} />
        </Modal>
    );
};

export default ModalUpdateUser;