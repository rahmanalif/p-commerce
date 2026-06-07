import Link from "next/link";
import styles from "./ScentsGrid.module.css";

const scents = [
  {
    no: "01",
    name: "OZONE DECAY",
    type: "SYNTHETIC / METAL",
    size: "50ML / 1.7 FL.OZ",
    price: "$185",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDkvjtLxYucK1TBBn3P4qEvpQ52B2V7C5MfZdEbT94wjVfKewRir7dsI-Iab9DtYzIFlSZOqWcXeRZ3BgMWgqOjPZsX9ItPmafqr9IjkvNFER-f9_z_2Y9Un32lbAFOKZv4e6qHiQoQUjuwlK2WxXsBfoSXTccSwEcTORAjAPSh8yNn_vNf6ZQT9Ne1kv2jcXM1ay4xIuyIixyv3n2df9HqzZJifjA2VTEB2oX66MoxqVkU3tjyGswJt9MDk9bIIiaBNg7SnoDgWRE",
  },
  {
    no: "02",
    name: "CONCRETE RAIN",
    type: "MINERAL / PETRICHOR",
    size: "50ML / 1.7 FL.OZ",
    price: "$190",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXMw5tixawTx3_TqzyDeXdz93x_-N9rj9lT_-mepbJAqMmizULEdGB2L17CzshBNMiPMa3Vs9zZQOi5SF54sh7UOA06QalRgbKyUAzc1l0pby3AmHnnTdFEqHQxg2lCQJ5bzfLU9mbKEIlrTpssH_h15wYHK2pvmD2eKr6L4wMVXKtIsvKQyrSikmVBq_L_nSzwUHN9UglL3RPbMyWwbgqGT2YzX8fNXtVFHk52xslVjTvLXn4d_2WlxWjCtDMJyzyjVJfDBCAwgs",
  },
  {
    no: "03",
    name: "BURNT TIMBER",
    type: "WOODY / SMOKE",
    size: "100ML / 3.4 FL.OZ",
    price: "$240",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGFI_285_s13yFfZX71SFMDU8u6VrJW0bbzfUSfimHGJDfS08GPuxdgjXSOXOi4E2BmX4hv9w7jHC46lzV7Gt2eHg7Ff6CJm9eIn8DcBkwznmu8Wge9we-aPoeRIhzLCCv7EgXjG0PtF5hRQ1IQSMArE6-QADby_ZeCO3JoGDLhzKTVcwidLDPEzljUdGxDTtIeLMNRSfCi-aKTVXW8eKywnyBrrprSOAkdHerLC8bNUN2XOH4mu1lysk9dUjfRgaehi05UvLczM4",
  },
  {
    no: "04",
    name: "NEON CITRUS",
    type: "CITRUS / ELECTRIC",
    size: "50ML / 1.7 FL.OZ",
    price: "$185",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnSnx5WCaP3nAnoQMBnoKIi_1kWIq9EqCui-22W8f1Jdu7hXNcToibZBTUV_yoH1J08CTWyuR5JEVFKG3pYclG1kGX600jfJtNx6Gs-zh0_WzIp1QYK5bSawHT7EBUJT5KXqRU_BZLBrXLw5sw8tSGO_NMVVTNEHa9ZAWK65IDIcZclSkRF1Z-oGDcyr8LTTPONCmQ45OYriJcDkbznTD_rmriT2PRb6xvn6Nf8GTjP3l91cjc9PC1v9j_Wax_FCUpcVgKyEizgf4",
  },
];

export default function ScentsGrid() {
  return (
    <section className="w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-outline-variant border border-outline-variant">
        {scents.map((scent) => (
          <article
            key={scent.no}
            className="bg-background group relative flex flex-col justify-between h-[400px] md:h-[500px] hover:bg-surface-container-low transition-colors duration-300"
          >
            <Link
              href={`/scents/${scent.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="absolute inset-0 z-20"
            />
            <div className="p-4 flex justify-between items-start z-10">
              <span className="font-technical-label text-technical-label bg-surface-variant px-2 py-1 rounded-DEFAULT uppercase">
                NO. {scent.no}
              </span>
              <button className="text-on-surface-variant hover:text-primary transition-colors relative z-30">
                <span className="material-symbols-outlined">favorite</span>
              </button>
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-8 overflow-hidden">
              <img
                src={scent.image}
                alt={`${scent.name} perfume bottle`}
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 z-10 bg-background/80 backdrop-blur-sm border-t border-transparent group-hover:border-outline-variant transition-colors mt-auto">
              <h2 className="font-headline-sm text-headline-sm font-bold uppercase mb-1">
                {scent.name}
              </h2>
              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-1">
                  <span className="font-technical-value text-technical-value text-on-surface-variant uppercase">
                    {scent.type}
                  </span>
                  <span className="font-technical-value text-technical-value text-on-surface-variant uppercase">
                    {scent.size}
                  </span>
                </div>
                <span className="font-technical-label text-technical-label font-bold">
                  {scent.price}
                </span>
              </div>
              <div className="mt-4 h-0 overflow-hidden group-hover:h-12 transition-all duration-300 flex items-center relative z-30">
                <Link href="/cart" className={styles.btn_wrapper}>
                  <button className={`${styles.add_to_cart_button} font-technical-label text-technical-label uppercase`}>
                    <span>ADD TO CART</span>
                  </button>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <button className="bg-transparent border border-on-surface text-on-surface font-technical-label text-technical-label uppercase px-8 py-4 hover:bg-on-surface hover:text-background transition-colors duration-300">
          LOAD MORE [ 12 REMAINING ]
        </button>
      </div>
    </section>
  );
}
