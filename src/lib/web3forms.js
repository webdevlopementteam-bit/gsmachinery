// Every enquiry (contact form + popup form) is sent to BOTH Web3Forms keys,
// so the same response reaches both inboxes.
const WEB3FORMS_KEYS = [
  "87e14072-680c-446a-a0d4-c87684ea943a",
  "77cdb432-0834-44ff-8f26-a1532d514ef3",
];

export async function submitEnquiry(fields, source) {
  const payload = {
    subject: `New Enquiry from ${source} - GS Machinery`,
    from_name: "GS Machinery Website",
    form_source: source,
    page_url: typeof window !== "undefined" ? window.location.href : "",
    ...fields,
  };

  const results = await Promise.allSettled(
    WEB3FORMS_KEYS.map((access_key) =>
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ access_key, ...payload }),
      }).then((res) => res.json())
    )
  );

  // Treat as success if at least one inbox received it.
  return results.some((r) => r.status === "fulfilled" && r.value?.success);
}

export const OPEN_ENQUIRY_EVENT = "open-enquiry-popup";

export function openEnquiryPopup() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_ENQUIRY_EVENT));
  }
}
