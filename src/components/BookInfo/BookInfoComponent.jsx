import React from "react";
import Input from "../common/InputTag";
import Button from "../common/ButtonTag";
import Image from "../common/ImageTag";
import Details from "./BookInfo";
import "./myApp.css";

 const BookInfoComponent = (props) => {
  let {
    searchItem,
    imageSrc,
    bookTitle,
    bookWriter,
    description,
    inputChangeHandler,
    handleKeyPress,
    onBtnClickSearch
  } = props;
  return (
    <div className="container clearfix">
      <div className="logo-full">
        <Image
          className="logo mt2"
          imgAlt="Logo"
          imgSrc="https://www.foliosociety.com/media/catalog/product/cache/dca333b288bc21141d2f21434c4d0945/s/p/spq_book.png"
        />
        <Details
          title="Knowledge is POWER"
          className="h2 inline-block logo-title"
        />
      </div>
      <div>
        <Input
          className="col-9 field search-box"
          inputType="text"
          inputName="search"
          inputPlaceholder="Search Book"
          inputChangeHandler={inputChangeHandler}
          inputValue={searchItem}
          handleKeyPress={handleKeyPress}
        />

        <Button
          className="col-2 rounded ml3 search-btn h4"
          btnName="Search "
          onBtnClick={onBtnClickSearch}
        />
      </div>
      <div className="flex m2">
        <Image
          className="book m2 rounded"
          imgAlt="Book Image"
          imgSrc={imageSrc}
        />
        <div className="col-10 p2 sm-col-9">
          <Details
            className="h2 column"
            titleStyle="italic value"
            column="Title : "
            title={bookTitle}
          />
          <Details
            className="h2 column"
            titleStyle="italic value"
            column="Writer : "
            title={bookWriter}
          />
          <div>
            <Details
              className="h3 post"
              titleStyle="italic value"
              title={description}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfoComponent;
