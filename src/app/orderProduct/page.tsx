"use client"
import { useRouter } from "next/navigation";
export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("order--placed");
    router.push("/");
  };
  return (
    <div>
      <h2>Order Product</h2>
      <button onClick={handleClick}>Place Order</button>
      <button onClick={()=>{router.back()}}>Back</button>
    </div>
  );
}
