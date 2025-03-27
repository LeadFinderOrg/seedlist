export const protocols = [
  {
    name: "SPF",
    status: "PASS",
    description:
      "SPF (Sender Policy Framework): Validates that incoming mail from a domain comes from an IP address authorized by that domain’s administrators",
  },
  {
    name: "DMARC",
    status: "PASS",
    description:
      "DMARC (Domain-based Message Authentication, Reporting, and Conformance): Builds on SPF and DKIM to specify how receivers should handle emails that fail authentication checks, and provides reports on email delivery status",
  },
  {
    name: "DKIM",
    status: "PASS",
    description:
      "DKIM (DomainKeys Identified Mail) is an email authentication method designed to detect forged sender addresses in emails.",
  },
  {
    name: "MX",
    status: "PASS",
    description:
      "MX (Mail Exchange) records are a type of DNS (Domain Name System) record used to specify the mail servers responsible for receiving email on behalf of a domain.",
  },
];
