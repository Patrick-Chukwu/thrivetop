import CourseItem from "./CourseItem";

const Courses = () => {
    return (
      <div className="flex text-brand flex-col md:flex-row items-center p-4 gap-4">
        <CourseItem
          title="Primary School"
          description="Grade 1 - 6. Maths, English, Sciences, Verbal and Quantitative Reasoning , etc."
          backgroundImage="https://res.cloudinary.com/deho0mehx/image/upload/v1726351268/primary_on1qot.jpg"
        />
        <CourseItem
          title="Secondary School"
          description="Grade 6 - 12. Math, English, Physics, Biology, Chemistry, and more."
          backgroundImage="https://res.cloudinary.com/deho0mehx/image/upload/v1725650370/secondary_oc6gsr.webp"
        />
        <CourseItem
          title="Exam Preparation"
          description="IELTS, SATs, Common Entrance, A-Level, 11+ GSE, BECE, WAEC, JAMB, etc."
          backgroundImage="https://res.cloudinary.com/deho0mehx/image/upload/v1725651410/exam_sntkaj.avif"
        />
        <CourseItem
          title="Tech Courses"
          description="Coding classes: Web development, PowerBi & Python Programming."
          backgroundImage="https://res.cloudinary.com/deho0mehx/image/upload/v1725651410/tech_dt0xzq.jpg"
        />
      </div>
    );
  };
  
  export default Courses;
  