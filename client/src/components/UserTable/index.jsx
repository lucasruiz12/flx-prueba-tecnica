import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { useAppContext } from '../../context';
import connections from '../../connections';

const UserTable = ({ openModal }) => {

    const { users, setUsers } = useAppContext();

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

    useEffect(() => {
        if (users.length === 0) {
            connections.getUsers().then(response => {
                // El componente Table de ANTD pide key para cada elemento. Se agrega key para evitar problemas en consola.
                // Funciona igualmente sin este useEffect, pero se realiza para mejor funcionamiento.
                const usersWithKey = response.data.map(el => {
                    return {
                        ...el,
                        key: el.id
                    }
                });
                setUsers(usersWithKey);
            })
                .catch(err => console.error(err));
        };
    }, [users]);

    return (
        <Table columns={columns} dataSource={users} />
    );
}

export default UserTable;