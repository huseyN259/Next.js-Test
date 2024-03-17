import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div>
            not-found
            <Link href="/" prefetch={false}>
                Back to home
            </Link>
        </div>
    );
};

export default NotFound;