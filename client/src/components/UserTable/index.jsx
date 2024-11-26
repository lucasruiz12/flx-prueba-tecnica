import React, { useEffect } from 'react';
import { notification, Space, Table, Tag } from 'antd';
import { useAppContext } from '../../context';
import connections from '../../connections';
import LoadingLogo from '../LoadingLogo';

const UserTable = ({ openModal, actionToShow }) => {

    const { users, setUsers, usersToRender, setUsersToRender, updateTable, loadingLogo, setLoadingLogo, reloadData } = useAppContext();

    const columns = [
        {
            title: 'Usuario',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Apellido',
            dataIndex: 'lastname',
            key: 'lastname',
        },
        {
            title: 'Estado',
            dataIndex: 'status',
            key: 'status',
            render: (text) => {
                let color = "green";
                if (text === "inactive") {
                    color = "red"
                };
                return (
                    <Tag color={color} key={text}>
                        {text === "active" ? "Activo" : "Inactivo"}
                    </Tag>
                )
            },
        },
        {
            title: 'Acciones',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => openModal("edit", record.id)}>Editar</a>
                    <a onClick={() => openModal("delete", record.id)}>Eliminar</a>
                </Space>
            ),
        },
    ];

    const openNotification = () => {

        let message;
        let description;

        switch (actionToShow) {
            case "add":
                message = "Usuario agregado";
                description = "Agregaste correctamente un usuario a la base de datos";
                break;
            case "edit":
                message = "Usuario actualizado";
                description = "Actualizaste correctamente un usuario de la base de datos";
                break;
            case "delete":
                message = "Usuario eliminado";
                description = "Eliminaste correctamente un usuario de la base de datos";
                break;
            default:
                break;
        };

        notification.success({
            message,
            description,
        });
    };

    useEffect(() => {
        if (users.length === 0) {
            connections.getUsers().then(response => {
                // El componente Table de ANTD pide key para cada elemento. Se agrega key para evitar problemas en consola.
                // Funciona igualmente sin este useEffect, pero se realiza para mejor funcionamiento.
                const usersWithKey = response.data.map(el => {
                    return {
                        ...el,
                        key: el.id
                    };
                });
                setUsers(usersWithKey);
                setUsersToRender(usersWithKey);
            })
                .catch(err => console.error(err));
        };
    }, [users]);

    useEffect(() => {
        if (updateTable) {
            setTimeout(() => {
                setLoadingLogo(false);
                reloadData();
                openNotification();
            }, 2000);
        };
    }, [updateTable]);

    return (
        loadingLogo ?
            <LoadingLogo />

            :

            <Table columns={columns} dataSource={usersToRender} />
    );
}

export default UserTable;