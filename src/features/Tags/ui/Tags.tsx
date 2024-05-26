import Card from "@/shared/ui/Card/Card";
import "./styles.scss";

const data = [
  { name: "Все темы" },
  { name: "Логика и мышление" },
  { name: "Загадки" },
  { name: "Головоломки" },
  { name: "Путешествия" },
];

export default function Tags() {
  return (
    <Card cardStyle="second" className="flex flex-col w-full h-fit">
      {data.map(({ name }, index) => (
        <div key={index} className="p-4 cursor-pointer">
          <p className="text-lg tags-text">{name}</p>
        </div>
      ))}
    </Card>
  );
}
