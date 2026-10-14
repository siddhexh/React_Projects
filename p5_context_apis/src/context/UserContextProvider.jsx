import { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = (children) => {

    const [user, setUser] = useState(null);     
    // you can create as many states as possible and pass them as value in provider...

    return (
        <UserContext.Provider value={{user, setUser}}>
          {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;