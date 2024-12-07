import { AggregatedDataCard } from "src/components/aggregated-data-card/aggregated-data-card";
import {
  AggregatedDataContainer,
  AggregatedDataDiv,
  AggregatedDataWrapper,
} from "./aggregated-data.styled";
import { useTranslation } from "react-i18next";
import { useAggregateDataStore } from "src/store/aggregate-data/useAggregateDataStore";
import { useEffect } from "react";

export const AggregatedData = () => {
  const { t } = useTranslation('aggregateData')
  const { fetchData, totalCompanies, totalEvents, totalPhotos, totalSessions } = useAggregateDataStore();

  useEffect(()=>{
    fetchData();
  },[fetchData])

  return (
    <AggregatedDataContainer>
      <AggregatedDataWrapper>
        <AggregatedDataDiv>
          <AggregatedDataCard
            iconSrc={"./photoAggrData.svg"}
            altText={t('altPhotoStudio')}
            title={t('countPhotoStudio')}
            value={totalCompanies}
          />
          <AggregatedDataCard
            iconSrc={"./folderAggrData.svg"}
            altText={t('altFolder')}
            title={t('countPhoto')}
            value={totalPhotos}
          />
        </AggregatedDataDiv>
        <AggregatedDataDiv>
          <AggregatedDataCard
            iconSrc={"./eventAggrData.svg"}
            altText={t('altEvent')}
            title={t('countEvent')}
            value={totalEvents}
          />
          <AggregatedDataCard
            iconSrc={"./sessionAggrData.svg"}
            altText={t('altSession')}
            title={t('countPhotoSession')}
            value={totalSessions}
          />
        </AggregatedDataDiv>
      </AggregatedDataWrapper>
    </AggregatedDataContainer>
  );
};
