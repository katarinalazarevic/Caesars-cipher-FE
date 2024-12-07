import React from 'react';
import { CloseIcon, Content, DateText, IconContainer, ToastContainer, ToastContent, ToastIcon } from './toast-message.styled';
import { Typography } from '@mui/material';
import { useToastStore } from 'src/store/toast/useToastStore';

interface ToastMessageProps {
    id:string;
    title: string;
    date: string;
    icon: string;
    backgroundColor: string;
}


const ToastMessage: React.FC<ToastMessageProps> = ({ id,title, date, icon, backgroundColor }) => {

    const removeToast = useToastStore((state) => state.removeToast);

    const onCloseToastHandle = () => {
        removeToast(id);
    };


    return (
        <ToastContainer $backgroundColor={backgroundColor}>
            <ToastContent>
                <IconContainer>
                    <ToastIcon src={icon} alt="icon" />
                </IconContainer>
                <Content>
                    <Typography sx={{ fontWeight: "600" }} variant='h4'>{title}</Typography>
                    <DateText>{date}</DateText>
                </Content>
                <CloseIcon onClick={onCloseToastHandle} src="/closeIcon.svg" alt="close icon" />
            </ToastContent>
        </ToastContainer>
    );
};

export default ToastMessage;