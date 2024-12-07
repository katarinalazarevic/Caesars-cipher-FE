import styled from "styled-components";

interface StyledDivProps {
  $width?: string;
  $height?:string;
}

export const CompanyInfoContainer = styled.section`
  border-radius: 1.709rem;
  border-top: 0.5rem solid var(--Secondary2, #ffd689);
  background: var(--Bg-3, #fdfdfd);
  box-shadow: 0 0.125rem 1rem 0 rgba(0, 0, 0, 0.05);
  display: flex;
  width: 50%;
  flex-direction: column;
  padding: 1rem 1rem 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 1.5rem;
  cursor: pointer;
`;

export const Content = styled.main`
  display: flex;
  margin-top: 2rem;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  margin-top: 0.75rem;
  width: 100%;
  gap: 0.75rem;
  flex-wrap: nowrap;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const StyledInputDiv = styled.div<StyledDivProps>`
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "auto"};
`;

export const DragDropFileUploadContainer = styled.div`
  margin-top: 0.75rem;
  width: 100%;
`;