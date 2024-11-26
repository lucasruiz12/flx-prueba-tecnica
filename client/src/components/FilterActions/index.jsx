import React, { useState } from 'react';
import { Input, Select, Row, Col } from 'antd';
import { useAppContext } from '../../context';

const { Search } = Input;
const { Option } = Select;

const FilterActions = () => {
    const { users, setUsersToRender } = useAppContext();
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    const handleSearch = (value) => {
        setSearchTerm(value);
        filterUsers(value, statusFilter);
    };

    const handleStatusChange = (value) => {
        setStatusFilter(value);
        filterUsers(searchTerm, value);
    };

    const filterUsers = (search, status) => {
        let filteredUsers = users;

        if (search) {
            filteredUsers = filteredUsers.filter(user =>
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.lastname.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (status) {
            filteredUsers = filteredUsers.filter(user => user.status === status);
        }

        setUsersToRender(filteredUsers);
    };

    return (
        <div className="container-filters">
            <Row gutter={16}>
                <Col span={8}>
                    <Search
                        placeholder="Buscar por nombre o apellido"
                        onSearch={handleSearch}
                        onChange={(e) => handleSearch(e.target.value)}
                        value={searchTerm}
                        allowClear
                    />
                </Col>
                <Col span={8}>
                    <Select
                        placeholder="Filtrar por estado"
                        value={statusFilter}
                        onChange={handleStatusChange}
                        style={{ width: '100%' }}
                        allowClear
                    >
                        <Option value="">Filtrar por estado</Option>
                        <Option value="active">Activo</Option>
                        <Option value="inactive">Inactivo</Option>
                    </Select>
                </Col>
            </Row>
        </div>
    );
};

export default FilterActions;
