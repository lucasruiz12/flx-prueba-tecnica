import React, { useEffect, useState } from 'react'
import { Modal } from 'antd';
import { useAppContext } from '../../context';
import connections from '../../connections';

const ModalDeleteUser = () => {

    const [loading, setLoading] = useState(false);
    const [userToDelete, setUserToDelete] = useState({});

    const { users, currentId, showModal, setShowModal, setUpdateTable, reloadData } = useAppContext();

    const handleOk = () => {
        setLoading(true);
        connections.deleteUser(userToDelete.id).then(response => {
            if(response.status === 200){
                setUpdateTable(true);
                setTimeout(() => {
                    setShowModal(false);
                    setLoading(false);
                    reloadData();
                }, 2000);
            };
        })
        .catch(err => console.error(err));
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