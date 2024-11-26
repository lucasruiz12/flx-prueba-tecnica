import React from 'react';
import { Breadcrumb } from 'antd';

const BreadcrumbTitle = () => {

    const breadcrumbItems = [
        {
            title: "Usuarios",
        },
        {
            title: "Listado de usuarios",
        },
    ];
    
    return (
        <Breadcrumb items={breadcrumbItems} />
    );
};

export default BreadcrumbTitle;