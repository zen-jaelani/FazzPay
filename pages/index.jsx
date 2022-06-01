import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Row, Col, Card } from "react-bootstrap";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bgSecondary textMain container-fluid">
        <div className="container p-3 d-flex justify-content-between">
          <div className="fw-bold fs-4">FazzPay</div>
          <div>
            <button
              className="btn px-4 textMain border-primary me-3"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
            <button
              className="btn bgMain px-4 text-white  "
              onClick={() => router.push("/register")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      <div className="bgSecondary">
        <div className="container mb-5">
          <div className=" d-flex">
            <div>
              <Image
                src="/Group 49.png"
                alt=""
                width={463}
                height={852}
              ></Image>
            </div>
            <div className="col-lg-3 mt-lg-5 pt-lg-5 ms-5">
              <h1 className="fw-bold mt-5 pt-5">
                Awesome App For Saving <span className="textMain">Time.</span>
              </h1>
              <p className="mt-4">
                We bring you a mobile app for banking problems that oftenly
                wasting much of your times.
              </p>
              <button className="btn bgMain px-4 mt-4">Try it Free</button>
              <p className="mt-4">Available on</p>
              <div className="d-flex">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.55531 7.48975C9.13883 7.90623 9 8.60038 9 9.43335V40.1145C9 40.9475 9.27766 41.6416 9.69414 42.0581L9.83297 42.1969L27.0477 24.9822V24.7045L9.55531 7.48975Z"
                    fill="url(#paint0_linear_68_988)"
                  />
                  <path
                    d="M32.6007 30.8131L26.9087 25.1212V24.7047L32.6007 19.0127L32.7395 19.1515L39.5421 23.0387C41.4857 24.1494 41.4857 25.9541 39.5421 27.0648L32.6007 30.8131Z"
                    fill="url(#paint1_linear_68_988)"
                  />
                  <path
                    d="M32.7396 30.6741L26.9088 24.8433L9.55518 42.1968C10.2493 42.891 11.2211 42.891 12.4706 42.3357L32.7396 30.6741Z"
                    fill="url(#paint2_linear_68_988)"
                  />
                  <path
                    d="M32.7396 19.0128L12.4706 7.49006C11.2211 6.79591 10.2493 6.93474 9.55518 7.62889L26.9088 24.8436L32.7396 19.0128Z"
                    fill="url(#paint3_linear_68_988)"
                  />
                  <path
                    opacity="0.2"
                    d="M32.6007 30.5352L12.4706 41.9191C11.3599 42.6133 10.3881 42.4744 9.69401 41.9191L9.55518 42.0579L9.69401 42.1968C10.3881 42.7521 11.3599 42.8909 12.4706 42.1968L32.6007 30.5352Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    d="M9.55531 41.9192C9.13883 41.5027 9 40.8086 9 39.9756V40.1144C9 40.9474 9.27766 41.6415 9.69414 42.058V41.9192H9.55531ZM39.5423 26.648L32.6009 30.5352L32.7397 30.6741L39.5423 26.7869C40.5141 26.2315 40.9306 25.5374 40.9306 24.8433C40.9306 25.5374 40.3753 26.0927 39.5423 26.648Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    d="M12.4707 7.62863L39.5423 23.0386C40.3753 23.5939 40.9306 24.1492 40.9306 24.8434C40.9306 24.1492 40.5141 23.4551 39.5423 22.8998L12.4707 7.4898C10.5271 6.37917 9 7.21214 9 9.4334V9.57223C9 7.4898 10.5271 6.518 12.4707 7.62863Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_68_988"
                      x1="25.3818"
                      y1="9.16957"
                      x2="2.08216"
                      y2="32.4678"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0FF" />
                      <stop offset="0.007" stopColor="#00A1FF" />
                      <stop offset="0.26" stopColor="#00BEFF" />
                      <stop offset="0.512" stopColor="#00D2FF" />
                      <stop offset="0.76" stopColor="#00DFFF" />
                      <stop offset="1" stopColor="#00E3FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_68_988"
                      x1="42.0882"
                      y1="24.8449"
                      x2="8.49584"
                      y2="24.8449"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFE000" />
                      <stop offset="0.409" stopColor="#FFBD00" />
                      <stop offset="0.775" stopColor="#FFA500" />
                      <stop offset="1" stopColor="#FF9C00" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_68_988"
                      x1="29.584"
                      y1="28.0308"
                      x2="-2.01064"
                      y2="59.6254"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF3A44" />
                      <stop offset="1" stopColor="#C31162" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_68_988"
                      x1="5.24732"
                      y1="-2.67776"
                      x2="19.3565"
                      y2="11.4314"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#32A071" />
                      <stop offset="0.069" stopColor="#2DA771" />
                      <stop offset="0.476" stopColor="#15CF74" />
                      <stop offset="0.801" stopColor="#06E775" />
                      <stop offset="1" stopColor="#00F076" />
                    </linearGradient>
                  </defs>
                </svg>
                <h1 className="bi bi-apple mx-3"></h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid"
          style={{ backgroundColor: "#473AD10F" }}
        >
          <div className="container py-4  d-flex">
            <div className="flex-fill">
              <svg
                width="173"
                height="120"
                viewBox="0 0 173 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M152 83.5072V80.3188H148.04V75.3618L147.907 75.4028L144.188 76.5406L144.115 76.5629V80.3188H138.245V78.2267C138.245 77.2524 138.463 76.5068 138.892 76.0096C139.319 75.5183 139.929 75.2686 140.706 75.2686C141.265 75.2686 141.844 75.4004 142.427 75.6601L142.573 75.7253V72.3673L142.504 72.3421C141.961 72.1468 141.221 72.0483 140.305 72.0483C139.15 72.0483 138.101 72.2996 137.186 72.7977C136.27 73.2964 135.55 74.0085 135.045 74.9139C134.542 75.8182 134.287 76.8626 134.287 78.0184V80.3188H131.53V83.5072H134.287V96.9396H138.245V83.5072H144.115V92.0434C144.115 95.5589 145.773 97.3406 149.043 97.3406C149.581 97.3406 150.146 97.2774 150.724 97.154C151.312 97.0275 151.712 96.901 151.948 96.766L152 96.7353V93.5172L151.839 93.6238C151.624 93.7672 151.357 93.884 151.043 93.9708C150.728 94.0594 150.465 94.1039 150.261 94.1039C149.495 94.1039 148.928 93.8974 148.577 93.49C148.221 93.079 148.04 92.3599 148.04 91.3543V83.5072H152ZM122.691 94.1042C121.255 94.1042 120.122 93.6278 119.324 92.6895C118.521 91.7464 118.114 90.4019 118.114 88.6936C118.114 86.9312 118.521 85.5518 119.324 84.5921C120.123 83.6386 121.245 83.1548 122.659 83.1548C124.032 83.1548 125.124 83.6169 125.906 84.5291C126.693 85.446 127.092 86.8144 127.092 88.5974C127.092 90.4023 126.717 91.7887 125.977 92.716C125.242 93.6366 124.137 94.1042 122.691 94.1042ZM122.868 79.9183C120.127 79.9183 117.95 80.7214 116.398 82.3053C114.847 83.8894 114.06 86.0815 114.06 88.8214C114.06 91.4237 114.828 93.5169 116.342 95.0418C117.857 96.5675 119.917 97.3402 122.467 97.3402C125.124 97.3402 127.257 96.526 128.809 94.9202C130.36 93.3158 131.146 91.1446 131.146 88.4687C131.146 85.8257 130.408 83.7169 128.953 82.202C127.497 80.6865 125.449 79.9183 122.868 79.9183ZM107.679 79.9182C105.815 79.9182 104.273 80.3951 103.094 81.3353C101.909 82.2811 101.308 83.5217 101.308 85.0228C101.308 85.803 101.438 86.4962 101.693 87.084C101.95 87.6739 102.348 88.193 102.876 88.6289C103.4 89.0612 104.209 89.5141 105.282 89.9747C106.183 90.3456 106.855 90.6596 107.283 90.9069C107.7 91.1491 107.996 91.3929 108.164 91.6301C108.326 91.8623 108.409 92.1799 108.409 92.5724C108.409 93.6889 107.573 94.2321 105.852 94.2321C105.214 94.2321 104.486 94.0991 103.688 93.8362C102.89 93.5738 102.144 93.1965 101.472 92.7127L101.308 92.5949V96.4054L101.368 96.4334C101.929 96.6919 102.634 96.9098 103.467 97.0815C104.297 97.2531 105.052 97.3406 105.708 97.3406C107.731 97.3406 109.36 96.8614 110.548 95.9156C111.745 94.9633 112.351 93.6935 112.351 92.1403C112.351 91.02 112.025 90.0591 111.381 89.2844C110.742 88.5157 109.634 87.8103 108.087 87.1866C106.854 86.692 106.065 86.2814 105.739 85.9663C105.425 85.6618 105.266 85.2312 105.266 84.686C105.266 84.2026 105.463 83.8155 105.867 83.5017C106.274 83.1865 106.84 83.0262 107.551 83.0262C108.211 83.0262 108.885 83.1304 109.556 83.3345C110.227 83.5386 110.816 83.812 111.307 84.1465L111.469 84.257V80.6423L111.407 80.6156C110.953 80.4211 110.355 80.2547 109.629 80.1197C108.905 79.986 108.249 79.9182 107.679 79.9182ZM90.9899 94.1042C89.5537 94.1042 88.4207 93.6278 87.6227 92.6895C86.8195 91.7464 86.4132 90.4023 86.4132 88.6936C86.4132 86.9312 86.8199 85.5518 87.6236 84.5921C88.4216 83.6386 89.5432 83.1548 90.9581 83.1548C92.33 83.1548 93.4224 83.6169 94.2051 84.5291C94.9917 85.446 95.3907 86.8144 95.3907 88.5974C95.3907 90.4023 95.0151 91.7887 94.275 92.716C93.5402 93.6366 92.4355 94.1042 90.9899 94.1042ZM91.1666 79.9183C88.4251 79.9183 86.2482 80.7214 84.6969 82.3053C83.1458 83.8894 82.3588 86.0815 82.3588 88.8214C82.3588 91.4248 83.127 93.5169 84.6412 95.0418C86.1554 96.5675 88.216 97.3402 90.7656 97.3402C93.4218 97.3402 95.556 96.526 97.1075 94.9202C98.6583 93.3158 99.4447 91.1446 99.4447 88.4687C99.4447 85.8257 98.707 83.7169 97.2515 82.202C95.7952 80.6865 93.7478 79.9183 91.1666 79.9183ZM76.3508 83.197V80.3188H72.441V96.9392H76.3508V88.4373C76.3508 86.9914 76.6785 85.8039 77.3252 84.9068C77.9638 84.0204 78.8149 83.5712 79.8538 83.5712C80.2059 83.5712 80.6012 83.6293 81.0293 83.7442C81.4531 83.8584 81.76 83.9823 81.9411 84.1127L82.1053 84.2318V80.2903L82.0419 80.2631C81.6778 80.1083 81.1628 80.0303 80.5111 80.0303C79.5287 80.0303 78.6494 80.3459 77.8963 80.9675C77.2353 81.5138 76.7574 82.2629 76.3922 83.197H76.3508ZM65.4396 79.9182C63.6461 79.9182 62.0462 80.303 60.6852 81.0611C59.3216 81.8209 58.2671 82.9059 57.5496 84.2855C56.8353 85.6618 56.4727 87.2694 56.4727 89.0621C56.4727 90.6324 56.8243 92.0736 57.5193 93.3436C58.2147 94.6158 59.199 95.6111 60.4449 96.3014C61.689 96.9909 63.127 97.3406 64.719 97.3406C66.577 97.3406 68.1633 96.969 69.4353 96.2365L69.4866 96.207V92.6252L69.3224 92.7451C68.7462 93.1647 68.1024 93.4997 67.4096 93.7411C66.7186 93.9822 66.0885 94.1041 65.5363 94.1041C64.0021 94.1041 62.7707 93.624 61.8767 92.6778C60.9807 91.7301 60.5265 90.3996 60.5265 88.7251C60.5265 87.0401 61.0002 85.6754 61.9339 84.6683C62.8645 83.6642 64.0984 83.1549 65.6007 83.1549C66.8859 83.1549 68.1381 83.5901 69.3228 84.4495L69.4866 84.5685V80.7945L69.4337 80.7647C68.9878 80.5152 68.3799 80.3091 67.6249 80.1528C66.8734 79.9969 66.1383 79.9182 65.4396 79.9182ZM53.78 80.3188H49.8703V96.9392H53.78V80.3188ZM51.865 73.2384C51.2216 73.2384 50.6604 73.4574 50.1993 73.8914C49.7363 74.3268 49.5013 74.8749 49.5013 75.5216C49.5013 76.1583 49.7335 76.6963 50.1919 77.12C50.6474 77.5425 51.2104 77.7567 51.865 77.7567C52.5194 77.7567 53.0846 77.5425 53.5456 77.1207C54.0098 76.6963 54.245 76.1583 54.245 75.5216C54.245 74.8975 54.0161 74.3549 53.5647 73.909C53.114 73.4639 52.542 73.2384 51.865 73.2384ZM42.1102 79.0926V96.9391H46.1002V73.7473H40.578L33.5588 90.9735L26.7471 73.7473H21V96.9391H24.7495V79.0908H24.8784L32.0713 96.9391H34.9009L41.9815 79.0926H42.1102Z"
                  fill="#C6C6C6"
                />
                <path
                  d="M82.9579 40.1449H64.5659V21.7529H82.9579V40.1449Z"
                  fill="#C6C6C6"
                />
                <path
                  d="M103.265 40.1449H84.873V21.7529H103.265V40.1449Z"
                  fill="#C6C6C6"
                />
                <path
                  d="M82.9575 60.4594H64.5659V42.0674H82.9575V60.4594Z"
                  fill="#C6C6C6"
                />
                <path
                  d="M103.265 60.4594H84.873V42.0674H103.265V60.4594Z"
                  fill="#C6C6C6"
                />
              </svg>
            </div>
            <div className="flex-fill">
              <svg
                width="174"
                height="120"
                viewBox="0 0 174 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M87.9715 27.5628L76.3383 35.0798L87.9715 42.5967L76.3383 50.1136L64.7051 42.534L76.3383 35.0171L64.7051 27.5628L76.3383 20.0459L87.9715 27.5628ZM76.2764 52.494L87.9096 44.9771L99.5428 52.494L87.9096 60.0109L76.2764 52.494ZM87.9715 42.534L99.6047 35.0171L87.9715 27.5628L99.5428 20.0459L111.176 27.5628L99.5428 35.0798L111.176 42.5967L99.5428 50.1136L87.9715 42.534Z"
                  fill="#C6C6C6"
                />
                <path
                  d="M21.9751 71.7307H30.4788C35.9056 71.7307 40.3812 74.8637 40.3812 82.0247V83.5352C40.3812 90.7522 36.1853 93.9971 30.6467 93.9971H21.9751V71.7307ZM26.7305 75.7588V89.9131H30.367C33.444 89.9131 35.514 87.899 35.514 83.4234V82.2485C35.514 77.7728 33.3321 75.7588 30.1991 75.7588H26.7305ZM42.8988 75.9826H46.7031L47.3185 80.1785C48.0458 77.3253 49.892 75.8147 53.2488 75.8147H54.4236V80.6261H52.4655C48.6053 80.6261 47.6542 81.9688 47.6542 85.7731V94.053H42.9547V75.9826H42.8988ZM55.3747 85.3815V84.8779C55.3747 78.8358 59.235 75.535 64.4939 75.535C69.8646 75.535 73.613 78.8358 73.613 84.8779V85.3815C73.613 91.3117 69.9765 94.5006 64.4939 94.5006C58.6755 94.4447 55.3747 91.3117 55.3747 85.3815ZM68.8017 85.3255V84.8779C68.8017 81.5212 67.1233 79.5071 64.4379 79.5071C61.8085 79.5071 60.0741 81.3534 60.0741 84.8779V85.3255C60.0741 88.5704 61.7525 90.4166 64.4379 90.4166C67.1233 90.3606 68.8017 88.5704 68.8017 85.3255ZM76.0746 75.9826H79.9908L80.4384 79.3953C81.3895 77.1015 83.4035 75.535 86.3686 75.535C90.9562 75.535 93.9773 78.8358 93.9773 84.9339V85.4374C93.9773 91.3676 90.6205 94.5006 86.3686 94.5006C83.5154 94.5006 81.5573 93.2139 80.6062 91.1439V100.263H76.0187L76.0746 75.9826ZM89.2219 85.3255V84.9339C89.2219 81.3534 87.3757 79.5631 84.9141 79.5631C82.2846 79.5631 80.5503 81.5771 80.5503 84.9339V85.2696C80.5503 88.4585 82.2287 90.4725 84.8581 90.4725C87.5435 90.4166 89.2219 88.6823 89.2219 85.3255ZM100.915 90.6963L100.523 93.9971H96.4948V69.9404H101.082V79.1715C102.089 76.8218 104.103 75.535 106.957 75.535C111.264 75.5909 114.453 78.5561 114.453 84.5423V85.1017C114.453 91.0879 111.432 94.5006 106.845 94.5006C103.824 94.4447 101.866 93.046 100.915 90.6963ZM109.642 85.1017V84.6542C109.642 81.3534 107.852 79.5071 105.334 79.5071C102.761 79.5071 100.97 81.5771 100.97 84.7101V85.1017C100.97 88.4585 102.705 90.4166 105.278 90.4166C108.02 90.4166 109.642 88.6823 109.642 85.1017ZM116.467 85.3815V84.8779C116.467 78.8358 120.328 75.535 125.587 75.535C130.957 75.535 134.706 78.8358 134.706 84.8779V85.3815C134.706 91.3117 131.013 94.5006 125.587 94.5006C119.768 94.4447 116.467 91.3117 116.467 85.3815ZM129.95 85.3255V84.8779C129.95 81.5212 128.272 79.5071 125.587 79.5071C122.957 79.5071 121.223 81.3534 121.223 84.8779V85.3255C121.223 88.5704 122.901 90.4166 125.587 90.4166C128.272 90.3606 129.95 88.5704 129.95 85.3255ZM140.86 84.6542L134.538 75.9826H139.965L143.601 81.4093L147.294 75.9826H152.664L146.231 84.5982L153 93.9971H147.685L143.545 88.0109L139.517 93.9971H133.978L140.86 84.6542Z"
                  fill="#C6C6C6"
                />
              </svg>
            </div>
            <div className="flex-fill">
              <svg
                width="173"
                height="120"
                viewBox="0 0 173 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M106.485 28.0413C110.214 26.2099 112.062 26.4503 112.103 28.3066C112.153 30.718 111.797 33.9248 111.54 36.2452C110.156 48.8566 107.844 59.1619 107.67 72.1105C113.76 56.3427 118.865 45.3837 125.445 31.8864C127.533 27.5856 128.867 28.3894 130.582 27.627C137.261 24.6522 137.51 26.4752 136.64 30.1131C133.4 43.5872 125.105 86.0113 123.837 92.5438C123.472 94.4339 121.417 93.6326 120.887 92.8935C118.509 89.6037 115.824 89.5523 116.122 87.3646C117.614 76.4734 122.983 49.1475 124.384 42.7087C117.249 57.3363 109.849 75.6224 106.046 85.9907C105.242 88.1924 103.775 88.0309 102.864 86.42C101.579 84.157 99.0848 83.0017 98.6703 80.3276C97.3694 71.8256 100.162 55.6202 100.551 45.3679C96.6651 56.5673 90.1435 78.3106 87.2845 88.1343C86.1079 92.199 82.1799 91.5359 83.224 87.5743C87.5661 71.0879 96.922 41.9298 100.966 31.4472C101.919 28.9776 104.413 29.0605 106.485 28.0413Z"
                  fill="#C6C6C6"
                />
                <path
                  d="M82.8017 26.0195C81.5422 25.713 77.8878 27.6852 75.642 28.0746C74.9294 28.1989 74.2498 28.9529 74.0095 29.4917C70.413 37.7535 67.1896 45.6291 64.397 52.8036C60.8254 53.4135 56.6491 54.2165 51.9754 55.2663C55.3231 46.6789 58.7042 38.2091 62.0022 30.0633C63.6263 26.0525 59.3505 25.6714 57.6931 29.7319C55.5385 35.0106 51.5029 44.9007 47.0364 56.4282C43.7548 57.2328 40.2745 58.1525 36.6366 59.2034C33.9931 59.9666 33.8855 60.6709 35.0291 62.2562C35.6588 63.1389 36.9599 63.0499 37.5564 63.6789C39.0978 65.309 40.0342 67.2588 42.7935 67.5538C40.3323 74.1375 37.8712 80.9268 35.6422 87.4641C34.2417 91.5676 38.2276 92.407 39.7607 88.0647C42.2301 81.065 44.8321 73.9807 47.5087 66.9173C49.7378 66.3993 55.1323 65.2374 60.1126 64.1569C56.1599 74.9908 53.5577 83.2186 52.5718 87.2236C52.3895 87.9942 52.696 88.4218 52.8618 88.7359C54.1959 90.6774 55.4638 90.757 57.1791 93.1576C57.6433 93.8122 59.2012 94.1652 59.7314 92.5535C63.3941 81.4899 67.1646 71.1093 70.6781 61.8033C72.1364 61.4843 74.7633 60.8504 76.3709 58.4514C79.2297 54.1936 80.0501 55.0572 80.7381 53.7628C81.5999 52.1378 81.028 50.6122 77.9786 50.9891C77.9786 50.9891 76.8268 51.0711 74.6971 51.3139C78.078 42.6089 81.0363 35.2254 83.166 29.5989C83.8955 27.6935 83.9867 26.3013 82.8017 26.0195Z"
                  fill="#C6C6C6"
                />
                <path
                  d="M77.8133 82.4803C78.6006 84.4699 81.0617 83.8674 80.1253 81.466C79.1722 79.0197 76.8023 71.6553 76.1807 69.2828C75.3355 66.0859 78.9982 66.9602 77.142 69.0502C75.5511 70.8474 74.4902 71.5675 71.5485 74.985C68.7062 78.2839 69.4769 82.5649 72.5181 83.5104C75.9487 84.5776 78.9735 80.7973 80.8462 78.0239C82.6609 75.3382 80.9041 73.7629 79.0728 75.3506C77.896 76.3715 76.537 77.9392 75.1614 78.7845C74.0427 79.4648 73.1643 78.734 74.656 76.6806C76.3879 74.3032 78.3269 72.3112 79.7688 70.0645C82.7106 65.4862 76.8933 62.847 74.3907 65.8209C73.0482 67.4062 73.388 68.9625 73.7527 70.2982C74.3411 72.4378 76.5288 79.2677 77.8133 82.4803Z"
                  fill="#C6C6C6"
                />
              </svg>
            </div>
            <div className="flex-fill">
              <svg
                width="173"
                height="120"
                viewBox="0 0 173 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M90.0482 48.5283C90.0482 50.1859 88.6697 51.5422 86.985 51.5422C85.3002 51.5422 83.9218 50.1859 83.9218 48.5283C83.9218 46.8706 85.2236 45.5143 86.985 45.5143C88.7463 45.552 90.0482 46.9083 90.0482 48.5283ZM77.489 54.5561C77.489 54.8198 77.489 55.3096 77.489 55.3096C77.489 55.3096 76.034 53.4636 72.9325 53.4636C67.8399 53.4636 63.8195 57.3063 63.8195 62.5807C63.8195 67.855 67.7633 71.6978 72.9325 71.6978C76.0723 71.6978 77.489 69.8141 77.489 69.8141V70.6052C77.489 70.982 77.757 71.2457 78.14 71.2457H81.9307V53.9156C81.9307 53.9156 78.4463 53.9156 78.14 53.9156C77.757 53.9156 77.489 54.2547 77.489 54.5561ZM77.489 65.6699C76.7998 66.6871 75.3831 67.5536 73.6983 67.5536C70.7117 67.5536 68.4143 65.7076 68.4143 62.5807C68.4143 59.4537 70.7117 57.6077 73.6983 57.6077C75.3448 57.6077 76.8381 58.5119 77.489 59.4914V65.6699ZM84.7641 53.9156H89.2824V71.2457H84.7641V53.9156ZM151.963 53.4636C148.862 53.4636 147.407 55.3096 147.407 55.3096V45.5897H142.889V71.2834C142.889 71.2834 146.373 71.2834 146.679 71.2834C147.062 71.2834 147.33 70.9443 147.33 70.6429V69.8518C147.33 69.8518 148.785 71.7355 151.887 71.7355C156.979 71.7355 161 67.855 161 62.6183C161.038 57.344 157.018 53.4636 151.963 53.4636ZM151.236 67.516C149.513 67.516 148.134 66.6495 147.445 65.6323V59.4537C148.134 58.5496 149.666 57.57 151.236 57.57C154.222 57.57 156.52 59.4161 156.52 62.543C156.52 65.6699 154.222 67.516 151.236 67.516ZM140.591 60.9607V71.2834H136.073V61.4881C136.073 58.6249 135.154 57.457 132.588 57.457C131.21 57.457 129.832 58.1351 128.951 59.1523V71.2457H124.433V53.9156H127.994C128.377 53.9156 128.645 54.2547 128.645 54.5561V55.3096C129.946 53.9533 131.708 53.4636 133.431 53.4636C135.384 53.4636 137.03 54.0287 138.37 55.1212C139.978 56.4021 140.591 58.0598 140.591 60.9607ZM113.52 53.4636C110.419 53.4636 108.963 55.3096 108.963 55.3096V45.5897H104.445V71.2834C104.445 71.2834 107.93 71.2834 108.236 71.2834C108.619 71.2834 108.887 70.9443 108.887 70.6429V69.8518C108.887 69.8518 110.342 71.7355 113.443 71.7355C118.536 71.7355 122.556 67.855 122.556 62.6183C122.633 57.344 118.651 53.4636 113.52 53.4636ZM112.792 67.516C111.069 67.516 109.691 66.6495 109.002 65.6323V59.4537C109.691 58.5496 111.223 57.57 112.792 57.57C115.779 57.57 118.077 59.4161 118.077 62.543C118.077 65.6699 115.779 67.516 112.792 67.516ZM100.578 53.4636C101.956 53.4636 102.646 53.6896 102.646 53.6896V57.7961C102.646 57.7961 98.8932 56.5528 96.5575 59.19V71.321H92.0393V53.9156C92.0393 53.9156 95.5237 53.9156 95.83 53.9156C96.2129 53.9156 96.4809 54.2547 96.4809 54.5561V55.3096C97.3616 54.3301 99.1995 53.4636 100.578 53.4636ZM53.864 69.7011C53.6343 69.136 53.4045 68.5332 53.1748 68.0434C52.7919 67.2146 52.409 66.4234 52.1027 65.7076L52.0644 65.6699C48.848 58.7379 45.3636 51.7305 41.6878 44.8362L41.5346 44.5725C41.1517 43.8943 40.7688 43.1409 40.4242 42.3874C39.9647 41.5586 39.5052 40.6921 38.7394 39.8632C37.2461 38.0172 35.1019 37 32.8045 37C30.4688 37 28.3628 38.0172 26.7929 39.7502C26.1037 40.579 25.5676 41.4455 25.1082 42.2744C24.7253 43.0278 24.3424 43.7437 23.9977 44.4595L23.8446 44.7232C20.2453 51.6552 16.7226 58.6626 13.468 65.5569L13.4297 65.6323C13.0851 66.3857 12.7405 67.1392 12.3576 67.9681C12.1278 68.4578 11.8981 69.0229 11.6683 69.6257C11.0557 71.321 10.8642 72.941 11.094 74.5987C11.5918 78.0647 13.9657 80.9656 17.1821 82.2465C18.4074 82.7363 19.671 83 20.9728 83C21.3557 83 21.8152 82.9623 22.1981 82.9246C23.7297 82.7363 25.3379 82.2465 26.8695 81.3423C28.784 80.2875 30.6219 78.7428 32.6896 76.5577C34.7573 78.7805 36.6335 80.2875 38.5097 81.3423C40.0413 82.2088 41.6495 82.7363 43.1811 82.9246C43.564 82.9623 44.0235 83 44.4064 83C45.7082 83 47.0484 82.774 48.1971 82.2465C51.49 80.9656 53.7874 77.9894 54.2852 74.5987C54.6681 73.0164 54.4767 71.3964 53.864 69.7011ZM32.7279 72.0745C30.2007 68.9476 28.5543 65.9713 27.9799 63.4848C27.7502 62.43 27.7119 61.4881 27.8268 60.6593C27.9033 59.9058 28.2097 59.2654 28.5926 58.7379C29.4732 57.4947 30.9665 56.7035 32.7279 56.7035C34.4892 56.7035 36.0208 57.457 36.8632 58.7379C37.2461 59.303 37.5142 59.9435 37.629 60.6593C37.7822 61.4881 37.7056 62.4676 37.4759 63.4848C36.9015 65.9713 35.255 68.9099 32.7279 72.0745ZM51.4135 74.2596C51.0688 76.6708 49.4607 78.7428 47.1633 79.647C46.0528 80.0991 44.8276 80.2498 43.6023 80.0991C42.4153 79.9484 41.2666 79.6093 40.0413 78.8935C38.3565 77.9893 36.6718 76.5577 34.6807 74.4103C37.7822 70.6806 39.6584 67.2523 40.3476 64.2007C40.6922 62.769 40.7305 61.4881 40.5774 60.2826C40.3859 59.1147 39.9647 58.0598 39.3138 57.1556C37.8588 55.0835 35.4082 53.878 32.6896 53.878C29.971 53.878 27.5204 55.1212 26.0654 57.1556C25.4145 58.0598 24.9933 59.1523 24.8018 60.2826C24.6104 61.4881 24.6487 62.8067 25.0316 64.2007C25.7208 67.2523 27.6736 70.7183 30.6985 74.448C28.784 76.5577 27.061 77.9894 25.3379 78.9312C24.1126 79.6093 22.9639 79.9861 21.7769 80.1368C20.5133 80.2875 19.2881 80.0991 18.2159 79.6847C15.9185 78.7805 14.2721 76.6708 13.9657 74.2973C13.8126 73.1294 13.9275 71.9992 14.3869 70.7183C14.5401 70.2662 14.7698 69.8141 14.9996 69.249C15.3442 68.4955 15.6888 67.742 16.0717 66.9509L16.11 66.8755C19.3264 60.0188 22.8108 52.9738 26.41 46.1548L26.5632 45.8911C26.9461 45.2129 27.329 44.4595 27.6736 43.7813C28.0565 43.0278 28.4777 42.3497 28.9755 41.7469C29.971 40.6544 31.2729 40.0516 32.7279 40.0516C34.1829 40.0516 35.4848 40.6544 36.4803 41.7469C36.9781 42.3497 37.3993 43.0278 37.7822 43.7813C38.1651 44.4595 38.548 45.2129 38.8926 45.8911L39.0458 46.1548C42.6067 53.0115 46.0911 60.0565 49.3075 66.9132V66.9509C49.6904 67.7043 49.9967 68.5332 50.3796 69.249C50.6094 69.8141 50.8391 70.2662 50.9923 70.7183C51.4517 71.8862 51.6049 73.0541 51.4135 74.2596Z"
                  fill="#C6C6C6"
                />
              </svg>
            </div>
            <div className="flex-fill"></div>
            <div className="flex-fill">
              <svg
                width="174"
                height="120"
                viewBox="0 0 174 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.8246 72.266C33.3136 72.266 28.0369 66.9865 28.0369 60.4743C28.0369 53.9617 33.3136 48.6872 39.8246 48.6872C42.1195 48.6872 44.2621 49.3417 46.0721 50.4762L39.8246 60.4743L51.5862 53.683C50.3084 51.647 48.4756 49.8926 46.2595 48.5614C43.4394 46.873 39.5165 45.8281 35.1787 45.8281C28.9911 45.8281 23.5626 48.0767 20.5352 51.4439C18.2939 53.9331 16.9595 57.066 16.9595 60.4741C16.9595 63.8846 18.2939 67.0198 20.5352 69.5107C23.5704 72.8822 28.9181 75.1176 35.0037 75.1176C41.0885 75.1176 46.4345 72.8805 49.4716 69.5107C49.6379 69.3252 49.799 69.1379 49.9513 68.9436L49.4926 67.2246C47.3588 70.2704 43.8245 72.266 39.8246 72.266Z"
                  fill="#C6C6C6"
                />
                <path
                  d="M78.8189 74.4085L73.8825 55.9932C73.0895 53.0173 70.3797 50.8301 67.1536 50.8301C66.3168 50.8301 65.5151 50.9796 64.7711 51.2502L54.1438 55.1146H65.074L66.9417 62.09C65.13 60.5307 62.7703 59.5819 60.1865 59.5819C55.0558 59.5819 50.9019 63.0201 50.9019 67.2612C50.9019 71.5027 55.0558 74.9459 60.1865 74.9459C63.8801 74.9459 67.1466 73.1377 69.1614 70.3596L70.245 74.4085H78.8189ZM63.7611 71.5482C61.3944 71.5482 59.4758 69.6314 59.4758 67.2612C59.4758 64.8945 61.3944 62.976 63.7611 62.976C66.1278 62.976 68.0481 64.8945 68.0481 67.2612C68.0481 69.6314 66.1278 71.5482 63.7611 71.5482Z"
                  fill="#C6C6C6"
                />
                <path
                  d="M98.9463 50.833C98.2986 50.833 97.6859 50.9762 97.1398 51.2326L90.3163 54.4126C89.9784 52.3813 88.2139 50.833 86.0853 50.833C85.4411 50.833 84.8267 50.9762 84.2735 51.2326L75.9429 55.1144H81.8001V74.4085H90.374V57.2609C90.374 56.0777 91.3316 55.1146 92.5184 55.1146C93.6983 55.1146 94.6628 56.0777 94.6628 57.2609V74.4085H103.233V55.1144C103.233 52.7482 101.313 50.8332 98.9463 50.8332"
                  fill="#C6C6C6"
                />
                <path
                  d="M152.715 50.833C152.065 50.833 151.449 50.9762 150.894 51.2326L144.078 54.4126C143.742 52.3813 141.977 50.833 139.848 50.833C139.204 50.833 138.59 50.9762 138.035 51.2326L129.708 55.1144H135.563V74.4085H144.135V57.2609C144.135 56.0777 145.095 55.1146 146.282 55.1146C147.465 55.1146 148.422 56.0777 148.422 57.2609V74.4085H157V55.1144C157 52.7482 155.078 50.8332 152.715 50.8332"
                  fill="#C6C6C6"
                />
                <path
                  d="M131.094 62.9756C131.094 69.6819 125.659 75.1173 118.955 75.1173C112.245 75.1173 106.806 69.6819 106.806 62.9756C106.806 56.271 112.245 50.833 118.955 50.833C125.659 50.833 131.094 56.2711 131.094 62.9756ZM119.457 54.5182C119.075 53.0894 117.607 52.2413 116.178 52.6254C114.752 53.0078 113.899 54.4774 114.283 55.906L118.447 71.4324C118.832 72.8626 120.297 73.7099 121.726 73.3317C123.154 72.9449 124.003 71.4762 123.62 70.0478L119.457 54.5182Z"
                  fill="#C6C6C6"
                />
              </svg>
            </div>
            <div className="flex-fill">
              <svg
                width="173"
                height="120"
                viewBox="0 0 173 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M84.7754 16.291H87.495C100.723 17.0365 110.155 22.0568 117.148 29.0924C124.14 36.1281 129.309 45.4075 130 58.6845V61.3149C129.328 74.8042 124.068 83.7071 117.148 90.9509C109.878 97.8315 100.941 103.045 87.4511 103.708H84.7754C71.5488 102.961 62.1153 97.9428 55.1228 90.9068C48.1303 83.8711 42.9612 74.5919 42.2705 61.3149V58.6845C42.3049 58.6749 42.3218 58.6479 42.3144 58.5968C42.9758 45.3705 48.173 35.9946 55.123 29.0486C62.1049 22.0702 71.6345 17.0141 84.7754 16.291ZM76.1779 22.5602C73.5716 23.2577 71.2343 24.1435 69.1158 25.1905C62.6674 28.3773 57.3497 32.9367 53.6315 38.7809C50.0024 44.4854 46.8601 51.8237 47.3151 61.4463C47.602 67.5128 48.9871 72.6158 51.175 76.9657C55.4958 85.5546 62.0739 91.8831 71.1775 95.7295C75.6793 97.6315 81.2575 98.9657 87.5391 98.6666C93.5643 98.3799 98.7854 97.0262 103.111 94.8526C111.589 90.5923 118.27 84.019 121.973 74.9492C123.846 70.3612 125.262 65.0611 124.956 58.6405C124.377 46.4778 119.426 38.2309 112.893 31.9419C109.661 28.8301 105.768 26.1831 101.182 24.2699C96.731 22.4137 90.9373 21.0373 84.7321 21.3326C81.6815 21.4778 78.8039 21.8574 76.1779 22.5602Z"
                  fill="#C6C6C6"
                />
                <path
                  d="M82.0999 48.645C83.4897 49.5648 84.9112 50.4531 86.2233 51.4508C83.2593 53.3108 80.3536 55.2293 77.4065 57.1061C77.854 57.4481 78.3628 57.7286 78.8101 58.0706C81.7818 56.189 84.7544 54.3085 87.7148 52.4152C89.0425 53.2365 90.3496 54.0783 91.575 55.0019C88.6086 56.8744 85.7417 58.846 82.802 60.7448C83.2376 61.0988 83.7715 61.3542 84.2493 61.6655C87.2877 59.8068 90.2505 57.8725 93.2415 55.9665V49.741H99.8213V62.1479C101.678 62.25 103.725 62.1625 105.656 62.1914V68.0224H93.2415V62.1037C89.5942 64.3183 85.8565 66.8228 82.1877 69.162C78.367 66.6825 74.6847 64.0639 70.8706 61.5778C69.7657 65.0781 67.1414 67.7112 62.7993 68.0224C60.0912 68.2159 57.014 67.8778 53.8948 68.0224V49.741C57.7944 49.9992 62.0764 49.2199 65.168 50.1794C67.9016 51.0279 69.8396 53.2078 70.7388 55.9224C74.5557 53.5265 78.3114 51.0697 82.0999 48.645ZM60.1673 55.6156V62.1916C61.7346 62.1993 62.9267 62.2903 63.8518 61.578C65.2281 60.5185 65.5054 57.8919 64.2904 56.4924C63.4796 55.5586 62.1106 55.3625 60.2109 55.4841C60.1603 55.4915 60.1635 55.5535 60.1673 55.6156ZM107.366 49.741H113.946V62.1916H119.736V68.0226H107.322V49.8726C107.318 49.8104 107.315 49.7484 107.366 49.741Z"
                  fill="#C6C6C6"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="container my-5 py-5 text-center">
          <h1 className="fw-bold">
            <span>About </span>
            the Apllication.
          </h1>
          <p className="mt-4">
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </p>
          <div className="mt-5 mx-5">
            <Row xs={1} md={3} className="g-5">
              <Col>
                <Card className="bgSecondary border-0 py-3">
                  <Card.Body>
                    <i className="bi bi-telephone bg-light textMain p-3 rounded-circle"></i>
                    <Card.Title className="pt-4 pb-4">24/7 Support</Card.Title>
                    <Card.Text>
                      We have 24/7 contact support so you can contact us
                      whenever you want and we will respond it.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="rounder border-0 py-3">
                  <Card.Body>
                    <i className="bi bi-lock bg-light textMain p-3 rounded-circle"></i>
                    <Card.Title className="pt-4 pb-4">Data Privacy</Card.Title>
                    <Card.Text>
                      We make sure your data is safe in our database and we will
                      encrypt any data you submitted to us.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="bgSecondary border-0 py-3">
                  <Card.Body>
                    <i className="bi bi-download bg-light textMain p-3 rounded-circle"></i>
                    <Card.Title className="pt-4 pb-4">Easy Download</Card.Title>
                    <Card.Text>
                      Zwallet is 100% totally free to use it’s now available on
                      Google Play Store and App Store.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <div style={{ backgroundColor: "#473AD10F" }}>
          <div className="container mb-5">
            <div className=" d-flex">
              <div>
                <Image
                  src="/Group 49.png"
                  alt=""
                  width={463}
                  height={892}
                ></Image>
              </div>
              <div className="col-lg-5 mt-lg-5 pt-lg-5 ms-5">
                <h1 className="fw-bold mt-lg-5 pt-5">
                  All The <span className="textMain">Great </span>
                  <br />
                  FazzPay Features.
                </h1>
                <div className="bg-white p-3 mt-4 rounder">
                  <b>
                    <span className="textMain">1. </span>
                    Small Fee
                  </b>
                  <p className="m-0 mt-2">
                    We only charge 5% of every success transaction done in
                    FazzPay app.
                  </p>
                </div>

                <div className="bg-white p-3 mt-4 rounder">
                  <b>
                    <span className="textMain">1. </span>
                    Small Fee
                  </b>
                  <p className="m-0 mt-2">
                    We only charge 5% of every success transaction done in
                    FazzPay app.
                  </p>
                </div>

                <div className="bg-white p-3 mt-4 rounder">
                  <b>
                    <span className="textMain">1. </span>
                    Small Fee
                  </b>
                  <p className="m-0 mt-2">
                    We only charge 5% of every success transaction done in
                    FazzPay app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-3 my-5 text-center">
          <h1 className="fw-bold mt-lg-5 pt-5">
            What Users are <span className="textMain">Saying. </span>
          </h1>
          <p className="mt-4 col-7 mx-auto">
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <div className="">
              <i className="bi bi-arrow-left me-5 bg-white p-3 rounded-circle "></i>
            </div>
            <div className="bg-white p-4 rounder ">
              <Image src="/favicon.ico" width={50} height={50}></Image>
              <h4 className="fw-nold mt-3">Next Vercel</h4>
              <p className="mt-3">Developer</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                odit in ratione. Sit facere delectus, maiores expedita
                voluptates corrupti sapiente, laudantium fuga autem, dignissimos
                veritatis saepe consequatur dolor beatae. Molestias.
              </p>
            </div>
            <div className="">
              <i className="bi bi-arrow-right ms-5 bg-white p-3 rounded-circle "></i>
            </div>
          </div>
        </div>
      </div>

      <footer className="bgMain p-5">
        <div className="container">
          <h4 className="fw-bold">FazzPay</h4>
          <p className="fw-light mt-4">
            Simplify financial needs and saving <br /> much time in banking
            needs with <br /> one single app.
          </p>
          <hr className="my-3" />
          <div className="d-flex justify-content-between">
            <p className="fw-light">2020 FazzPay. All right reserved.</p>
            <div className="d-flex">
              <p>+62 5637 8882 9901</p>
              <p className="ms-4">contact@fazzpay.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
