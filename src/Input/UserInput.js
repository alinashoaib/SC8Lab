import React from "react";


const UserInput = props => {
    const style = {
        border: "2px solid ",
        width: "40%",
        height: "50px"

    };
    return ( <
        input style = { style }
        type = "text"
        onChange = { props.changed }
        value = { props.currentname }
        />
    );
};

export default UserInput;