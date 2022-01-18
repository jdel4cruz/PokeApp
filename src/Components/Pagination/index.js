//Styles
import { Wrapper, PageLink } from "./Pagination.styles";

const Pagination = () => (
  <Wrapper>
    <li>
      <PageLink>First</PageLink>
    </li>
    <li>
      <PageLink>1</PageLink>
    </li>
    <li>
      <PageLink>2</PageLink>
    </li>
    <li>
      <PageLink>3</PageLink>
    </li>
    <li>
      <PageLink>Last</PageLink>
    </li>
  </Wrapper>
);

export default Pagination;
