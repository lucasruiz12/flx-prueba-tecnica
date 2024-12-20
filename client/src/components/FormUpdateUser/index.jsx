import React, { useEffect } from 'react';
import { Form, Input, Select, InputNumber } from 'antd';
import { useAppContext } from '../../context';
import connections from '../../connections';

const { Option } = Select;

const FormUpdateUser = ({ onSubmit, user }) => {
    const [form] = Form.useForm();

    const { setUpdateTable } = useAppContext();

    const handleFinish = (values) => {
        connections.updateUser(user.id, values).then(response => {
            if(response.status === 200){
                setUpdateTable(true);
            };
        })
            .catch(err => console.error(err));
    };

    useEffect(() => {
        if (onSubmit) {
            form.submit();
        };
    }, [onSubmit]);

    useEffect(() => {
        if (user) {
            form.setFieldsValue({
                username: user.username,
                email: user.email,
                name: user.name,
                lastname: user.lastname,
                status: user.status,
                age: user.age,
            });
        };
    }, [user])

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={handleFinish}
            autoComplete="off"
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1.5rem",
                marginTop: "4vh",
            }}
        >
            <Form.Item
                label="Usuario"
                name="username"
                rules={[{ required: true, message: 'Por favor ingresa un usuario.' }]}
            >
                <Input placeholder="Ingresa el usuario" />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    { required: true, message: 'Por favor ingresa un correo electrónico.' },
                    { type: 'email', message: 'Por favor ingresa un correo válido.' },
                ]}
            >
                <Input placeholder="Ingresa el correo electrónico" />
            </Form.Item>
            <Form.Item
                label="Nombre"
                name="name"
                rules={[{ required: true, message: 'Por favor ingresa un nombre.' }]}
            >
                <Input placeholder="Ingresa el nombre" />
            </Form.Item>
            <Form.Item
                label="Apellido"
                name="lastname"
                rules={[{ required: true, message: 'Por favor ingresa un apellido.' }]}
            >
                <Input placeholder="Ingresa el apellido" />
            </Form.Item>
            <Form.Item
                label="Estado"
                name="status"
                rules={[{ required: true, message: 'Por favor selecciona un estado.' }]}
            >
                <Select placeholder="Selecciona un estado">
                    <Option value="active">Activo</Option>
                    <Option value="inactive">Inactivo</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="Edad"
                name="age"
                rules={[
                    { required: true, message: 'Por favor ingresa una edad.' },
                    { type: 'number', min: 0, message: 'La edad debe ser un número válido mayor o igual a 0.' },
                ]}
            >
                <InputNumber placeholder="Ingresa la edad" style={{ width: '100%' }} />
            </Form.Item>
        </Form>
    );
};

export default FormUpdateUser;
