import React, { PureComponent } from "react";
import ListBody from './ListBody';

/*
function Index(props) {
  return (
    <Container>
      <BookTitle>&quot;Book Title&quot;</BookTitle>
      <Rect></Rect>
    </Container>
  );
}
*/
const styles = {
    Container: {
        display: "flex",
        width: "71px",
        height: "10px",
        flexDirection: "column",
        backgroundColor: "#366156"
    },

    BookTitle: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "400",
        color: "#121212"
    },

    Rect: {
        width: "126px",
        height: "194px",
        backgroundColor: "#E6E6E6",
        borderWidth: "0px",
        borderColor: "#000000",
        borderRadius: "11px",
        marginTop: "-220px",
        marginLeft: "-28px",
        borderStyle: "solid",
        boxShadow: "5px 5px 4px  0.2px rgba(0,0,0,.3)"
    }

};

export default class BookTest extends PureComponent {
    render(){
        return(
            <container style = {styles.Container}>
                <bookTitle style = {styles.BookTitle}>
                    <ListBody
                        name = {this.props.name}
                    ></ListBody>
                </bookTitle>
            <rect style = {styles.Rect}></rect>
            </container>
        );
    }
}
