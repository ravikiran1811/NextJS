export default function reviewsId({
  params,
}: {
  params: { reviewsId: string; productId: string };
}) {
  return (
    <p>
      The {params.reviewsId} review of product {params.productId} id.
    </p>
  );
}
