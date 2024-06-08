"use client";

export default function Disclosures() {
  return (
    <div className="pb-4 lg:pb-8 space-y-4">
      <div className="flex justify-between items-center px-4 py-4 lg:py-0">
        <div className="text-xl lg:text-3xl">Disclosures</div>
      </div>
      <div className="bg-zinc-100 dark:bg-direWolf min-h-full w-full py-8 flex flex-col justify-between font-light px-4 lg:px-16">
        {/* header and ecosystem diagram */}
        <div className="flex-col justify-center space-y-8">
          <div className="flex max-w-2xl text-left text-xl font-sans tracking-widest underline underline-offset-4 decoration-1	">OurNetwork Disclosures</div>
          <div className="w-full px-12 pb-6 space-y-6 text-justify font-sans tracking-wider text-lg md:text-xl">
            <p>
              {`The views expressed in the 0xOUR LLC d/b/a OurNetwork newsletter (“`}
              <strong>
                <i>OurNetwork</i>
              </strong>
              {`” or the “`}
              <strong>
                <i>Newsletter</i>
              </strong>
              {`”) are those of Spencer Noon or such other person to whom they are attributed therein and are not the views or opinions of its respective affiliates.  Views and opinions expressed in the Newsletter or linked to therein that are attributed to third parties are not endorsed by OurNetwork or Spencer Noon, and may be included in the Newsletter for illustrative, informational or rhetorical purposes only.`}
            </p>
            <p>
              {`Any information, opinion and ideas shared in the Newsletter are intended for informational purposes only and are not to be construed as investment advice, financial advice or any offer to sell or attempt to market any security, digital asset, product or service.  The information and opinions included in the Newsletter are not directed to any investors or potential investors and do not constitute an offer to sell or a solicitation of an offer to buy any securities, digital assets or any other product and may not be used or relied upon in evaluating the merits of any investment.`}
            </p>
            <p>
              {`The Newsletter or any associated content shared, commented on or endorsed on any other platform (i.e., social media accounts or websites) (including the personal accounts of Spencer Noon and individual contributors; collectively, “`}
              <strong>
                <i>Content Distribution Outlets</i>
              </strong>
              {`“ should not be construed as or relied upon in any manner as investment, legal, tax, or other advice.  Any discussion of laws, regulations or legal actions are intended to be for informational purposes only.  You should consult your own advisers as to legal, business, tax, and other related matters concerning any investment. Any projections, estimates, forecasts, targets, prospects and/or opinions expressed in the Newsletter are subject to change without notice.`}
            </p>
            <p>
              {`Certain information contained in the Newsletter may have been obtained from third-party sources. While taken from sources believed to be reliable, OurNetwork has not independently verified the accuracy of such information. Neither OurNetwork or Spencer Noon have any obligations to verify the accuracy or update any of the content previously disclosed in the Newsletter.`}
            </p>
            <p>
              {`Under no circumstances should any posts or other information provided on OurNetwork or on associated Content Distribution Outlets that reference any pooled investment vehicle be construed as an endorsement of or offer to buy or sell any related securities. Nor should it be construed as an offer to provide investment advisory services.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
