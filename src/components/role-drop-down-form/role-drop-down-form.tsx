import React from 'react';
import { useField } from 'formik';
import { useTranslation } from "react-i18next";
import { ErrorDiv, ErrorIcon, ErrorMessage, ErrorMessageDiv, ErrorMessageExclamation, LabelText } from "../input-form/input-form.styled";
import { useRoleStore } from 'src/store/role/useRoleStore';
import { OptionComponent, SelectComponent, WrapperSelect } from './role-drop-down-form.styled';

interface DropDownFormProps {
  labelText: string;
  placeholder: string;
  name: string;
  disabled?: boolean;
  showExclamation?: boolean;
}

const DropDownForm: React.FC<DropDownFormProps> = ({
  labelText,
  placeholder,
  name,
  disabled = false,
  showExclamation = true
}) => {
  const [field, meta] = useField(name);
  const { t } = useTranslation("addUserModal");
  const { roles } = useRoleStore();
  
  return (
    <WrapperSelect>
      <LabelText>{labelText}</LabelText>
      <ErrorDiv>
        <SelectComponent
          {...field}
          value={field.value || ""}
          $isselected={!!field.value}
          disabled={disabled}
          style={{
            borderColor:
              meta.touched && meta.error
                ? "var(--error-message)"
                : "var(--input-border-color)",
          }}
        >
          <OptionComponent value="" disabled>
            {placeholder || t("rolePlaceHolder")}
          </OptionComponent>
          {roles.map((role) => (
            <OptionComponent key={role.roleId} value={role.roleId}>
              {t(`rolesOptions.${role.roleName.toLowerCase()}`)}
            </OptionComponent>
          ))}
        </SelectComponent>
        {showExclamation && (
          <ErrorMessageExclamation>
            {meta.touched && meta.error && <ErrorIcon>!</ErrorIcon>}
          </ErrorMessageExclamation>
        )}
      </ErrorDiv>
      {meta.touched && meta.error && (
        <ErrorMessageDiv>
          <ErrorMessage>{meta.error}</ErrorMessage>
        </ErrorMessageDiv>
      )}
    </WrapperSelect>
  );
};

export default DropDownForm;
