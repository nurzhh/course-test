import Card from "@/shared/ui/Card/Card";
import { CourseCardProps } from "./props";
import "./styles.scss";

export default function CourseCard({
  image,
  name,
  bgColor,
  tags,
}: CourseCardProps) {
  return (
    <Card
      cardStyle="first"
      className="w-full"
      cardColor={bgColor}
      imageCard={image}
    >
      <div className="flex pt-4 px-[1.125rem] pb-[1.125rem]">
        <h1 className="course-text">{name}</h1>
      </div>
    </Card>
  );
}
