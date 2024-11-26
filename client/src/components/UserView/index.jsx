import React, { useState } from 'react';
import { Button } from 'antd';
import BreadcrumbTitle from '../BreadcrumbTitle';
import FilterActions from '../FilterActions';
import UserTable from '../UserTable';
import './style.css';
import ModalAddUser from '../ModalAddUser';
import ModalDeleteUser from '../ModalDeleteUser';
import ModalUpdateUser from '../ModalUpdateUser';

const UserView = () => {

    const [showModal, setShowModal] = useState(false);
    const [actionToShow, setActionToShow] = useState("");
    const [currentId, setCurrentId] = useState("");

    const openModal = (action, id) => {
        setShowModal(true);
        setActionToShow(action);
        id && setCurrentId(id);
    };

    return (
        <div className="container-user-view">
            <BreadcrumbTitle />
            <div className="container-actions">
                <div>
                    <FilterActions />
                </div>
                <div>
                    <Button type="primary" size="large" onClick={() => openModal("add")}>Agregar usuario</Button>
                </div>
            </div>
            <UserTable openModal={openModal} />
            {
                showModal &&
                    actionToShow === "add" ? <ModalAddUser showModal={showModal} hideModal={() => setShowModal(false)} />
                    :
                    actionToShow === "edit" ? <ModalUpdateUser showModal={showModal} hideModal={() => setShowModal(false)} currentId={currentId} />
                        :
                        actionToShow === "delete" ? <ModalDeleteUser showModal={showModal} hideModal={() => setShowModal(false)} currentId={currentId} />
                            :
                            null
            }
        </div>
    );
};

export default UserView;