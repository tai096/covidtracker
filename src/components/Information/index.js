import { useState } from "react";
import { motion } from "framer-motion";
import airTransmission from "../../assets/img/airTransmission.png";
import humanContact from "../../assets/img/humanContact.png";
import containedObject from "../../assets/img/containedObject.png";
import symptoms from "../../assets/img/symptoms.png";
import girl01 from "../../assets/img/girl1.png";
import girl02 from "../../assets/img/girl2.png";
import socialDistance from "../../assets/img/socialDistance.png";
import manyPeople from "../../assets/img/manyPeople.png";
import report from "../../assets/img/report.png";

export default function Information() {
  const [showContagtion, setShowContagtion] = useState(false);
  const [showSymptoms, setShowSymptoms] = useState(false);
  const [showPrevention, setShowPrevention] = useState(false);

  const handleOnClickContagtion = () => {
    setShowContagtion(!showContagtion);
  };
  const handleOnClickSymptoms = () => {
    setShowSymptoms(!showSymptoms);
  };
  const handleOnClickPrevention = () => {
    setShowPrevention(!showPrevention);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-32 px-10 flex flex-col items-center justify-between text-center "
      >
        {/* CONTAGION */}

        <div className="flex flex-col items-center">
          <h1
            onClick={handleOnClickContagtion}
            className="cursor-pointer font-bold text-3xl text-green-900 transition duration-300 ease-in-out hover:text-rose-400 lg:text-4xl"
          >
            Cách virus lây lan
          </h1>
          {showContagtion ? (
            <>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="max-w-3xl w-4/5 text-center text-base lg:text-xl my-9"
              >
                Virus Corona là virus gây viêm đường hô hấp cấp ở người và có
                tốc độ lây lan nhanh chóng, trở thành đại dịch toàn cầu.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: "-20%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-20%" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-around w-5/6 lg:flex-row"
              >
                <div className="cursor-pointer border-b-8 border-b-white flex flex-col items-center mb-20 w-72 justify-center h-96 px-5 shadow-xl transition duration-700 ease-in-out hover:shadow-2xl hover:border-b-8 hover:border-rose-500">
                  <img className="w-44" src={airTransmission} />
                  <h3 className="my-4 text-lg text-center w-48 mx-8 font-bold text-rose-400">
                    Lây Truyền Qua Không Khí
                  </h3>
                </div>
                <div className="cursor-pointer border-b-8 border-b-white flex flex-col items-center mb-20 w-72 lg:mx-10 justify-center h-96 px-5 shadow-xl transition duration-700 ease-in-out hover:shadow-2xl hover:border-b-8 hover:border-rose-500">
                  <img className="w-40" src={humanContact} />
                  <h3 className="my-4 text-lg text-center w-48 mx-8 font-bold text-rose-400">
                    Lây Từ Người Sang Người Khi Tiếp Xúc Gần
                  </h3>
                </div>
                <div className="cursor-pointer border-b-8 border-b-white flex flex-col items-center mb-20 w-72 justify-center h-96 px-5 shadow-xl transition duration-700 ease-in-out hover:shadow-2xl hover:border-b-8 hover:border-rose-500">
                  <img className="w-44" src={containedObject} />
                  <h3 className="my-4 text-lg text-center w-48 mx-8 font-bold text-rose-400">
                    Tiếp Xúc Với Các Bề Mặt, Đồ Vật Mang Mầm Bệnh
                  </h3>
                </div>
              </motion.div>
            </>
          ) : (
            <></>
          )}
        </div>

        {/* Symptoms */}

        <div className="mt-20 flex flex-col items-center">
          <h1
            onClick={handleOnClickSymptoms}
            className="cursor-pointer font-bold text-3xl text-green-900 transition duration-300 ease-in-out hover:text-rose-400 lg:text-4xl"
          >
            Triệu chứng
          </h1>
          {showSymptoms ? (
            <>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="max-w-2xl text-center text-base my-9 lg:text-xl"
              >
                COVID-19 tác động đến mỗi người theo những cách khác nhau. Hầu
                hết người mắc bệnh COVID-19 sẽ gặp các triệu chứng từ nhẹ đến
                trung bình và hồi phục mà không cần phải điều trị đặc biệt. Tuy
                nhiên, một số người sẽ chuyển bệnh nghiêm trọng và cần được hỗ
                trợ y tế.
              </motion.p>
              <motion.img
                initial={{ opacity: 0, y: "-20%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-20%" }}
                transition={{ duration: 1 }}
                src={symptoms}
                className="w-auto lg:w-3/4"
              />
            </>
          ) : (
            <></>
          )}
        </div>

        {/* What Should We Do ? */}

        <div className="mt-20 flex flex-col lg:text-left items-center">
          <h1
            onClick={handleOnClickPrevention}
            className="cursor-pointer font-bold text-3xl lg:text-4xl text-green-900 transition duration-300 ease-in-out hover:text-rose-400"
          >
            Biện pháp phòng ngừa
          </h1>
          {showPrevention ? (
            <>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="max-w-2xl text-center my-8 lg:text-xl"
              >
                Bảo vệ bản thân và mọi người xung quanh bằng cách tìm hiểu thông
                tin và thực hiện các biện pháp phòng ngừa thích hợp. Làm theo
                khuyến cáo của cơ quan y tế địa phương.
              </motion.p>
              <div className="flex flex-col  lg:flex-row items-center justify-between my-14">
                <div>
                  <h1 className="font-bold text-2xl lg:text-3xl text-green-900">
                    Đeo Khẩu Trang
                  </h1>
                  <p className="max-w-lg my-7 text-md">
                    Đeo khẩu trang vải thường xuyên tại nơi công cộng, nơi tập
                    trung đông người; đeo khẩu trang y tế tại các cơ sở y tế,
                    khu cách ly.
                  </p>
                </div>
                <img src={girl01} className="w-96 px-10 " />
              </div>
              <div className="flex items-center flex-col lg:flex-row-reverse justify-between my-14">
                <div>
                  <h1 className="font-bold text-2xl lg:text-3xl text-green-900">
                    Khử Khuẩn
                  </h1>
                  <p className="max-w-lg my-7 text-md">
                    Rửa tay thường xuyên bằng xà phòng hoặc dung dịch sát khuẩn
                    tay. Vệ sinh các bề mặt hoặc vật dụng thường xuyên tiếp xúc.
                    Giữ vệ sinh, lau rửa và để nhà cửa thông thoáng.
                  </p>
                </div>
                <img src={girl02} className="w-96 px-10 " />
              </div>
              <div className="flex items-center flex-col lg:flex-row justify-between my-14">
                <div>
                  <h1 className="font-bold text-2xl lg:text-3xl text-green-900">
                    Khoảng Cách
                  </h1>
                  <p className="max-w-lg my-7 text-md">
                    Giữ khoảng cách khi tiếp xúc với người khác.
                  </p>
                </div>
                <img src={socialDistance} className="w-80 mx-5" />
              </div>
              <div className="flex items-center flex-col lg:flex-row-reverse justify-between my-14">
                <div>
                  <h1 className="font-bold text-2xl lg:text-3xl text-green-900">
                    Không Tụ Tập
                  </h1>

                  <p className="max-w-lg my-7 text-md">
                    Tuyệt đối không được tụ tập đông người, tổ chức giao lưu,
                    ăn, uống để phòng, chống dịch Covid-19.
                  </p>
                </div>
                <img src={manyPeople} className="w-80 lg:mx-10 " />
              </div>
              <div className="flex items-center flex-col lg:flex-row justify-between my-14">
                <div>
                  <h1 className="font-bold text-2xl lg:text-3xl text-green-900">
                    Khai Báo Y Tế
                  </h1>
                  <p className="max-w-lg my-7 text-md">
                    Thực hiện khai báo y tế trên App NCOVI; cài đặt ứng dụng
                    BlueZone để được cảnh báo nguy cơ lây nhiễm COVID-19.
                  </p>
                </div>
                <img src={report} className="w-80 mx-5 " />
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </motion.div>
    </>
  );
}
