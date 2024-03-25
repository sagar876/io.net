import styled from "styled-components";

export const MainContainer = styled.div``;

export const MessageInput = styled.textarea`
    flex: 1;
    height: 30px;
    padding: 4px 15px;
    background: #353740;
    outline:none;
    color: #fff;
    }
`;

export const MessageInputContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;  
    left: 0;
    
    button {
      cursor: pointer;
      border: 0;
      color: #fff;
      background: #282c40;
      width: 7%;
      border:1px solid #fff;
    }
}
`;

export const Messages = styled.div`
  div {
    padding: 5px;
    border-radius: 4px;
    margin-bottom: 8px;
    width: max-content;
  }
`;

export const MessageIndicator = styled.div`
  position: absolute;
  left: 15px;
  bottom: 60px;
`;
export const Message = styled.div`
  background: ${(props) => (props.sender === "user" ? "#7c8cd6" : "#d1d9ff")};
`;

export const ImagesContainer = styled.div`

`

export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  img{
    max-width: 25%;
    flex: 1;
    object-fit:contain;
  }
`
