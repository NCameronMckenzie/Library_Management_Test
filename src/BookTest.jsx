import React, { PureComponent } from "react";
const styles = {

    Rows: {
        display: "inline-block"
    },

    Rect2: {
        width: "126px",
        height: "220px",
        backgroundColor: "rgba(202,42,42,1)",
        flexDirection: "column",
        margin: "10px",
        display: "flex"
    },

    BookTitle: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        color: "#121212",
        margin: "auto"
    },

    Rect: {
        width: "126px",
        height: "194px",
        backgroundColor: "#E6E6E6",
        borderWidth: "0px",
        borderColor: "#000000",
        borderRadius: "11px",
        marginTop: "0px",
        marginLeft: "0px",
        borderStyle: "solid",
        boxShadow: "5px 5px 4px  0.2px rgba(0,0,0,.3)"
    }

};

export default class BookTest extends PureComponent {
    render(){
        return (
            <div style = {styles.Rows}>
                <div style = {styles.Rect2}>
                    <div style = {styles.Rect}></div>
                    <div style = {styles.BookTitle}>&quot;Book Title&quot;</div>
                </div>
            </div>
            
        );
    }
}
