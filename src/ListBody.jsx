import React from "react";

const styles = {

    horizontal: {
      display:"inline"
    },

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
  <ul>
    <li>
      <div style={styles.wrapper}>
          <span style={styles.name}>{name}</span>
      </div>
    </li>
  </ul>
    
);

export default ListBody;