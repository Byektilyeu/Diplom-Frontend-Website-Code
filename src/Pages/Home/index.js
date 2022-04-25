import React, { Component } from "react";
import MyCard from "../../Components/MyCard";
import { Row, Col } from "react-bootstrap";
import MyLayout from "../../Components/MyLayout";
import Footer from "../../Components/MyFooter/index";
import "../../index.css";
import Cooking from "../../assets/cooking.jpg";

export default function HomePage() {
  return (
    <div>
      <MyLayout>
        <>
          <section
            className="relative bg-white overflow-hidden"
            style={{
              backgroundImage:
                'url("flex-ui-assets/elements/pattern-white.svg")',
              backgroundPosition: "center",
            }}
          >
            <div style={{ marginTop: 20 }}>
              <div className="container px-4 mx-auto">
                <div className="flex flex-wrap xl:items-center">
                  <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                    <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-blue-500 uppercase rounded-9xl">
                      Апп-ийн лого
                    </span>
                    <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                      Хоолны жорын нэгдсэн сан
                    </h1>
                    <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
                      Бид жоронд нэмсэн хоолны жор, зураг бүрийг хянадаг.хүнийг
                      хоол хийж сургах болон хоолны мэдлэгийг ихэсгэснээр зөв
                      зохистой хооллолт болон хүний өдөр тутмын хэвшлийг засаж
                      илүү зардлыг багасгах ба хоолны жорын нэгдсэн сан бий
                      болгох зорилготой систем юм.
                    </p>
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                        <a
                          className="inline-block py-2 px-4 text-sm leading-5 text-blue-50 bg-blue-500 hover:bg-blue-600 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
                          href=""
                        >
                          Нэвтрэх
                        </a>
                      </div>
                      <div className="w-full md:w-auto py-1 md:py-0">
                        <a
                          className="inline-block py-2 px-4 text-sm leading-5 text-blue-50 bg-blue-500 hover:bg-blue-600 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
                          href=""
                        >
                          Бүртгүүлэх
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-80  t-0 md:w-1/2 px-4">
                    <div className="relative object-cover object-center mx-auto md:mr-0 max-w-max">
                      <img
                        className="relative rounded-7xl"
                        src={Cooking}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="py-24 md:py-28 bg-white"
            style={{
              backgroundImage:
                'url("flex-ui-assets/elements/pattern-white.svg")',
              backgroundPosition: "center",
            }}
          >
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/3 px-4">
                  <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                    <div className="inline-flex h-16 w-16 mb-7 mx-auto items-center justify-center text-white bg-blue-500 rounded-lg">
                      <svg
                        width={24}
                        height={21}
                        viewBox="0 0 24 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 18.63H5C4.20435 18.63 3.44129 18.3139 2.87868 17.7513C2.31607 17.1887 2 16.4257 2 15.63V7.63C2 7.36479 1.89464 7.11043 1.70711 6.9229C1.51957 6.73536 1.26522 6.63 1 6.63C0.734784 6.63 0.48043 6.73536 0.292893 6.9229C0.105357 7.11043 0 7.36479 0 7.63L0 15.63C0 16.9561 0.526784 18.2279 1.46447 19.1655C2.40215 20.1032 3.67392 20.63 5 20.63H17C17.2652 20.63 17.5196 20.5246 17.7071 20.3371C17.8946 20.1496 18 19.8952 18 19.63C18 19.3648 17.8946 19.1104 17.7071 18.9229C17.5196 18.7354 17.2652 18.63 17 18.63ZM21 0.630005H7C6.20435 0.630005 5.44129 0.946075 4.87868 1.50868C4.31607 2.07129 4 2.83436 4 3.63V13.63C4 14.4257 4.31607 15.1887 4.87868 15.7513C5.44129 16.3139 6.20435 16.63 7 16.63H21C21.7956 16.63 22.5587 16.3139 23.1213 15.7513C23.6839 15.1887 24 14.4257 24 13.63V3.63C24 2.83436 23.6839 2.07129 23.1213 1.50868C22.5587 0.946075 21.7956 0.630005 21 0.630005ZM20.59 2.63L14.71 8.51C14.617 8.60373 14.5064 8.67813 14.3846 8.7289C14.2627 8.77966 14.132 8.8058 14 8.8058C13.868 8.8058 13.7373 8.77966 13.6154 8.7289C13.4936 8.67813 13.383 8.60373 13.29 8.51L7.41 2.63H20.59ZM22 13.63C22 13.8952 21.8946 14.1496 21.7071 14.3371C21.5196 14.5246 21.2652 14.63 21 14.63H7C6.73478 14.63 6.48043 14.5246 6.29289 14.3371C6.10536 14.1496 6 13.8952 6 13.63V4L11.88 9.88C12.4425 10.4418 13.205 10.7574 14 10.7574C14.795 10.7574 15.5575 10.4418 16.12 9.88L22 4V13.63Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-3 text-xl md:text-2xl leading-tight font-bold">
                      Бидний зорилго
                    </h3>
                    <p className="text-coolGray-500 font-medium">
                      Манай хоолны жорын нэгдсэн сан нь гэрийн тогооч нарт урам
                      зориг өгөх хамгийн том эх сурвалж болох нэгдэж төвлөрсөн
                      сан бий болгож, дэлхийд тэргүүлэгч дижитал хоолны жорын
                      брэнд болгох.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-4">
                  <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                    <div className="inline-flex h-16 w-16 mb-7 mx-auto items-center justify-center text-white bg-blue-500 rounded-lg">
                      <svg
                        width={22}
                        height={12}
                        viewBox="0 0 22 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.71 1.29C20.617 1.19627 20.5064 1.12188 20.3846 1.07111C20.2627 1.02034 20.132 0.994202 20 0.994202C19.868 0.994202 19.7373 1.02034 19.6154 1.07111C19.4936 1.12188 19.383 1.19627 19.29 1.29L13 7.59L8.71 3.29C8.61704 3.19627 8.50644 3.12188 8.38458 3.07111C8.26272 3.02034 8.13201 2.9942 8 2.9942C7.86799 2.9942 7.73728 3.02034 7.61542 3.07111C7.49356 3.12188 7.38296 3.19627 7.29 3.29L1.29 9.29C1.19627 9.38296 1.12188 9.49356 1.07111 9.61542C1.02034 9.73728 0.994202 9.86799 0.994202 10C0.994202 10.132 1.02034 10.2627 1.07111 10.3846C1.12188 10.5064 1.19627 10.617 1.29 10.71C1.38296 10.8037 1.49356 10.8781 1.61542 10.9289C1.73728 10.9797 1.86799 11.0058 2 11.0058C2.13201 11.0058 2.26272 10.9797 2.38458 10.9289C2.50644 10.8781 2.61704 10.8037 2.71 10.71L8 5.41L12.29 9.71C12.383 9.80373 12.4936 9.87812 12.6154 9.92889C12.7373 9.97966 12.868 10.0058 13 10.0058C13.132 10.0058 13.2627 9.97966 13.3846 9.92889C13.5064 9.87812 13.617 9.80373 13.71 9.71L20.71 2.71C20.8037 2.61704 20.8781 2.50644 20.9289 2.38458C20.9797 2.26272 21.0058 2.13201 21.0058 2C21.0058 1.86799 20.9797 1.73728 20.9289 1.61542C20.8781 1.49356 20.8037 1.38296 20.71 1.29Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-3 text-xl md:text-2xl leading-tight font-bold">
                      Хоолны жорын нэгдсэн сан
                    </h3>
                    <p className="text-coolGray-500 font-medium">
                      Найрсаг: Бид таны гал тогооны хамгийн сайн найз. Дэмждэг:
                      Бид шүүмжилдэггүй, гэхдээ шинэ санааны талаар ярих дуртай.
                      Бүтээлч: Бид том, жижиг, дундах бүх зүйлд зориулсан
                      бүтээлч байдлыг урамшуулдаг.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-4">
                  <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                    <div className="inline-flex h-16 w-16 mb-7 mx-auto items-center justify-center text-white bg-blue-500 rounded-lg">
                      <svg
                        width={22}
                        height={18}
                        viewBox="0 0 22 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.3 9.22C11.8336 8.75813 12.2616 8.18688 12.5549 7.54502C12.8482 6.90316 13 6.20571 13 5.5C13 4.17392 12.4732 2.90215 11.5355 1.96447C10.5979 1.02678 9.32608 0.5 8 0.5C6.67392 0.5 5.40215 1.02678 4.46447 1.96447C3.52678 2.90215 3 4.17392 3 5.5C2.99999 6.20571 3.1518 6.90316 3.44513 7.54502C3.73845 8.18688 4.16642 8.75813 4.7 9.22C3.30014 9.85388 2.11247 10.8775 1.27898 12.1685C0.445495 13.4596 0.00147185 14.9633 0 16.5C0 16.7652 0.105357 17.0196 0.292893 17.2071C0.48043 17.3946 0.734784 17.5 1 17.5C1.26522 17.5 1.51957 17.3946 1.70711 17.2071C1.89464 17.0196 2 16.7652 2 16.5C2 14.9087 2.63214 13.3826 3.75736 12.2574C4.88258 11.1321 6.4087 10.5 8 10.5C9.5913 10.5 11.1174 11.1321 12.2426 12.2574C13.3679 13.3826 14 14.9087 14 16.5C14 16.7652 14.1054 17.0196 14.2929 17.2071C14.4804 17.3946 14.7348 17.5 15 17.5C15.2652 17.5 15.5196 17.3946 15.7071 17.2071C15.8946 17.0196 16 16.7652 16 16.5C15.9985 14.9633 15.5545 13.4596 14.721 12.1685C13.8875 10.8775 12.6999 9.85388 11.3 9.22ZM8 8.5C7.40666 8.5 6.82664 8.32405 6.33329 7.99441C5.83994 7.66476 5.45542 7.19623 5.22836 6.64805C5.0013 6.09987 4.94189 5.49667 5.05764 4.91473C5.1734 4.33279 5.45912 3.79824 5.87868 3.37868C6.29824 2.95912 6.83279 2.6734 7.41473 2.55764C7.99667 2.44189 8.59987 2.5013 9.14805 2.72836C9.69623 2.95542 10.1648 3.33994 10.4944 3.83329C10.8241 4.32664 11 4.90666 11 5.5C11 6.29565 10.6839 7.05871 10.1213 7.62132C9.55871 8.18393 8.79565 8.5 8 8.5ZM17.74 8.82C18.38 8.09933 18.798 7.20905 18.9438 6.25634C19.0896 5.30362 18.9569 4.32907 18.5618 3.45C18.1666 2.57093 17.5258 1.8248 16.7165 1.30142C15.9071 0.77805 14.9638 0.499742 14 0.5C13.7348 0.5 13.4804 0.605357 13.2929 0.792893C13.1054 0.98043 13 1.23478 13 1.5C13 1.76522 13.1054 2.01957 13.2929 2.20711C13.4804 2.39464 13.7348 2.5 14 2.5C14.7956 2.5 15.5587 2.81607 16.1213 3.37868C16.6839 3.94129 17 4.70435 17 5.5C16.9986 6.02524 16.8593 6.5409 16.5961 6.99542C16.3328 7.44994 15.9549 7.82738 15.5 8.09C15.3517 8.17552 15.2279 8.29766 15.1404 8.44474C15.0528 8.59182 15.0045 8.7589 15 8.93C14.9958 9.09976 15.0349 9.2678 15.1137 9.41826C15.1924 9.56872 15.3081 9.69665 15.45 9.79L15.84 10.05L15.97 10.12C17.1754 10.6917 18.1923 11.596 18.901 12.7263C19.6096 13.8566 19.9805 15.1659 19.97 16.5C19.97 16.7652 20.0754 17.0196 20.2629 17.2071C20.4504 17.3946 20.7048 17.5 20.97 17.5C21.2352 17.5 21.4896 17.3946 21.6771 17.2071C21.8646 17.0196 21.97 16.7652 21.97 16.5C21.9782 14.9654 21.5938 13.4543 20.8535 12.1101C20.1131 10.7659 19.0413 9.63331 17.74 8.82Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-3 text-xl md:text-2xl leading-tight font-bold">
                      Манай хамт олон
                    </h3>
                    <p className="text-coolGray-500 font-medium">
                      Манай баг 2 гишүүнтэй бөгөөд хэрэглэгдэд хоолны жорын илүү
                      их мэдээллийг хүргэхээр ажиллаж байна.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      </MyLayout>
      <Footer />
    </div>
  );
}
