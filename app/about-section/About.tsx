import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I BUILD CLEAN INTERFACES AND ROBUST BACKENDS FOR MODERN WEB EXPERIENCES."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px]">
            <AnimatedBody
              text={
                "I'm a full stack web developer currently studying at YouCode – UM6P. My focus is on building modern, scalable, and user-friendly web applications."
              }
            />
            <AnimatedBody
              text={
                "With a strong foundation in both frontend and backend development, I love bringing ideas to life — from crafting beautiful user interfaces to implementing powerful APIs and managing data effectively."
              }
            />
            <AnimatedBody
              text={
                "I work primarily with Vue.js, Nuxt.js, Tailwind CSS, TypeScript, and Node.js. On the backend, I’m experienced with Express.js, Laravel (PHP), and PL/SQL for database operations. I'm always eager to learn new technologies and improve my skills through hands-on projects."
              }
            />

            <AnimatedBody
              text={
                "Throughout my journey, I’ve worked on several academic and personal projects that have helped me strengthen my practical understanding of software development."
              }
            />
            <AnimatedBody
              text={
                "I’m motivated to continue growing as a developer and look forward to contributing to real-world projects and collaborative environments."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Frontend Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Vue.js, Nuxt.js, JavaScript, TypeScript, Tailwind CSS, HTML5, CSS3, Vitest."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Backend Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Node.js, Express, MongoDB, MySQL,  PL/SQL, REST APIs, JWT, Prisma."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Dev Tools & Platforms"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Git & GitHub, Postman, VS Code, Vite, Docker (learning)."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
