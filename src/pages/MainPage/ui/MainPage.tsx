import Tags from "@/features/Tags/ui/Tags";
import CourseList from "@/widgets/CourseList/ui/CourseList";

export default function MainPage() {
  return (
    <section className="flex gap-6">
      <Tags />
      <div className="grid grid-cols-3 gap-[18px]">
        <CourseList />
      </div>
    </section>
  );
}
