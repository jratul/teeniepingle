import styled from "@emotion/styled";
import { Ping } from "./contantBase";
import Portal from "./Portal";
import { IoClose } from "react-icons/io5";
import PingTable from "./PingTable";
import { pingDetailInfo } from "./constantPingDetail";

interface Props extends Ping {
  handleClose: () => void;
}

const Dialog = styled.div`
  width: 100vw;
  min-height: 100vh;
  z-index: 30;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
`;

const DialogContainer = styled.div`
  width: 50%;
  margin: auto;
  position: relative;
  padding-top: 1rem;
`;

const CloseButton = styled.button`
  padding: 0.5rem;
  font-size: 2rem;
  background: #f472b6;
  color: white;
  border-radius: 5px;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #f9a8d4;
  }
`;

const ImageDiv = styled.div`
  width: 15rem;
  margin: auto;
`;

const Image = styled.img`
  width: 100%;
`;

const NameHeading = styled.h2`
  text-align: center;
`;

const Line = styled.h3`
  text-align: center;
`;

export default function PingDialog({ name, img, handleClose }: Props) {
  const handleCloseButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    handleClose();
  };

  return (
    <Portal>
      <Dialog>
        <DialogContainer>
          <CloseButton onClick={handleCloseButton}>
            <IoClose />
          </CloseButton>
          <ImageDiv>
            <Image src={img} alt={name} />
          </ImageDiv>
          <NameHeading>{name}</NameHeading>
          <iframe
            src={pingDetailInfo[name].youtube}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            style={{ width: "100%", minHeight: "400px", margin: "1rem auto" }}
          ></iframe>
          <Line>{`"${pingDetailInfo[name].line}`}</Line>
          <PingTable pingDetail={pingDetailInfo[name]} />
        </DialogContainer>
      </Dialog>
    </Portal>
  );
}
