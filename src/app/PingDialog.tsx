import styled from "@emotion/styled";
import { Ping } from "./contant";
import Portal from "./Portal";
import { IoClose } from "react-icons/io5";
import PingTable from "./PingTable";

interface Props {
  pingInfo: Ping;
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

const Line = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
`;

export default function PingDialog({ pingInfo, handleClose }: Props) {
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
          <iframe
            src={pingInfo.youtube}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            style={{
              width: "100%",
              minHeight: "400px",
              margin: "4rem auto 1rem auto",
            }}
          ></iframe>
          <Line>{`"${pingInfo.line}"`}</Line>
          <PingTable pingInfo={pingInfo} />
        </DialogContainer>
      </Dialog>
    </Portal>
  );
}
