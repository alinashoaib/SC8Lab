import React from "react";


const UserOutput = props => {

    const style = {
        margin: "20px auto",
        padding: "25px",
        height: "25px",
        width: "40%",
        border: "1px solid black"
    };
    return ( <
        div className = "UserOutputStyle" >
        <
        p > My name is { props.name } < /p>  < /
        div >
    );
};

export default UserOutput;