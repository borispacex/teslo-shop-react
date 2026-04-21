import {CustomJumbotron} from "@/shop/components/CustomJumbotron.tsx";
import {ProductsGrid} from "@/shop/components/ProductsGrid.tsx";
import {products} from "@/mocks/products.mock.ts";
import {CustomPagination} from "@/components/CustomPagination.tsx";
import {useParams} from "react-router";

export const GenderPage = () => {

    const {gender} = useParams();

    const genderLabel = gender === 'men'
    ? 'Hombres' : gender === 'women'
    ? 'Mujeres' : 'Niños';

    return (
        <>
            <CustomJumbotron title={`Productos para ${genderLabel}`} subtitle='' />

            <ProductsGrid products={products} />

            <CustomPagination totalPages={7} />
        </>
    )
}
