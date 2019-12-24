// third-party libraries
import React from 'react';
import PropTypes from 'prop-types';

// components
import Button from '../Button';

// styles
import './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  render() {
    const {
      state: { hasError },
      props: { children },
    } = this;

    if (hasError) {
      return (
        <div className='error-container'>
          <div className='error-container__content'>
            <p className='error-message'>Something went wrong!!!</p>
            <Button
              onClick={() => window.location.reload()}
              name='Click To Try Again'
            />
          </div>
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
