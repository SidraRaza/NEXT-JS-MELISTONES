export default function ProductDetails({ params }: { params: { productId: string } }) {
    return <div className="font-bold pt-4  text-2xl">Details About Products {params.productId}</div>;
}