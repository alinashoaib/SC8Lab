import React from "react";


const UserInput = props => {
    const style = {
        border: "2px solid ",
        width: "60%",
        height: "50px",
        padding: "16px",
        margin: "16px"


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