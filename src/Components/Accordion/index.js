import { useState } from "react";

//Styles
import { Wrapper, AccordionData, AccordionHeader } from "./Accordion.styles";

const Accordion = ({ classDesc, data }) => {
  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    if (open === i) {
      return setOpen(null);
    }

    setOpen(i);
  };

  return (
    <Wrapper>
      {data.map((item) => {
        return (
          <div key={item.key}>
            <AccordionHeader
              className={classDesc}
              onClick={() => toggle(item.key)}
            >
              <h2>{item.title}</h2>
              <span>{open === item.key ? "-" : "+"}</span>
            </AccordionHeader>

            <AccordionData
              className={open === item.key ? "content open " : "content"}
            >
              <div>{item.content}</div>
            </AccordionData>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Accordion;
