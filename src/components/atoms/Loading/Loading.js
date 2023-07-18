import React from "react";
import LoadingAnimation from "react-spinners/BarLoader";

function Loading() {
    return (
        <LoadingAnimation
            size={150}
            color={"#123abc"}
            loading={true}
        />
    );
}

export default Loading;