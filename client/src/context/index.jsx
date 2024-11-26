import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {

    const [users, setUsers] = useState([]);

    return (
        <AppContext.Provider value={{ users, setUsers }}>
            {props.children}
        </AppContext.Provider>
    );
};