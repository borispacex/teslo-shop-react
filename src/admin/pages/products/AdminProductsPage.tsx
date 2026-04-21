import {AdminTitle} from "@/admin/components/AdminTitle.tsx";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Link} from "react-router";
import {CustomPagination} from "@/components/CustomPagination.tsx";
import {Button} from "@/components/ui/button.tsx";
import {PlusIcon} from "lucide-react";

export const AdminProductsPage = () => {
    return (
        <>


            <div className='flex justify-between items-center'>
                <AdminTitle title='Productos'
                            subtitle='Aqui pudes ver y administrar tus productos'/>

                <div className="flex justify-end mb-10 gap-4">
                    <Link to='/admin/products/new' >
                        <Button>
                            <PlusIcon />
                            Nuevo Producto
                        </Button>
                    </Link>
                </div>
            </div>



            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Imagen</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Precio</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead>Inventario</TableHead>
                        <TableHead>Tallas</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>
                            <img
                                src="https://placeholder.co/250x250"
                                alt="Product"
                                className="w-20 h-20 object-cover rounded-md"
                            />
                        </TableCell>
                        <TableCell>Producto 1</TableCell>
                        <TableCell>$250.00</TableCell>
                        <TableCell>Categoria</TableCell>
                        <TableCell>100 stocks</TableCell>
                        <TableCell>XS,S,L</TableCell>
                        <TableCell className="text-right">
                            <Link
                                to={`/admin/products/1`}>
                                Editar
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <CustomPagination
                totalPages={3}
            />
        </>
    )
}