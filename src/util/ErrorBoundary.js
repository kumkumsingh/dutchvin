import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <h1>Oops! something went wrong, please check it later.</h1>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;