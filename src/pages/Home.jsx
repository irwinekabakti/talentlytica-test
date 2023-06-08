import React from "react";
import { Button, MainDropdown, Table } from "../components";
import useFunction from "../utils/useFunction";
import classes from "./Home.module.css";
import close from "../assets/close.svg";
import user from "../assets/user.png";

const Home = () => {
  const {
    studentAssessment,
    handlerButtonSave,
    listOptionAssessment,
    handlerSelectAssessment,
    setStudentAssessment,
    initialStudentAssessment,
    handlerAddDataStudentAssessment,
    handlerRemoveDataStudentAssessment,
  } = useFunction();
  return (
    <div className={classes["container-background"]}>
      <div className={classes["container-form"]}>
        <div className={classes["form"]}>
          <div className={classes["form-header"]}>
            <p className={classes["text-form-header"]}>
              Aplikasi Penilaian Mahasiswa
            </p>
          </div>
          <div className={classes["form-content"]}>
            <Table>
              <Table.Head>
                <Table.HeadContent content="" />
                <Table.HeadContent content="Aspek Penilaian 1" />
                <Table.HeadContent content="Aspek Penilaian 2" />
                <Table.HeadContent content="Aspek Penilaian 3" />
                <Table.HeadContent content="Aspek Penilaian 4" />
                <Table.HeadContent content="" />
              </Table.Head>
              <Table.Body>
                {studentAssessment.map((assessment, index) => (
                  <Table.BodyTr key={index}>
                    <Table.BodyContent>
                      <div className={classes["layout-icon-user"]}>
                        <img src={user} alt="icon-user" /> Mahasiswa {index + 1}
                      </div>
                    </Table.BodyContent>
                    <Table.BodyContent className="min-w-[70px]">
                      <MainDropdown
                        value={listOptionAssessment.filter(
                          (option) =>
                            option.value === assessment.aspek_penilaian_1
                        )}
                        options={listOptionAssessment}
                        onChange={(e) =>
                          handlerSelectAssessment(
                            index,
                            "aspek_penilaian_1",
                            e.value
                          )
                        }
                      />
                    </Table.BodyContent>
                    <Table.BodyContent className="min-w-[70px]">
                      <MainDropdown
                        value={listOptionAssessment.filter(
                          (option) =>
                            option.value === assessment.aspek_penilaian_2
                        )}
                        options={listOptionAssessment}
                        onChange={(e) =>
                          handlerSelectAssessment(
                            index,
                            "aspek_penilaian_2",
                            e.value
                          )
                        }
                      />
                    </Table.BodyContent>
                    <Table.BodyContent className="min-w-[70px]">
                      <MainDropdown
                        value={listOptionAssessment.filter(
                          (option) =>
                            option.value === assessment.aspek_penilaian_3
                        )}
                        options={listOptionAssessment}
                        onChange={(e) =>
                          handlerSelectAssessment(
                            index,
                            "aspek_penilaian_3",
                            e.value
                          )
                        }
                      />
                    </Table.BodyContent>
                    <Table.BodyContent className="min-w-[70px]">
                      <MainDropdown
                        value={listOptionAssessment.filter(
                          (option) =>
                            option.value === assessment.aspek_penilaian_4
                        )}
                        options={listOptionAssessment}
                        onChange={(e) =>
                          handlerSelectAssessment(
                            index,
                            "aspek_penilaian_4",
                            e.value
                          )
                        }
                      />
                    </Table.BodyContent>
                    <Table.BodyContent className="w-[25px]">
                      {index > 0 ? (
                        <img
                          src={close}
                          className="cursor-pointer min-w-[25px] min-h-[25px]"
                          alt="icon-close"
                          onClick={() =>
                            handlerRemoveDataStudentAssessment(index)
                          }
                        />
                      ) : (
                        <></>
                      )}
                    </Table.BodyContent>
                  </Table.BodyTr>
                ))}
              </Table.Body>
            </Table>
            <Button onClick={handlerButtonSave} className={classes["btn-save"]}>
              Save
            </Button>
            <Button
              onClick={handlerAddDataStudentAssessment}
              className={classes["btn-add"]}>
              Add
            </Button>
            <Button
              onClick={() => setStudentAssessment(initialStudentAssessment)}
              className={classes["btn-reset"]}>
              Reset
            </Button>
            <div className="clear-both"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
