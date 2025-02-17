import Pagination from "react-bootstrap/Pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface PaginationProps {
  totalPages: number;
}

export const FormPagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const page = searchParams.get("page");
    if (page) {
      setCurrentPage(Number(page));
    }
  }, [searchParams]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    router.push(`?page=${page}`);
  };

  return (
    <Pagination className="mt-4 flex justify-center">
      <Pagination.First
        className="cursor-pointer"
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      />
      <Pagination.Prev
        className="cursor-pointer"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />

      {currentPage > 2 && (
        <Pagination.Item onClick={() => handlePageChange(1)}>1</Pagination.Item>
      )}
      {currentPage > 3 && <Pagination.Ellipsis />}

      {currentPage > 1 && (
        <Pagination.Item onClick={() => handlePageChange(currentPage - 1)}>
          {currentPage - 1}
        </Pagination.Item>
      )}

      <Pagination.Item active>{currentPage}</Pagination.Item>

      {currentPage < totalPages && (
        <Pagination.Item onClick={() => handlePageChange(currentPage + 1)}>
          {currentPage + 1}
        </Pagination.Item>
      )}

      {currentPage < totalPages - 2 && <Pagination.Ellipsis />}
      {currentPage < totalPages - 1 && (
        <Pagination.Item onClick={() => handlePageChange(totalPages)}>
          {totalPages}
        </Pagination.Item>
      )}

      <Pagination.Next
        className="cursor-pointer"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
      <Pagination.Last
        className="cursor-pointer"
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};

export default FormPagination;
