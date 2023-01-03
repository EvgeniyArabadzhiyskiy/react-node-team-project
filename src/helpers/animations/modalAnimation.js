const modalType = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const modalAnimation = {
  variants: modalType,
  initial: 'hidden',
  animate: 'show',
  exit: 'hidden',
};
