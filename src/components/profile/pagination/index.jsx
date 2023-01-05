import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { Container, Content, ButtonIcon } from "./styles";

const Pagination = ({
  totalCountOfRegisters,
  registersPerPage = 20,
  currentPage,
  onPageChange,
}) => {
  const siblingsCount = 1;
  const generatePagesArray = (from, to) => {
    return [...new Array(to - from)]
      .map((_, index) => {
        return from + index + 1;
      })
      .filter((page) => page > 0);
  };
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages =
    currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
      : [];

  return (
    <Container>
      {previousPages.length > 0 ? (
        <>
          {previousPages.map((page) => (
            <ButtonIcon type="button" key={page} onClick={() => onPageChange(page)}>
              <AiOutlineDoubleLeft />
            </ButtonIcon>
          ))}
        </>
      ) : (
        <ButtonIcon type="button">
          <AiOutlineDoubleLeft />
        </ButtonIcon>
      )}
      <Content>
        {currentPage > 1 + siblingsCount && (
          <>
            <button type="button" onClick={() => onPageChange(0)}>
              {1}
            </button>
            <a>...</a>
          </>
        )}
        {previousPages.length > 0 &&
          previousPages.map((page) => (
            <button icon type="button" key={page} onClick={() => onPageChange(page)}>
              {page}
            </button>
          ))}
        <button
          type="button"
          style={{
            background: "#f73164",
            color: "white",
            borderRadius: "0.6rem",
          }}
        >
          {currentPage}
        </button>
        {nextPages.length > 0 &&
          nextPages.map((page) => (
            <button type="button" key={page} onClick={() => onPageChange(page)}>
              {page}
            </button>
          ))}
        {currentPage + siblingsCount < lastPage && (
          <>
            <a>...</a>
            <button type="button" onClick={() => onPageChange(lastPage)}>
              {lastPage}
            </button>
          </>
        )}
      </Content>
      {nextPages.length > 0 ? (
        <>
          {nextPages.map((page) => (
            <ButtonIcon type="button" key={page} onClick={() => onPageChange(page)}>
              <AiOutlineDoubleRight />
            </ButtonIcon>
          ))}
        </>
      ) : (
        <ButtonIcon type="button">
          <AiOutlineDoubleRight />
        </ButtonIcon>
      )}
    </Container>
  );
};

export default Pagination;
