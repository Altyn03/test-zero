import Image from "next/image";
import { FC } from "react";

const NotFoundPage: FC = () => {
    return (
        <Image
            style={{ margin: "0 auto" }}
            src="https://cdn2.hubspot.net/hubfs/242200/shutterstock_774749455.jpg"
            alt="Not Found Page"
            width={1200}
            height={900}
        />
    );
};

export default NotFoundPage;
