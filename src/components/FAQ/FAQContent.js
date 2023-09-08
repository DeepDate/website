import * as React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQContent = () => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <Accordion className="faq-accordion" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What qualifies as a transaction?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  A transaction is one of your customer‘s activities specific to
                  your industry. Examples for financial institutions would be a
                  deposit or withdrawal, for remitters a transfer or reciept of
                  funds, for crypto exchanges a fiat or crypto trade.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>What is a rule?</Accordion.Header>
              <Accordion.Body>
                <p>
                  A rule is a <strong>specification</strong> on how to evaluate
                  a transaction or set of transations specific to your industry.
                  Examples include Excessive Cash Transactions, Change In
                  Behaviour, Fast Money Movement and Aggregate Amounts by
                  Employment type.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What happens if I exceed my plan volume?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Your AML platform will continue to work. We will simply
                  contact you to ask if you would like to upgrade to the next
                  plan or require a custom pricing solution that suits your
                  business needs.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Why are the prices so low?</Accordion.Header>
              <Accordion.Body>
                <p>
                  Our pricing does not include unnecessary software licensing
                  costs and is simply a modest mark up on the cloud computing
                  expenses that are required to process your transactions.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                What is the subscription term?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  The term is simply month-to-month with no lock in contract
                  term.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>
                How many user accounts can I have per plan?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  There is no limit on the number of user accounts that can be
                  created for your AML compliance team.S
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>
                What is Search Engine Optimization?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  But I must explain to you how all this{" "}
                  <strong>mistaken</strong> idea of denouncing pleasure and
                  praising pain was born and I will give you a complete account
                  of the system, and expound
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>
                Is the sandbox and production data all included?{" "}
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Yes. All of the transactions and rules within your sandboxes
                  and production instances are included in your company‘s
                  subscription plan.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FAQContent;
