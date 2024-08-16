export const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    p: 4,
    maxWidth: '1200px',
    margin: '0 auto',
  };
  
export const headerStyles = {
  fontFamily: '"Young Serif", serif',
  fontWeight: 700,
  fontSize: '2.5rem',
};

export const boxStyles = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '100%',
  mt: 2,
};

export const contentBoxStyles = {
  flex: 1,
  mr: { md: 2 },
  mt: { xs: 2, md: 0 },
};

export const imgBoxStyles = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  order: { xs: -1, md: 0 },
  paddingBottom: '20px',
};

export const typographyStyles = {
  mb: 2,
  fontFamily: "'Belanosima', sans-serif",
  fontSize: '1.5rem',
};
