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
  breakpoints: ['600px', '900px', '1200px'],
  layout: {
    container: {
      px: 6,
      maxWidth: '1200px'
    }
  },
  fonts: {
    body: 'Roboto, Helvetica, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
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
    body: '400',
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
      fontSize: '16px',
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
