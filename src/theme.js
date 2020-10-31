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
  colors: {
    primary: '#ffb3d2',
    background: '#fff',
    text: '#44474f',
  },
  cards: {
    width: 260,
    boxShadow: '0 20px 30px 0 rgba(79,79,79,.1)',
    backgroundColor: 'white',
    fontSize: 1,
    borderRadius: '8px',
    p: 4
  },
  styles: {
    root: {
      m: 0,
      p: 0,
      boxSizing: 'border-box',
      backgroundColor: 'background',
      color: 'text',
      fontFamily: 'body',
      lineHeight: 'body',
      letterSpacing: 'body',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
    },
    h1: {
      fontWeight: 700,
      lineHeight: 1.15
    }
  }
}
