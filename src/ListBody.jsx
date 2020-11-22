import React from "react";

const styles = {

    wrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
    },

    name: {
      fontSize: "10px"
    },
    
    description: {
      fontSize: "0.8em"
    }
};

const ListBody = ({name, description}) => (
    <div style={styles.wrapper}>
        <span style={styles.name}>{name}</span>
    </div>
);

export default ListBody;