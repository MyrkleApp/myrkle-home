export const generateAnimateObject = (leftOffset: number = 0, topOffset: number = 0) => {
  return {
    top: "calc(50% - 100px)",
    left: "50%",
    transform: `translate(calc(-50% - ${leftOffset}px), calc(-50% - ${topOffset}px))`,
    transition: { duration: 0.8, delay: 0.4 },
  };
};