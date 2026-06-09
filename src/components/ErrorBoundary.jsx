import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error('Amber Gift Experience render error:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="runtime-fallback" role="alert" aria-label="Amber Gift Experience fallback">
          <p>Amber Gift Experience</p>
          <h1>For Amber…</h1>
          <p>A little piece of my heart, made with time, patience, and love.</p>
          <button type="button">Open Your Gift</button>
        </main>
      );
    }

    return this.props.children;
  }
}
