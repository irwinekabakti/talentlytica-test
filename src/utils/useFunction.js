import { useState, useCallback } from "react";

const useFunction = () => {
  const listOptionAssessment = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
  ];
  const initialAssessment = {
    aspek_penilaian_1: 0,
    aspek_penilaian_2: 0,
    aspek_penilaian_3: 0,
    aspek_penilaian_4: 0,
  };
  const initialStudentAssessment = [
    {
      ...initialAssessment,
    },
    {
      ...initialAssessment,
    },
    {
      ...initialAssessment,
    },
    {
      ...initialAssessment,
    },
    {
      ...initialAssessment,
    },
    {
      ...initialAssessment,
    },
    {
      ...initialAssessment,
    },
    {
      ...initialAssessment,
    },
    {
      ...initialAssessment,
    },
    {
      ...initialAssessment,
    },
  ];
  const [studentAssessment, setStudentAssessment] = useState([
    ...initialStudentAssessment,
  ]);
  const handlerButtonSave = useCallback(() => {
    const output = {};
    Object.keys(initialAssessment).forEach((key) => {
      output[key] = {};
      studentAssessment.forEach((assessment, index) => {
        output[key][`mahasiswa_${index + 1}`] = assessment[key];
      });
    });
    const timestamp = new Date().toString();
    const fileData = JSON.stringify(output);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `mahasiswa_assessment_result_${timestamp}.json`;
    link.href = url;
    link.click();
    link.remove();
  }, [studentAssessment]);
  const handlerSelectAssessment = useCallback(
    (index, key, value) => {
      const temporaryStudentAssessment = [...studentAssessment];
      studentAssessment[index][key] = value;
      setStudentAssessment(temporaryStudentAssessment);
    },
    [studentAssessment]
  );
  const handlerAddDataStudentAssessment = () => {
    setStudentAssessment((oldVal) => [...oldVal, { ...initialAssessment }]);
  };
  const handlerRemoveDataStudentAssessment = (index) => {
    try {
      const temporaryStudentAssessment = [...studentAssessment];
      temporaryStudentAssessment.splice(index, 1);
      setStudentAssessment(temporaryStudentAssessment);
    } catch (error) {
      throw error;
    }
  };
  return {
    studentAssessment,
    setStudentAssessment,
    handlerButtonSave,
    listOptionAssessment,
    handlerSelectAssessment,
    initialStudentAssessment,
    handlerAddDataStudentAssessment,
    handlerRemoveDataStudentAssessment,
  };
};

export default useFunction;
