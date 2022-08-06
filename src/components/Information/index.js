import airTransmission from "../../assets/img/airTransmission.png";
import humanContact from "../../assets/img/humanContact.png";
import containedObject from "../../assets/img/containedObject.png";
import symptoms from "../../assets/img/symptoms.png";
import girl01 from "../../assets/img/girl1.png";
import girl02 from "../../assets/img/girl2.png";
import socialDistance from "../../assets/img/socialDistance.png";
import manyPeople from "../../assets/img/manyPeople.png";
import report from "../../assets/img/report.png";
import { useState } from "react";

export default function Information() {
  const [show, setShow] = useState(false);
  const handleOnClick = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="my-32 px-10 flex flex-col items-center justify-between">
        {/* CONTAGION */}

        <div className="flex flex-col items-center">
          <h1
            onClick={handleOnClick}
            className="cursor-pointer font-bold text-4xl text-green-900 transition duration-300 ease-in-out hover:text-rose-400"
          >
            Cách virus lây lan
          </h1>
          {show ? (
            <>
              <p className="max-w-3xl text-center text-xl my-9">
                Virus Corona là virus gây viêm đường hô hấp cấp ở người và có
                tốc độ lây lan nhanh chóng, trở thành đại dịch toàn cầu.
              </p>
              <div className="flex items-center justify-around w-5/6">
                <div className="cursor-pointer border-b-8 border-b-white flex flex-col items-center w-1/3 justify-center h-96 px-5 shadow-xl transition duration-700 ease-in-out hover:shadow-2xl hover:border-b-8 hover:border-rose-500">
                  <img className="w-44" src={airTransmission} />
                  <h3 className="my-4 text-lg text-center w-48 mx-8 font-bold text-rose-400">
                    Lây Truyền Qua Không Khí
                  </h3>
                </div>
                <div className="cursor-pointer border-b-8 border-b-white flex flex-col items-center w-1/3 justify-center mx-10 h-96 px-5 shadow-xl transition duration-700 ease-in-out hover:shadow-2xl hover:border-b-8 hover:border-rose-500">
                  <img className="w-40" src={humanContact} />
                  <h3 className="my-4 text-lg text-center w-48 mx-8 font-bold text-rose-400">
                    Lây Từ Người Sang Người Khi Tiếp Xúc Gần
                  </h3>
                </div>
                <div className="cursor-pointer border-b-8 border-b-white flex flex-col items-center w-1/3 justify-center h-96 px-5 shadow-xl transition duration-700 ease-in-out hover:shadow-2xl hover:border-b-8 hover:border-rose-500">
                  <img className="w-44" src={containedObject} />
                  <h3 className="my-4 text-lg text-center w-48 mx-8 font-bold text-rose-400">
                    Tiếp Xúc Với Các Bề Mặt, Đồ Vật Mang Mầm Bệnh
                  </h3>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>

        {/* Symptoms */}

        <div className="mt-20 flex flex-col items-center">
          <h1
            onClick={handleOnClick}
            className="cursor-pointer font-bold text-4xl text-green-900 transition duration-300 ease-in-out hover:text-rose-400"
          >
            Triệu chứng
          </h1>
          {show ? (
            <>
              <p className="max-w-2xl text-center text-xl my-9">
                COVID-19 tác động đến mỗi người theo những cách khác nhau. Hầu
                hết người mắc bệnh COVID-19 sẽ gặp các triệu chứng từ nhẹ đến
                trung bình và hồi phục mà không cần phải điều trị đặc biệt. Tuy
                nhiên, một số người sẽ chuyển bệnh nghiêm trọng và cần được hỗ
                trợ y tế.
              </p>
              <img src={symptoms} className="w-10/12" />
            </>
          ) : (
            <></>
          )}
        </div>

        {/* What Should We Do ? */}

        <div className="mt-20 flex flex-col items-center">
          <h1
            onClick={handleOnClick}
            className="cursor-pointer font-bold text-4xl text-green-900 transition duration-300 ease-in-out hover:text-rose-400"
          >
            Biện pháp phòng ngừa
          </h1>
          {show ? (
            <>
              <p className="max-w-2xl text-center my-8 text-xl">
                Bảo vệ bản thân và mọi người xung quanh bằng cách tìm hiểu thông
                tin và thực hiện các biện pháp phòng ngừa thích hợp. Làm theo
                khuyến cáo của cơ quan y tế địa phương.
              </p>
              <div className="flex items-center justify-between my-14">
                <div>
                  <h1 className="font-bold text-3xl text-green-900">
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
              <div className="flex items-center flex-row-reverse justify-between my-14">
                <div>
                  <h1 className="font-bold text-3xl text-green-900">
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
              <div className="flex items-center justify-between my-14">
                <div>
                  <h1 className="font-bold text-3xl text-green-900">
                    Khoảng Cách
                  </h1>
                  <p className="max-w-lg my-7 text-md">
                    Giữ khoảng cách khi tiếp xúc với người khác.
                  </p>
                </div>
                <img src={socialDistance} className="h-96 px-10 " />
              </div>
              <div className="flex items-center flex-row-reverse justify-between my-14">
                <div>
                  <h1 className="font-bold text-3xl text-green-900">
                    Không Tụ Tập
                  </h1>

                  <p className="max-w-lg my-7 text-md">
                    Tuyệt đối không được tụ tập đông người, tổ chức giao lưu,
                    ăn, uống để phòng, chống dịch Covid-19.
                  </p>
                </div>
                <img src={manyPeople} className="w-96 px-10 " />
              </div>
              <div className="flex items-center flex-row justify-between my-14">
                <div>
                  <h1 className="font-bold text-3xl text-green-900">
                    Khai Báo Y Tế
                  </h1>
                  <p className="max-w-lg my-7 text-md">
                    Thực hiện khai báo y tế trên App NCOVI; cài đặt ứng dụng
                    BlueZone để được cảnh báo nguy cơ lây nhiễm COVID-19.
                  </p>
                </div>
                <img src={report} className="w-96 px-10 " />
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
