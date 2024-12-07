import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
`;

export const Image = styled.img`
    top: calc(50% - 6px);
    right: 19px;
    width: 24px;
    height: 24px;
`;

export const Label = styled.label` 
    font-size: 13px;
`;

export const HoverLabel = styled.label`
    cursor: pointer;
    color: var(--upload-image-company);
    font-size:13px;
    &:hover {
    text-decoration: underline;
    }
`;
export const HiddenInput = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    opacity: 0;
`;
