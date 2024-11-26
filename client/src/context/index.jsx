import { createContext, useContext, useState } from "react";
import connections from "../connections";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {

    const [users, setUsers] = useState([]);
    const [usersToRender, setUsersToRender] = useState([]);
    const [currentId, setCurrentId] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [updateTable, setUpdateTable] = useState(false);
    const [loadingLogo, setLoadingLogo] = useState(false);

    const reloadData = () => {
        setLoadingLogo(true);
        connections.getUsers().then(response => {
            if (response.status === 200) {
                const usersWithKey = response.data.map(el => {
                    return {
                        ...el,
                        key: el.id,
                    };
                });
                setUsers(usersWithKey);
                setUsersToRender(usersWithKey);
                setUpdateTable(false);
                setTimeout(() => {
                    setLoadingLogo(false);
                }, 2000);
            }
        })
    }

    return (
        <AppContext.Provider value={{ users, setUsers, usersToRender, setUsersToRender, currentId, setCurrentId, showModal, setShowModal, updateTable, setUpdateTable, loadingLogo, setLoadingLogo, reloadData }}>
            {props.children}
        </AppContext.Provider>
    );
};