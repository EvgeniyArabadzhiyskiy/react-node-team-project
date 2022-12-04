export const selectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    border: 'none',
    outline: 'none',
    borderBottom: '1px solid #bdbdbd',
    backgroundColor: 'transparent',
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    fontSize: '18px',
    fontWeight: '500',
    color: '#000',
    ':hover': {
      color: '#FF6596',
    },
    transition: 'color 250ms linear',
  }),
  indicatorSeparator: (baseStyles, state) => ({
    ...baseStyles,
    display: 'none',
  }),
  placeholder: (baseStyles, state) => ({
    ...baseStyles,
    color: '#bdbdbd',
    fontSize: '18px',
  }),
};
