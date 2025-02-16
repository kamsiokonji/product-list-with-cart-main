import data from "@/data/data.json";
import useMobile from "@/lib/utils.ts";
import AddToCart from "@/components/features/add-to-cart.tsx";

export default function Products() {
  const isMobile = useMobile();

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <div key={item.id} className={"flex flex-col"}>
            <div className="relative">
              <img
                src={isMobile ? item.image.mobile : item.image.desktop}
                alt="product-image"
                className={"h-64 w-full object-cover object-center rounded-lg"}
              />

              <AddToCart
                className={"relative bottom-7"}
                key={item.id}
                itemId={item.id}
                item={item}
              />
            </div>

            <div className={"flex flex-col space-y-2"}>
              <h1 className={"text-primary-foreground text-lg"}>
                {item.category}
              </h1>

              <h1 className={"text-foreground font-semibold text-xl"}>
                {item.name}
              </h1>

              <h1 className={"text-destructive font-semibold text-lg"}>
                ${item.price.toFixed(2)}
              </h1>
            </div>
          </div>
        ))}
    </div>
  );
}
