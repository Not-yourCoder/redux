import { useRouteError } from "react-router-dom";
import { CustomError } from "../types/app.type";

export default function ErrorPage() {
    const error = useRouteError() as CustomError;

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error?.statusText || error?.message}</i>
            </p>
        </div>
    );
}