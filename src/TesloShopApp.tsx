import {RouterProvider} from "react-router";
import {appRouter} from "@/app.route.tsx";

export const TesloShopApp = () => {
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}