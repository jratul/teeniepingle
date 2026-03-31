"use client";

import { useEffect } from "react";
import styled from "@emotion/styled";
import { Ping, PRIMARY_COLOR } from "./constant";
import Portal from "./Portal";
import { IoClose } from "react-icons/io5";
import PingTable from "./PingTable";

interface Props {
  pingInfo: Ping;
  handleClose: () => void;
}

const Dialog = styled.div`
  z-index: 30;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  background: white;
`;

const DialogContainer = styled.div`
  width: 90%;
  margin: auto;
  position: relative;
  padding: 1rem 0;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 70%;
  }

  @media (min-width: 1280px) {
    width: 60%;
  }

  @media (min-width: 1440px) {
    width: 40%;
  }
`;

const CloseButton = styled.button`
  padding: 0.5rem;
  font-size: 2rem;
  background: ${PRIMARY_COLOR};
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

  useEffect(() => {
    const handleBackButton = (event: PopStateEvent) => {
      event.preventDefault();
      handleClose();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("popstate", handleBackButton);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  return (
    <Portal>
      <Dialog role="dialog" aria-modal="true" aria-label={pingInfo.name}>
        <DialogContainer>
          <CloseButton onClick={handleCloseButton} aria-label="닫기">
            <IoClose aria-hidden="true" />
          </CloseButton>
          {pingInfo.youtube && (
            <iframe
              src={pingInfo.youtube}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                width: "100%",
                aspectRatio: "16 / 9",
                margin: "4rem auto 1rem auto",
              }}
            ></iframe>
          )}
          {pingInfo.line && <Line>{`"${pingInfo.line}"`}</Line>}
          <PingTable pingInfo={pingInfo} />
        </DialogContainer>
      </Dialog>
    </Portal>
  );
}
