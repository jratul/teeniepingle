import styled from "@emotion/styled";

interface Props {
  open: boolean;
}

const Wrapper = styled.div<Props>`
  max-height: ${(props) => (props.open ? "200px" : "0")};
  transition: max-height 0.4s ease;
  overflow: hidden;
  background: red;
`;

const Inner = styled.div`
  padding: 20px;
`;

export default function FilterContent({ open }: Props) {
  return (
    <Wrapper open={open}>
      <Inner>fewafewa</Inner>
    </Wrapper>
  );
}
