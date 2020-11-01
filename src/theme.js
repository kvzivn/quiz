export default {
  space: [
    0,
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '4rem'
  ],
  breakpoints: ['600px', '900px', '1200px', '1600px'],
  layout: {
    container: {
      px: 6,
      maxWidth: '1200px'
    }
  },
  fonts: {
    body: 'Jayway, Raleway, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    heading: 'inherit',
  },
  fontSizes: [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.875rem',
    '2.25rem',
    '3.25rem'
  ],
  lineHeights: {
    body: 1.35,
    heading: 1.15
  },
  letterSpacings: {
    body: '.025em',
    heading: '.01em'
  },
  fontWeights: {
    body: '300',
    heading: '300'
  },
  colors: {
    primary: '#000',
    background: '#fafafa',
  },
  text: {
    heading: {
      fontWeight: 'heading',
      color: 'primary',
      lineHeight: 'heading'
    }
  },
  buttons: {
    primary: {
      px: 8,
      py: 2,
      fontSize: '20px',
      fontWeight: '500',
      backgroundColor: '#fff',
      border: '2px solid',
      borderColor: 'primary',
      borderRadius: 0,
      cursor: 'pointer',
      color: 'primary',
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      transition: '.1s background-color linear, .1s color linear',
      '&:hover': {
        backgroundColor: 'primary',
        color: 'white'
      },
      '&:focus': {
        outline: 'none'
      }
    }
  },
  cards: {
    primary: {
      width: '100%',
      boxShadow: '0 20px 30px 0 rgba(79,79,79,.1)',
      backgroundColor: 'white',
      fontSize: ['18px', '20px', '1.75vw'],
      borderRadius: '8px',
      py: '4vw',
      px: [8, '4vw', '5vw'],
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'transform .15s ease-in-out, box-shadow .15s ease-in-out',
      userSelect: 'none',
      '&:hover': {
        transform: 'scale(1.025)',
        boxShadow: '0 24px 32px 0 rgba(41,41,41,.2)',
      }
    }
  },
  styles: {
    root: {
      m: 0,
      p: 0,
      boxSizing: 'border-box',
      backgroundColor: 'background',
      color: 'primary',
      fontFamily: 'body',
      lineHeight: 'body',
      letterSpacing: 'body',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
    },
    h1: {
      fontWeight: 700,
      lineHeight: 1.15,
      color: 'primary'
    }
  }
}
