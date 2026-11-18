import Link from "next/link";
import EnquireButton from "@/components/EnquireButton";
import { h2, h3, p, strong, link, ul, ol, li } from "./styles";

export const meta = {
  slug: "pet-bottle-making-machine-price",
  title: "PET Bottle Making Machine Price in Delhi & India (2026 Buyer's Guide)",
  metaTitle:
    "PET Bottle Making Machine Price in Delhi & India (2026) | GS Machinery",
  description:
    "Check PET bottle making machine price in Delhi & India. Prices start at ₹3.90 lakh. Compare 2 cavity, 6 cavity and fully automatic models, hidden costs and ROI.",
  keywords:
    "pet bottle making machine price, pet bottle making machine price In Delhi, pet bottle making machine price In India",
  excerpt:
    "A PET bottle making machine costs between ₹3,90,000 and ₹14,00,000 in India in 2026. Compare models, hidden costs and ROI before you buy.",
  category: "Buyer's Guide",
  date: "2026-11-18",
  image: "/products/2-Cavity-Pet-Blowing-Machine.jpg",
};

const priceList = [
  ["2 Cavity Pet Blowing Machine", "₹3,90,000", "Small units, start-ups, first-time buyers"],
  ["Pharma Bottle Making Machine", "₹4,09,000", "Pharma and small-volume bottles"],
  ["Plastic Jar Making Machine", "₹4,90,000", "Jars and wide-mouth containers"],
  ["6 Cavity Fully Automatic Handfeed Pet Bottle Making Machine", "₹10,00,000", "Mid-size bottling plants"],
  ["Fully Automatic Bottle Making Machine", "₹12,50,000", "High-speed, continuous production"],
  ["Automatic Blow Molding Machine", "₹14,00,000", "Large-scale production"],
];

const priceFactors = [
  ["Number of cavities.", "More cavities means more bottles per cycle. A 2 cavity machine costs much less than a 6 cavity machine, but it also produces less."],
  ["Level of automation.", "Manual and semi-automatic machines cost less. Fully automatic machines cost more because they handle loading, heating and blowing on their own."],
  ["Bottle size and shape.", "A machine for small pharma bottles is different from one for 1 litre or larger water bottles."],
  ["Production speed.", "The more bottles per hour you need, the higher the investment."],
  ["Build quality and parts.", "Good heating systems, frames and electrical parts cost more, but they last longer and need fewer repairs."],
  ["After-sales support.", "A very cheap machine with no service support can cost you far more in downtime later."],
];

const hiddenCosts = [
  ["Moulds.", "Each bottle shape needs its own mould. If you plan to make several sizes, you will need more than one."],
  ["Air compressor.", "PET blowing needs high-pressure air, so a suitable compressor is required."],
  ["Chiller.", "Cooling is needed to keep the moulds at the right temperature."],
  ["Preforms.", "This is your raw material, and it is a regular running cost."],
  ["Electrical setup.", "Check that your factory has the right power supply and capacity."],
  ["Space.", "Bigger machines need more floor area and a proper layout."],
  ["Transport and GST.", "Add freight and tax to your total cost."],
  ["Installation and training.", "At GS Machinery, our engineers help with installation and train your operators."],
];

const comparison = [
  ["Starting price", "₹3.90 lakh", "₹10 lakh and above"],
  ["Manpower needed", "More", "Less"],
  ["Output", "Low to medium", "Medium to high"],
  ["Best for", "Start-ups, small batches", "Large, continuous production"],
  ["Running cost", "Higher labour cost", "Lower labour cost"],
];

const whyUs = [
  "ISO 9001:2015 certified manufacturing",
  "Fair and transparent pricing with no hidden costs",
  "Delivery across India, usually within about 10 days of order confirmation",
  "Installation support and operator training",
  "Spare parts and technical support after purchase",
  "Customisation for different bottle and jar sizes",
];

export const faqs = [
  {
    question: "What is the price of a PET bottle making machine in India?",
    answer:
      "In 2026, a PET bottle making machine in India costs from ₹3,90,000 for a semi-automatic 2 cavity machine to ₹14,00,000 for a large automatic blow molding machine. The final price depends on cavity count, automation level, bottle size and mould. GS Machinery offers six models across this range.",
  },
  {
    question: "What is the price of a 2 cavity pet blowing machine?",
    answer:
      "A 2 cavity pet blowing machine from GS Machinery costs ₹3,90,000 per piece. It is a semi-automatic machine suited to small units and first-time buyers. Moulds and supporting equipment depend on your bottle size and production target, so ask for a full quote before you decide.",
  },
  {
    question: "How much does a fully automatic PET bottle making machine cost?",
    answer:
      "A fully automatic PET bottle making machine from GS Machinery costs between ₹10,00,000 and ₹14,00,000. The 6 Cavity Fully Automatic Handfeed machine is ₹10,00,000, the Fully Automatic Bottle Making Machine is ₹12,50,000, and the Automatic Blow Molding Machine is ₹14,00,000.",
  },
  {
    question: "Is a semi-automatic or fully automatic PET machine better?",
    answer:
      "A semi-automatic machine is better when you want a low starting cost, and a fully automatic machine is better when your volume is high. Semi-automatic models start at ₹3,90,000 but need more manpower. Fully automatic models start at ₹10,00,000 and reduce labour cost over time.",
  },
  {
    question: "What costs come on top of the machine price?",
    answer:
      "Beyond the machine price, plan for moulds, an air compressor, a chiller, preforms, electrical setup, transport, GST, and installation. Moulds depend on the bottle shape and size you make. Ask every supplier for a full quote that includes these items so you can compare offers fairly.",
  },
  {
    question: "Which PET bottle making machine should I buy for my budget?",
    answer:
      "Under ₹5 lakh, choose a 2 cavity semi-automatic machine. Between ₹10 lakh and ₹15 lakh, choose a 6 cavity fully automatic or fully automatic machine if you already have steady orders. For pharma bottles or jars, pick the machine built for that product.",
  },
  {
    question: "Does GS Machinery deliver across India?",
    answer:
      "Yes. GS Machinery delivers PET bottle making machines across India, usually within about 10 days of order confirmation. Custom configurations may take a little longer. The machines are built in Delhi and shipped to buyers in every major market.",
  },
  {
    question: "Does GS Machinery provide installation, training and customisation?",
    answer:
      "Yes. GS Machinery engineers help with on-site installation and train your operators. The company also offers different cavity counts, capacities and mould sizes based on the bottle or jar you want to make.",
  },
];

export default function PetBottleMachinePriceBlog() {
  return (
    <>
      {/* ===================== QUICK ANSWER ===================== */}
      <div className="rounded-2xl border border-[#b99631] bg-[#fbf8f2] p-6 sm:p-8">
        <h2 className="text-[22px] sm:text-[26px] font-extrabold text-[#232831] leading-tight mb-4">
          Quick Answer: PET Bottle Making Machine Price in India (2026)
        </h2>
        <p className={p}>
          <strong className={strong}>
            A{" "}
            <Link href="/" className={link}>
              PET bottle making machine
            </Link>{" "}
            costs between ₹3,90,000 and ₹14,00,000 in India in 2026.
          </strong>{" "}
          A semi-automatic 2 cavity machine starts at ₹3,90,000, while fully
          automatic machines range from ₹10,00,000 to ₹14,00,000. The final
          price depends on cavity count, automation level, bottle size and
          moulds.
        </p>
        <ul className={ul}>
          <li className={li}>
            <strong className={strong}>Small unit or start-up:</strong> 2
            Cavity Pet Blowing Machine at ₹3,90,000
          </li>
          <li className={li}>
            <strong className={strong}>Mid-size plant:</strong> 6 Cavity
            Fully Automatic Handfeed Machine at ₹10,00,000
          </li>
          <li className={li}>
            <strong className={strong}>
              High-speed or large-scale production:
            </strong>{" "}
            Fully Automatic Bottle Making Machine at ₹12,50,000 or Automatic
            Blow Molding Machine at ₹14,00,000
          </li>
        </ul>
        <p className="text-sm leading-6 text-gray-500 italic">
          Source: GS Machinery price list, 2026. Prices are starting prices
          per piece. Get an exact quote based on your bottle size.
        </p>
      </div>

      <p className={`${p} mt-10`}>
        If you are planning to start a bottling business, the first
        question on your mind is simple:{" "}
        <strong className={strong}>
          how much does a PET bottle making machine cost?
        </strong>
      </p>
      <p className={p}>
        The honest answer is that it depends. In the Indian market you will
        see machines listed anywhere from a few lakh rupees to well over ₹20
        lakh, and it is hard to know why. In this guide, GS Machinery
        explains the real price of PET bottle making machines in Delhi and
        across India, what changes the price, which costs buyers forget, and
        how to pick a machine that fits your budget.
      </p>

      {/* ===================== PRICE LIST ===================== */}
      <h2 className={h2}>PET Bottle Making Machine Price List 2026</h2>
      <p className={p}>
        Here are the current prices of the machines we offer at GS
        Machinery. All machines are built in Delhi and delivered across
        India.
      </p>
      <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-4">
        <table className="w-full min-w-[560px] text-left text-[14px] sm:text-[15px]">
          <thead className="bg-[#232831] text-white">
            <tr>
              <th className="px-5 py-4 font-bold">Machine</th>
              <th className="px-5 py-4 font-bold whitespace-nowrap">
                Starting Price
              </th>
              <th className="px-5 py-4 font-bold">Best For</th>
            </tr>
          </thead>
          <tbody>
            {priceList.map(([name, price, best], i) => (
              <tr
                key={name}
                className={i % 2 ? "bg-[#fbf8f2]" : "bg-white"}
              >
                <td className="px-5 py-4 text-[#232831]">{name}</td>
                <td className="px-5 py-4 font-semibold text-[#b99631] whitespace-nowrap">
                  {price}
                </td>
                <td className="px-5 py-4 text-gray-600">{best}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm leading-6 text-gray-500 italic mb-4">
        Prices are per piece and are starting prices. The final quote
        depends on your bottle size, mould and configuration.{" "}
        <Link href="#contact" className={link}>
          Contact us
        </Link>{" "}
        for an exact quote.
      </p>

      {/* ===================== PRICE BY TYPE ===================== */}
      <h2 className={h2}>PET Bottle Making Machine Price by Type</h2>

      <h3 className={h3}>Semi-Automatic Machines: From ₹3.90 Lakh</h3>
      <p className={p}>
        In a semi-automatic machine, an operator loads the preforms by hand
        and the machine does the heating and blowing. Our{" "}
        <Link href="/#top-products" className={`${link} font-bold`}>
          2 Cavity Pet Blowing Machine
        </Link>{" "}
        at ₹3,90,000 is the most popular choice for people entering this
        business. It keeps the investment low and lets you start production
        quickly.
      </p>

      <h3 className={h3}>Fully Automatic Machines: ₹10 Lakh to ₹14 Lakh</h3>
      <p className={p}>
        Fully automatic machines run the whole process with very little
        manual work. They cost more upfront, but they give higher output,
        consistent quality and lower labour cost. This makes them the right
        choice for large water, beverage and oil bottling plants.
      </p>

      <h3 className={h3}>Specialised Machines: ₹4 Lakh to ₹5 Lakh</h3>
      <p className={p}>
        If you make pharma bottles or plastic jars, you need a machine built
        for that job. Our Pharma Bottle Making Machine (₹4,09,000) and
        Plastic Jar Making Machine (₹4,90,000) are made for these needs.
      </p>

      {/* ===================== PRICE FACTORS ===================== */}
      <h2 className={h2}>
        What Decides the Price of a PET Bottle Making Machine?
      </h2>
      <p className={p}>
        Two machines that look alike can have very different prices. These
        are the main reasons.
      </p>
      <ol className={ol}>
        {priceFactors.map(([label, text]) => (
          <li key={label} className={li}>
            <strong className={strong}>{label}</strong> {text}
          </li>
        ))}
      </ol>

      {/* ===================== HIDDEN COSTS ===================== */}
      <h2 className={h2}>Costs Most Buyers Forget</h2>
      <p className={p}>
        The machine price is not the full investment. Before you finalise
        your budget, plan for these as well.
      </p>
      <ul className={ul}>
        {hiddenCosts.map(([label, text]) => (
          <li key={label} className={li}>
            <strong className={strong}>{label}</strong> {text}
          </li>
        ))}
      </ul>
      <p className={p}>
        Ask every supplier for a full quote that includes all of these, so
        you can compare offers fairly.
      </p>

      {/* ===================== BUDGET ===================== */}
      <h2 className={h2}>How to Choose a Machine for Your Budget</h2>
      <p className={p}>
        <strong className={strong}>If your budget is under ₹5 lakh:</strong>{" "}
        Start with a 2 cavity semi-automatic machine. It is a low-risk way
        to enter the business and learn the market.
      </p>
      <p className={p}>
        <strong className={strong}>
          If your budget is ₹10 lakh to ₹15 lakh:
        </strong>{" "}
        Go for a 6 cavity fully automatic or fully automatic machine if you
        already have steady orders and need higher output with less
        manpower.
      </p>
      <p className={p}>
        <strong className={strong}>
          If you make pharma bottles or jars:
        </strong>{" "}
        Choose the machine built for that product instead of forcing a
        general machine to do it.
      </p>
      <p className={p}>Before buying, answer these questions:</p>
      <ul className={ul}>
        <li className={li}>How many bottles do you need to produce per day?</li>
        <li className={li}>What size and shape of bottles will you make?</li>
        <li className={li}>Do you have the space and power supply ready?</li>
        <li className={li}>Will you expand in the next 2 to 3 years?</li>
      </ul>
      <p className={p}>
        If you expect to grow, it can be smarter to buy a slightly bigger
        machine now than to replace a small one in a year.
      </p>

      {/* ===================== SEMI VS FULLY ===================== */}
      <h2 className={h2}>
        Is a Semi-Automatic or Fully Automatic Machine Better?
      </h2>
      <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-5">
        <table className="w-full min-w-[480px] text-left text-[14px] sm:text-[15px]">
          <thead className="bg-[#232831] text-white">
            <tr>
              <th className="px-5 py-4"></th>
              <th className="px-5 py-4 font-bold">Semi-Automatic</th>
              <th className="px-5 py-4 font-bold">Fully Automatic</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map(([row, semi, full], i) => (
              <tr key={row} className={i % 2 ? "bg-[#fbf8f2]" : "bg-white"}>
                <td className="px-5 py-4 text-[#232831]">{row}</td>
                <td className="px-5 py-4 text-gray-600">{semi}</td>
                <td className="px-5 py-4 text-gray-600">{full}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={p}>
        Neither is better for everyone. A semi-automatic machine saves money
        at the start. A fully automatic machine saves money over time when
        your volume is high.
      </p>

      {/* ===================== ROI ===================== */}
      <h2 className={h2}>How to Think About Return on Investment</h2>
      <p className={p}>
        A simple way to check if a machine makes sense is to compare what
        you earn per bottle with what you spend.
      </p>
      <div className="rounded-2xl bg-[#fbf8f2] border-l-4 border-[#b99631] px-6 py-5 mb-5 space-y-3">
        <p className="text-[15px] sm:text-[16px] leading-7 font-bold text-[#232831]">
          Monthly profit = (selling price per bottle − cost per bottle) ×
          bottles produced per month
        </p>
        <p className="text-[15px] sm:text-[16px] leading-7 font-bold text-[#232831]">
          Payback time = total investment ÷ monthly profit
        </p>
      </div>
      <p className={p}>
        <em>
          Example with assumed numbers (for understanding only, not a
          promise of returns):
        </em>{" "}
        if your total investment is ₹6,00,000 and your net profit is
        ₹50,000 per month, you would recover your investment in about 12
        months. Your own numbers will depend on preform cost, selling price,
        orders and running expenses.
      </p>
      <p className={p}>
        The main point: the cheapest machine is not always the best, and the
        most expensive machine is not always needed. The best machine is the
        one your orders can keep busy.
      </p>

      {/* ===================== WHY US ===================== */}
      <h2 className={h2}>Why Buy from GS Machinery?</h2>
      <p className={p}>
        Since 2008, GS Machinery has supplied PET bottle making machines to
        clients across India, from small water bottling units to beverage
        and pharma packaging plants. When you choose us, you get:
      </p>
      <ul className={ul}>
        {whyUs.map((item) => (
          <li key={item} className={li}>
            {item}
          </li>
        ))}
      </ul>
      <p className={p}>
        Want to know more about our company and complete range? Visit our
        page for the leading{" "}
        <Link href="/" className={link}>
          pet bottle making machine manufacturer in Delhi
        </Link>
        .
      </p>

      {/* ===================== FAQ ===================== */}
      <h2 className={h2}>Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-2xl border border-gray-200 bg-white px-6 py-5 hover:border-[#b99631] transition-colors duration-300"
          >
            <h3 className="text-[16px] sm:text-[18px] font-bold text-[#232831] mb-2">
              {faq.question}
            </h3>
            <p className="text-[15px] leading-7 text-gray-600">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      {/* ===================== CTA ===================== */}
      <div className="mt-16 text-center bg-[#232831] rounded-2xl px-6 sm:px-12 py-12">
        <h2 className="text-[22px] sm:text-[28px] font-extrabold text-white leading-tight mb-4">
          Get the Right Price for Your Requirement
        </h2>
        <p className="text-[15px] leading-7 text-gray-400 max-w-2xl mx-auto mb-5">
          Every business is different, so the best way to know your exact
          cost is to talk to our team. Tell us your bottle size and daily
          production target, and we will suggest the right machine and give
          you a clear quote.
        </p>
        <p className="text-[15px] leading-7 text-gray-300 max-w-2xl mx-auto mb-8">
          <strong className="font-bold text-white">GS Machinery</strong>{" "}
          Kh. No. 10/3, Ground Floor, Near Shani Mandir, Tikri Khurd
          Village, Delhi - 110040{" "}
          <strong className="font-bold text-white">Phone:</strong>{" "}
          <a
            href="tel:+918588966670"
            className="hover:text-[#b99631] transition-colors duration-300"
          >
            +91 8588966670
          </a>
        </p>
        <EnquireButton className="inline-block rounded-full bg-[#b99631] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-[#a3812a] cursor-pointer">
          Enquire Now for the Best Price
        </EnquireButton>
      </div>
    </>
  );
}
