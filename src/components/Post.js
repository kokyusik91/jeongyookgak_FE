import React from "react";
import Grid from "../elements/Grid";
import styled from "styled-components";
import image1 from "../images/main_image1.png";
import button_image from "../images/button_image.png";

import Modal from "../components/Modal";

const Post = (props) => {
  const { id, category, title, price, image, imageDetail } = props;

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const handleMouseEnter = (e) => {
    e.target.style.background = "black";
  };
  const handleMouseLeave = (e) => {
    e.target.style.background = "white";
  };

  return (
    <React.Fragment>

      <Grid margin="0 20px 15px 0" flexBasis>

        <Grid bg="#f9f7f8" width="100%">
          <Grid>
            <Image bgi={image} width="150px" margin="0px 30px"></Image>
          </Grid>

          <Grid is_flex4 margin="0 30px 0px 0">
            <Button
              
              onClick={() => {
                console.log("안녕");
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              모달
            </Button>
            {/* 
            <Modal _setModal={setOpen} /> */}
          </Grid>
        </Grid>

        <Grid margin="20px 0 0 0">
          <Text size="20px" bold color="black">
            {title}
          </Text>
          <Text size="20px" color="black">
            가격 : {price}
          </Text>
        </Grid>
      </Grid>

    </React.Fragment>
  );
};

const Image = styled.div`
  ${(props) => (props.height ? `padding:${props.height}` : "")};
  ${(props) => (props.width ? `padding:${props.width}` : "")};
  ${(props) => (props.padding ? `padding:${props.padding}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.pointer ? `cursor: pointer;` : "")};
  ${(props) => (props.bgi ? `background-image: url(${props.bgi})` : "")};
  ${(props) => (props.bg ? `background-color:${props.bg}` : "")};
  ${(props) => (props.radius ? `background-radius:${props.radius}` : "")};
  max-width: 400px;
  background-position: center;
  background-size: cover;
`;

const Button = styled.button`
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2px solid #eee;
  box-shadow: 0 25px 10px -15px rgb(0 0 0 / 12%);
  background-color: #fff;
  cursor: pointer;
  /* background-image: url("../images/button_image");
  background-size: cover;
  background-position: center; */
`;

const Text = styled.p`
  ${(props) => (props.color ? `color:${props.color}` : "")};
  ${(props) => (props.size ? `font-size:${props.size}` : "")};
  ${(props) => (props.bold ? `font-weight:800 ` : `font-weight:400`)};
`;

export default Post;