import { useMemo } from "react";
import { Container } from "./styles";

const siblingsCount = 1;

function generatePagesArray(from, to) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

const Pagination = ({ onPageChange, totalCountOfRegisters, currentPage, registersPerPage }) => {
  console.log("totalCountOfRegisters", totalCountOfRegisters);
  console.log("currentPage", currentPage);
  console.log("registersPerPage", registersPerPage);

  const lastPage = useMemo(() => {
    return Math.ceil(totalCountOfRegisters / registersPerPage);
  }, [registersPerPage, totalCountOfRegisters]);

  const previousPage = useMemo(() => {
    return currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];
  }, [currentPage]);

  const nextPages = useMemo(() => {
    return currentPage < lastPage
      ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
      : [];
  }, [currentPage, lastPage]);

  return (
    <Container>
      <div className="pagination">
        <div className="pagination-item short">
          <a
            href="#"
            onClick={() => {
              if (currentPage > 1) {
                onPageChange(currentPage - 1);
              }
            }}
          >
            Anterior
          </a>
        </div>

        {currentPage > 1 + siblingsCount && (
          <>
            <div className="pagination-item short">
              <a href="#" onClick={() => onPageChange(1)}>
                1
              </a>
            </div>
            {currentPage > 2 + siblingsCount && (
              <div className="pagination-item short">
                <a>...</a>
              </div>
            )}
          </>
        )}

        {previousPage.length > 0 &&
          previousPage.map((page) => {
            return (
              <div className="pagination-item short">
                <a href="#" onClick={() => onPageChange(page)}>
                  {page}
                </a>
              </div>
            );
          })}

        <div className="pagination-item short selected">
          <a href="#">{currentPage}</a>
        </div>

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <div className="pagination-item short">
                <a href="#" onClick={() => onPageChange(page)}>
                  {page}
                </a>
              </div>
            );
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <div className="pagination-item short">
                <a>...</a>
              </div>
            )}
            <div className="pagination-item short">
              <a href="#" onClick={() => onPageChange(lastPage)}>
                {lastPage}
              </a>
            </div>
          </>
        )}

        <div className="pagination-item short">
          <a
            href="#"
            onClick={() => {
              if (currentPage >= 1) {
                if (currentPage < lastPage) {
                  onPageChange(currentPage + 1);
                }
              }
            }}
          >
            Proximo
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Pagination;
