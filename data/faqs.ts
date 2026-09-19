export type Faq = {
  question: string;
  answer: string;
};

/**
 * Every answer restates information from the client-approved profile or
 * describes how this website's own appointment flow works. Nothing here
 * asserts consultation lengths, walk-in policy, timings or fees, because the
 * client has not supplied them.
 */
export const faqs: Faq[] = [
  {
    question: "Which age groups does Dr. Ushapriya Sudhakar care for?",
    answer:
      "She provides comprehensive care for newborns, infants, children and adolescents — every stage of childhood, with the approach adapted to the child's age.",
  },
  {
    question: "What are her qualifications?",
    answer:
      "Dr. Ushapriya Sudhakar holds MBBS, MD Paediatrics and Neonatology, and practises as a Paediatrician and Neonatologist.",
  },
  {
    question: "What kinds of conditions does she manage?",
    answer:
      "Her practice covers common childhood infections, respiratory and gastrointestinal illnesses, allergies, nutritional concerns, growth and developmental assessment, and adolescent health, through to the evaluation and management of more complex paediatric conditions.",
  },
  {
    question: "Does she care for newborn and premature babies?",
    answer:
      "Yes. With additional expertise in Neonatology, she provides care for newborns including premature and high-risk babies, and supports families through the early stages of their child's life.",
  },
  {
    question: "Where does Dr. Ushapriya Sudhakar practise?",
    answer:
      "She is currently practising in Chennai. Full clinic address details will be published here once confirmed.",
  },
  {
    question: "How do I request an appointment?",
    answer:
      "Use the appointment enquiry form on this page. Fill in your child's details and your preferred date and time, and the form opens WhatsApp with your enquiry ready to send, so the details reach the clinic in one message.",
  },
];
