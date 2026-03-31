import { TEXT_AND_IMAGE_DATA } from "./constants";
import { TextAndImageSection } from "./TextAndImageSection";

export const TextAndImageSections = () =>
  TEXT_AND_IMAGE_DATA.map((section, index) => (
    <TextAndImageSection key={section.theme} data={section} index={index} />
  ));
