import { Typography } from "@mui/material";
import {
  CardImg,
  DataCardContainer,
  DataCardWrapper,
} from "./aggregated-data-card.styled";

interface AggregatedDataCardProps {
  iconSrc: string;
  altText: string;
  title: string;
  value: number;
}

export const AggregatedDataCard = ({
  iconSrc,
  altText,
  title,
  value,
}: AggregatedDataCardProps) => {
  return (
    <DataCardContainer>
      <CardImg src={iconSrc} alt={altText} />
      <DataCardWrapper>
        <Typography variant="h4" sx={{ fontSize: "1.25rem" }}>
          {title}
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontSize: "1.75rem", lineHeight: "2rem" }}
        >
          {value}
        </Typography>
      </DataCardWrapper>
    </DataCardContainer>
  );
};
