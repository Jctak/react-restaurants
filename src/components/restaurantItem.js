import React from "react";

const RestNames = props => {
    const { rName } = props;
    console.log(rName);
    return (
        <>
            {Object.keys(rName).map((name, index) => (
                <ul key={`ul-rName-${index}`}>
                    <li key={`li-rName-${index}`}>{name}</li>
                    {rName[name].map(menu => {
                        return (
                            <ul key={`ul-menu-${index}`}>
                                <li key={`li-menu-${index++}`}>{menu}</li>
                            </ul>
                        );
                    })}
                </ul>
            ))}
        </>
    );
};

export default RestNames;
