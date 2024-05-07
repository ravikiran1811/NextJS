export default function productId({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div>
      <p>product is is {params.productId}</p>
    </div>
  );
}
