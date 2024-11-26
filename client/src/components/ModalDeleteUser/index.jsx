import React, { useEffect, useState } from 'react'
import { Modal } from 'antd';
import { useAppContext } from '../../context';

const ModalDeleteUser = () => {

    const [loading, setLoading] = useState(false);
    const [userToDelete, setUserToDelete] = useState({});

    const { users, currentId, showModal, setShowModal } = useAppContext();

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            console.log("ELIMINANDO", userToDelete);
            setShowModal(false);
            setLoading(false);
        }, 2000);
    };

    useEffect(() => {
        setUserToDelete(users.find(el => el.id === currentId));
    }, [currentId]);

    return (
        <Modal
            title="Eliminar usuario"
            open={showModal}
            onOk={handleOk}
            onCancel={() => setShowModal(false)}
            okText="Eliminar"
            cancelText="Cancelar"
            okButtonProps={{ danger: true, loading: loading }}
        >
            <p>¿Está seguro que quiere eliminar el usuario <b style={{ color: "red" }}>@{userToDelete.username}</b>?</p>
        </Modal>
    );
};

export default ModalDeleteUser;