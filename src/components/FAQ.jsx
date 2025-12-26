import { Accordion, Box } from "@chakra-ui/react";

function FAQ() {
  return (
    <Box as="section" id="faq" bg="#333" color="white" p={10}>
      <h1 className="text-3xl font-bold text-center mb-8">
        FAQ (คำถามที่พบบ่อย)
      </h1>

      <Accordion.Root className="max-w-xl mx-auto" defaultValue={["item-1"]}>
        <Accordion.Item value="item-1">
          <Box
            borderTop="1px solid rgba(255,255,255,0.6)"
            borderBottom="1px solid rgba(255,255,255,0.6)"
            py={3}
          >
            <Accordion.ItemTrigger
              style={{ position: "relative", paddingRight: 0 }}
              className="flex w-full items-center py-4 text-left hover:bg-white/5"
            >
              <strong className="text-lg pr-10">
                Q: What makes XYZ Company's products so unique?
              </strong>

              <Accordion.ItemIndicator
                style={{ position: "absolute", right: 0, color: "white" }}
              />
            </Accordion.ItemTrigger>

            <Accordion.ItemContent className="pt-2 pb-4 text-gray-300">
              A: At XYZ Company, we pride ourselves on innovation and
              cutting-edge technology. Our products are crafted with a
              perfect blend of creativity and functionality, setting
              them apart from the competition. We constantly strive to
              push the boundaries of what's possible to deliver a
              truly exceptional user experience.
            </Accordion.ItemContent>
          </Box>
        </Accordion.Item>

        <Accordion.Item value="item-2">
          <Box borderBottom="1px solid rgba(255,255,255,0.6)" py={3}>
            <Accordion.ItemTrigger
              style={{ position: "relative", paddingRight: 0 }}
              className="flex w-full items-center py-4 text-left hover:bg-white/5"
            >
              <strong className="text-lg pr-10">
                Q: How does XYZ Company contribute to sustainability?
              </strong>

              <Accordion.ItemIndicator
                style={{ position: "absolute", right: 0, color: "white" }}
              />
            </Accordion.ItemTrigger>

            <Accordion.ItemContent className="pt-2 pb-4 text-gray-300">
         A: XYZ Company is committed to environmental responsibility. We
          implement eco-friendly practices throughout our production process,
          from sourcing materials to manufacturing. Our dedication to
          sustainability extends beyond our products, as we actively engage in
          initiatives to reduce our carbon footprint and promote a greener
          future.
            </Accordion.ItemContent>
          </Box>
        </Accordion.Item>

        <Accordion.Item value="item-3">
          <Box borderBottom="1px solid rgba(255,255,255,0.6)" py={3}>
            <Accordion.ItemTrigger
              style={{ position: "relative", paddingRight: 0 }}
              className="flex w-full items-center py-4 text-left hover:bg-white/5"
            >
              <strong className="text-lg pr-10">
                Q: What kind of support can customers expect from XYZ Company's
                customer service team?
              </strong>

              <Accordion.ItemIndicator
                style={{ position: "absolute", right: 0, color: "white" }}
              />
            </Accordion.ItemTrigger>

            <Accordion.ItemContent className="pt-2 pb-4 text-gray-300">
              : XYZ Company is committed to environmental
              responsibility. We implement eco-friendly practices
              throughout our production process, from sourcing
              materials to manufacturing. Our dedication to 
              sustainability extends beyond our products, as we actively engage
              in initiatives to reduce our carbon footprint and
              promote a greener future.
            </Accordion.ItemContent>
          </Box>
        </Accordion.Item>

        <Accordion.Item value="item-4">
          <Box borderBottom="1px solid rgba(255,255,255,0.6)" py={3}>
            <Accordion.ItemTrigger
              style={{ position: "relative", paddingRight: 0 }}
              className="flex w-full items-center py-4 text-left hover:bg-white/5"
            >
              <strong className="text-lg pr-10">
                Q: How does XYZ Company stay ahead of industry trend?
              </strong>

              <Accordion.ItemIndicator
                style={{ position: "absolute", right: 0, color: "white" }}
              />
            </Accordion.ItemTrigger>

            <Accordion.ItemContent className="pt-2 pb-4 text-gray-300">
              A: XYZ Company stays at the forefront of industry trends
              through continuous research and development. We invest
              heavily in staying ahead of the curve, monitoring market
              dynamics, and actively seeking feedback from our
              customers. By embracing innovation and staying agile, we
              ensure that our products and services evolve to meet the ever-changing needs of our dynamic customer base.
            </Accordion.ItemContent>
          </Box>
        </Accordion.Item>

        <Accordion.Item value="item-5">
          <Box borderBottom="1px solid rgba(255,255,255,0.6)" py={3}>
            <Accordion.ItemTrigger
              style={{ position: "relative", paddingRight: 0 }}
              className="flex w-full items-center py-4 text-left hover:bg-white/5"
            >
              <strong className="text-lg pr-10">
                Q: Can you tell us about XYZ Company's commitment to community
                involvement?
              </strong>

              <Accordion.ItemIndicator
                style={{ position: "absolute", right: 0, color: "white" }}
              />
            </Accordion.ItemTrigger>

            <Accordion.ItemContent className="pt-2 pb-4 text-gray-300">
              A: XYZ Company is deeply committed to giving back to the
              communities we serve. We actively engage in
              philanthropic initiatives, supporting local charities
              and community projects. Additionally, we encourage our 
              employees to participate in volunteer programs, fostering a
              culture of social responsibility. By being actively
              involved in the community, we aim to make a positive
              impact beyond the products and services we offer.
            </Accordion.ItemContent>
          </Box>
        </Accordion.Item>
      </Accordion.Root>
    </Box>
  );
}

export default FAQ;
