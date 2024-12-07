import { useState, useEffect } from 'react';
import { Box, Paper } from '@mui/material';
import { Container, HiddenInput, HoverLabel, Label, Image } from './drag-drop.styled';
import { useTranslation } from 'react-i18next';
import photoStudioPlaceHolder from "src/assets/icons/photoStudioPlaceHolder.svg";
import { LabelText } from '../input-form/input-form.styled';

interface DragDropFileUploadProps {
  labelText: string;
  onFileUpload: (file: File) => void;
  initialImage?: string;
  disabled?: boolean;
}

const DragDropFileUpload: React.FC<DragDropFileUploadProps> = ({ labelText, onFileUpload, initialImage, disabled }) => {
  const { t } = useTranslation('addCompanyModal');

  const [dragOver, setDragOver] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(initialImage || null);

  useEffect(() => {
    if (initialImage) {
      setImagePreview(initialImage);
    }
  }, [initialImage]);

  const handleDragOver = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    setDragOver(false);
    const files = event.dataTransfer.files;
    if (files && files[0]) {
      handleFileChange(files[0]);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      handleFileChange(files[0]);
    }
  };

  const handleFileChange = (file: File) => {
    onFileUpload(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleImageError = () => {
    setImagePreview(photoStudioPlaceHolder);
  };

  return (
    <Box>
      <LabelText>{labelText}</LabelText>
      <Paper
        variant="outlined"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          border: dragOver ? '2px dashed var(--border-drop-zone-over)' : '2px dashed var(--border-drop-zone-drop)',
          textAlign: 'center',
          background: dragOver ? 'var(--background-drag-over)' : 'var(--background-drag-drop)',
          position: 'relative',
          height: '120px',
          marginTop: '15px',
          borderRadius: '8px',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: disabled ? 'not-allowed' : 'hover',
        }}
      >
        <HiddenInput
          accept="image/*"
          id="raised-button-file"
          type="file"
          onChange={handleChange}
          disabled={disabled}
        />
        {!imagePreview && (
          <Container>
            <Image src={'/imagePicker.svg'} />
            <div>
              <Label>{t('uploadOr')}</Label>
              <HoverLabel htmlFor={"raised-button-file"}>{t('uploadImage')}</HoverLabel>
            </div>
          </Container>
        )}
        {imagePreview && (
          <img
            width={"114px"}
            height={"64px"}
            src={imagePreview}
            alt='Image Preview'
            onError={handleImageError}
          />
        )}
      </Paper>
    </Box>
  );
}

export default DragDropFileUpload;