"use client";
import { useEffect, useState } from "react";
import "./styles.scss";
import axios from "axios";
import { BASE_URL } from "@/shared/api/_BASE";
import CourseCard from "@/entities/CourseCard/ui/CourseCard";

export default function CourseList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/courses.json`);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {data.map(({ id, image, name, bgColor }) => (
        <CourseCard key={id} image={image} name={name} bgColor={bgColor} />
      ))}
    </>
  );
}
