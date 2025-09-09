import React from "react";

const Pricing = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-black pb-12  lg:pb-[90px] ">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Pricing Table
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-white sm:text-4xl md:text-[40px]">
                Our Pricing Plan
              </h2>
              <p className="text-base text-gray-400">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="-mx-4 flex flex-wrap ml-3 mr-3">
            <PricingCard
              type="Personal"
              price="$59"
              subscription="year"
              description="Perfect for using in a personal website or a client project."
              buttonText="Choose Personal"
            >
              <List>1 User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Use on 1 (one) project</List>
              <List>3 Months support</List>
            </PricingCard>

            <PricingCard
              type="Business"
              price="$199"
              subscription="year"
              description="Perfect for using in a personal website or a client project."
              buttonText="Choose Business"
              active
            >
              <List>5 User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Use on 3 projects</List>
              <List>4 Months support</List>
            </PricingCard>

            <PricingCard
              type="Professional"
              price="$256"
              subscription="year"
              description="Perfect for using in a personal website or a client project."
              buttonText="Choose Professional"
            >
              <List>Unlimited User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Unlimited project</List>
              <List>12 Months support</List>
            </PricingCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

const PricingCard = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  active,
}) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className=" relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-gray-700 bg-gray-900 px-8 py-10 shadow-lg sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]">
        <span className="mb-3 block text-lg font-semibold text-primary">
          {type}
        </span>
        <h2 className="mb-5 text-[42px] font-bold text-white">
          {price}
          <span className="text-base font-medium text-gray-400">
            / {subscription}
          </span>
        </h2>
        <p className="mb-8 border-b border-gray-700 pb-8 text-base text-gray-400">
          {description}
        </p>
        <div className="mb-9 flex flex-col gap-[14px]">{children}</div>
        <a
          href="/#"
          className={`${
            active
              ? "block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
              : "block w-full rounded-md border border-gray-700 bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white"
          }`}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const List = ({ children }) => {
  return <p className="text-base text-gray-400">{children}</p>;
};
