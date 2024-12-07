import Stack from "@mui/material/Stack";
import { PrimaryPaginationStyle } from "./styled-pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowLeftIcon from "src/components/pagination/pagination-icons/arrow-left-icon";
import ArrowRightIcon from "src/components/pagination/pagination-icons/arrow-right-icon";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PrimaryPagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const handlePageChange = (
    _: React.ChangeEvent<unknown>,
    page: number
  ) => {
    onPageChange(page);
  };

  return (
    <Stack spacing={2}>
      <PrimaryPaginationStyle
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        shape="rounded"
        renderItem={(item) => (
          <PaginationItem
            {...item}
            components={{ previous: ArrowLeftIcon, next: ArrowRightIcon }}
          >
          </PaginationItem>
        )}
      />
    </Stack>
  );
};

export default PrimaryPagination;
