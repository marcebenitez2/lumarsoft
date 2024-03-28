import { Animation } from "./animation";

const CardService = ({ lenguaje }) => {
  return (
    <Animation
      style="flex flex-col gap-4 w-full border border-zinc-800 px-4 py-4 rounded-lg"
      animationInitial={{ opacity: 0, y: 30 }}
      animationWhileInView={{ opacity: 1, y: 0 }}
      animationViewPort={{ once: true, offset: 0.5 }}
      animationTransition={{ duration: 0.7, ease: "easeOut" }}
    >
      <span className="text-sky-300 bg-blue-950 px-4 py-1 rounded-lg text-center font-semibold text-lg">
        {lenguaje.title}
      </span>
      <p>{lenguaje.description}</p>
      <TimeLine lenguaje={lenguaje} />
    </Animation>
  );
};

export default CardService;

const TimeLine = ({ lenguaje }) => {
  return (
    <div className="relative  border-s border-sky-400">
      <ol>
        <Animation
          style="ms-4 mb-4"
          animationInitial={{ opacity: 0 }}
          animationWhileInView={{ opacity: 1 }}
          animationTransition={{ duration: 0.7, ease: "easeOut" }}
          animationViewport={{ once: true }}
        >
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 bg-sky-400 animate-pulse animate-duration-[900ms]"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            {lenguaje.step1Time}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {lenguaje.step1}
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {lenguaje.descriptionStep1}
          </p>
        </Animation>
        <Animation
          style="ms-4 mb-4"
          animationInitial={{ opacity: 0 }}
          animationWhileInView={{ opacity: 1 }}
          animationTransition={{ duration: 0.7, ease: "easeOut" }}
          animationViewport={{ once: true }}
        >
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5  bg-sky-400 animate-pulse animate-duration-[900ms]"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {lenguaje.step2Time}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {lenguaje.step2}
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {lenguaje.descriptionStep2}
          </p>
        </Animation>
        <Animation
          style="ms-4  mb-4"
          animationInitial={{ opacity: 0 }}
          animationWhileInView={{ opacity: 1 }}
          animationTransition={{ duration: 0.7, ease: "easeOut" }}
          animationViewport={{ once: true }}
        >
          <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 bg-sky-400 animate-pulse animate-duration-[900ms]"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {lenguaje.step3Time}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {lenguaje.step3}
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {lenguaje.descriptionStep3}
          </p>
        </Animation>
        <Animation
          style="ms-4 mb-4"
          animationInitial={{ opacity: 0 }}
          animationWhileInView={{ opacity: 1 }}
          animationTransition={{ duration: 0.7, ease: "easeOut" }}
          animationViewport={{ once: true }}
        >
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 bg-sky-400 animate-pulse animate-duration-[900ms]"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {lenguaje.step4Time}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {lenguaje.step4}
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {lenguaje.descriptionStep4}
          </p>
        </Animation>
      </ol>
    </div>
  );
};
