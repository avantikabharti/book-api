import React, { Component } from "react";
import { connect } from "react-redux";
import BookInfoComponent from "../../components/BookInfo/BookInfoComponent";

import { inputChangeHandlerAction, onBtnClickAction } from "./action";
import {
  getBookImages,
  getBookTitle,
  getBookWriter,
  getBookDescription
} from "./selector";

class BookContainer extends Component {
  constructor(props) {
    super(props);
    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
  }

  onInputChangeHandler(e) {
    let { inputChangeHandler } = this.props;
    let inputval = e.target.value;
    inputChangeHandler(inputval);
  }

  render() {
    // console.log("BookContainer", this.props);
    return (
      <div>
        {/* <BookInfoComponent
          {...this.props}
          inputChangeHandler={this.onInputChangeHandler}
        /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("map :- ",state)
  // return state
    return{
    imageSrc: getBookImages(state),
    bookTitle: getBookTitle(state),
    bookWriter: getBookWriter(state),
    description: getBookDescription(state)
  }
};

const mapDispatchToProps = dispatch => ({
  inputChangeHandler: val => dispatch(inputChangeHandlerAction(val)),
  onBtnClickSearch: () => dispatch(onBtnClickAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookContainer);
