//Styles
import { Wrapper, PageItem } from "./Pagination.styles";

const Pagination = ({ data, currentIndex, setCurrentIndex }) => {
  let pageItems = new Array();

  data.forEach((abilityGroup, i) => {
    const char = abilityGroup[0].name.charAt(0);
    pageItems.push(
      <PageItem
        onClick={() => setCurrentIndex(i)}
        isCurrent={i == currentIndex}
      >
        {char}
      </PageItem>
    );
  });

  return <Wrapper>{pageItems}</Wrapper>;
};

export default Pagination;
