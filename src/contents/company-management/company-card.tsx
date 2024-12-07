import infoIcon from "src/assets/icons/InfoListItemIcon.svg";
import editIcon from "src/assets/icons/editListItemIcon.svg";
import PrimaryCard from "src/components/card/primary-card";
import companyLogo from "src/assets/icons/companyLogo.svg";
import { Company } from "src/models/Company";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useCompanyStore } from "src/store/company/useCompanyStore";
import { useState } from "react";
import { EditCompanyModal } from "../edit-company-modal/edit-company-modal";

interface Props {
  company: Company;
}

const CompanyCard = ({ company }: Props) => {
  const { t } = useTranslation("companyContent");
  const navigate = useNavigate();
  const { openDeleteModal } = useCompanyStore();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleOpenDeleteModal = () => {
    openDeleteModal(company.id)
  }

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const buttons = [
    {
      icon: infoIcon,
      altText: t('infoButton'),
      onClick: () => navigate(`/company/${company.id}`)
    },
    {
      icon: editIcon,
      altText: t('editCompanyButton'),
      onClick: handleOpenEditModal,
    },
  ];

  return (
    <>
    <PrimaryCard avatarSrc={companyLogo} onDeleteClick={handleOpenDeleteModal} buttons={buttons} avatarAlt={company.name} text={company.name} />
    {isEditModalOpen && <EditCompanyModal company={company} onClose={handleCloseEditModal} />}
  </>
  )
};

export default CompanyCard;
