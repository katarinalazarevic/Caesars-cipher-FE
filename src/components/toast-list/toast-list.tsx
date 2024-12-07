import React from 'react';
import ToastMessage from '../toast-message/toast-message';
import { useToastStore } from 'src/store/toast/useToastStore';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from './toast-list.styled';

const ToastList: React.FC = () => {
  const { t } = useTranslation('toast');
  const toasts = useToastStore((state) => state.toasts);

  return (
    <ToastContainer>
      {Object.keys(toasts).map((id) => (
        <ToastMessage
          key={id}
          id={id}
          title={t(toasts[id].title)}
          date={toasts[id].date}
          icon={toasts[id].icon}
          backgroundColor={toasts[id].backgroundColor}
        />
      ))}
    </ToastContainer>
  );
};

export default ToastList;
