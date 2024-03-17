"use client";

const Error = ({error, reset}) => {
    return (
        <div>
            <p>{error.message || "Something went wrong"}</p>
            <button onClick={reset}>Try Again</button>
        </div>
    )
}

export default Error;