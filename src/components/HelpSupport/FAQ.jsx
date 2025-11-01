import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "Are all your products authentic?",
      answer:
        "Yes — we guarantee that every product we sell is 100% authentic. All sealed Pokémon items come directly from trusted distributors, and our sports singles and jerseys are carefully sourced.",
    },
    {
      id: 2,
      question: "How do I know what condition my card or product is in?",
      answer:
        "We clearly describe the condition of every item in the product details — whether it’s brand new, factory-sealed, or lightly handled. If you ever want extra photos or info, just reach out to us before you order!",
    },
    {
      id: 3,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major debit and credit cards, PayPal, and [any local options, like bKash]. All payments are processed securely — we never store your card information.",
    },
    {
      id: 4,
      question: "How long does shipping take?",
      answer:
        "Orders are usually processed within 1–2 business days. Shipping times vary by location, but you’ll always get a tracking number to follow your order from our door to yours.",
    },
  ]);

  const handleDelete = (id) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };

  return (
    <div className="p-8 rounded-xl mx-auto font-sans ">
      <h2 className="text-xl font-semibold mb-6">FAQs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
        {faqs.map((faq) => (
          <div key={faq.id} className="space-y-2 relative border-b border-gray-200 pb-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-700">
                  Question no: {faq.id}
                </p>
                <p className="font-semibold">{faq.question}</p>
              </div>
              <button
                onClick={() => handleDelete(faq.id)}
                className="text-red-500 hover:text-red-700 transition"
                title="Delete FAQ"
              >
                <MdDelete className="text-xl text-blue-500"/>
              </button>
            </div>
            <p className="text-gray-700">
              <span className="font-semibold">Answer:</span> <br />
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition">
          + Add FAQ
        </button>
      </div>
    </div>
  );
};

export default FAQ;
