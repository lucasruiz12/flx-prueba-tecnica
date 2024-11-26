import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {

    const [users, setUsers] = useState([]);
    const [usersToRender, setUsersToRender] = useState([]);
    const [currentId, setCurrentId] = useState("");
    const [showModal, setShowModal] = useState(false);

    return (
        <AppContext.Provider value={{ users, setUsers, usersToRender, setUsersToRender, currentId, setCurrentId, showModal, setShowModal }}>
            {props.children}
        </AppContext.Provider>
    );
};