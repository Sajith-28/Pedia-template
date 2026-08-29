export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What age groups do you treat?",
    answer:
      "The clinic cares for children from birth through to 18 years — newborns and infants, school-age children, and adolescents. Care is adapted to each stage, so a two-week-old and a sixteen-year-old are approached very differently.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "An appointment is recommended so your child is seen at a predictable time with minimal waiting. Walk-ins are accommodated where the schedule allows, and unwell infants are always prioritised.",
  },
  {
    question: "What should I bring for my child's first visit?",
    answer:
      "Please bring any previous prescriptions, discharge summaries, the immunisation record, and recent test reports if you have them. A short note of your questions is genuinely useful — it makes sure nothing is forgotten during the consultation.",
  },
  {
    question: "Do you provide vaccination guidance?",
    answer:
      "Yes. You will receive a written immunisation schedule tailored to your child's age and history, including which vaccines are routine, which are optional, and how to catch up if a dose has been missed.",
  },
  {
    question: "How long does a consultation take?",
    answer:
      "A first consultation is typically scheduled for 20 to 30 minutes, and follow-up visits for around 15 minutes. Appointments are deliberately spaced so that visits are not rushed.",
  },
  {
    question: "Do you offer follow-up consultations?",
    answer:
      "Yes. Follow-ups are arranged whenever a condition needs monitoring, and you will always leave knowing what to watch for at home and when to return. Brief clarifications after a visit can be handled over the phone during clinic hours.",
  },
];
