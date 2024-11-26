import React, { useState } from 'react';
import { useAppContext } from '../../context';
import { Button } from 'antd';
import BreadcrumbTitle from '../BreadcrumbTitle';
import FilterActions from '../FilterActions';
import UserTable from '../UserTable';
import ModalAddUser from '../ModalAddUser';
import ModalDeleteUser from '../ModalDeleteUser';
import ModalUpdateUser from '../ModalUpdateUser';
import './style.css';

const UserView = () => {
    const [actionToShow, setActionToShow] = useState("");
    const { setCurrentId, showModal, setShowModal } = useAppContext();

    const openModal = (action, id) => {
        setShowModal(true);
        setActionToShow(action);
        id && setCurrentId(id);
    };

    return (
        <div className="container-user-view">
            <BreadcrumbTitle />
            <div className="container-actions">
                <div style={{width: "80%"}}>
                    <FilterActions />
                </div>
                <div>
                    <Button type="primary" size="large" onClick={() => openModal("add")}>Agregar usuario</Button>
                </div>
            </div>
            <UserTable openModal={openModal} />
            {
                showModal &&
                    actionToShow === "add" ? <ModalAddUser />
                    :
                    actionToShow === "edit" ? <ModalUpdateUser />
                        :
                        actionToShow === "delete" ? <ModalDeleteUser />
                            :
                            null
            }
        </div>
    );
};

export default UserView;