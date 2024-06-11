import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Button, buttonVariants } from "@/components/ui/button"
import { CircleDashed } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
  <>
  <MaxWidthWrapper>
  <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
      SeaShepard digital security through the use of a{' '}
      <span className="text-blue-600">VPN</span>.
    </h1>
    <p className="mt-6 text-lg max-w-prose text-muted-foreground">
      Here are the many reasons why SeaShepard should use a VPN:
    </p>
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <Button>Privacy</Button>
      <Button >Security</Button>
    </div>
    <div className="mt-10 max-w-prose text-lg text-left">
      <h2 className="text-2xl font-bold text-gray-900">Reasons for using a VPN for security:</h2>
      <ul className="mt-4 list-disc list-inside text-muted-foreground">
        <li>Protecting sensitive data from potential hackers or surveillance.</li>
        <li>Securing communications and preventing eavesdropping.</li>
        <li>Shielding against malicious attacks and unauthorized access.</li>
        <li>Preserving anonymity and confidentiality online.</li>
        <li>Ensuring safer browsing, especially on public Wi-Fi networks.</li>
      </ul>
    </div>
    <div className="mt-10 max-w-prose text-lg text-left">
      <h2 className="text-2xl font-bold text-gray-900">Reasons for using a VPN for privacy:</h2>
      <ul className="mt-4 list-disc list-inside text-muted-foreground">
        <li>Preventing ISPs and websites from tracking your online activities.</li>
        <li>Bypassing geo-restrictions and accessing content from anywhere.</li>
        <li>Protecting against targeted advertising and data profiling.</li>
        <li>Enhancing anonymity by masking your IP address.</li>
        <li>Encrypting internet traffic to ensure privacy while browsing.</li>
      </ul>
    </div>
    <div className="mt-10 max-w-prose text-lg text-left">
      <h2 className="text-2xl font-bold text-gray-900">Dangers of not using a VPN for SeaShepard:</h2>
      <ul className="mt-4 list-disc list-inside text-muted-foreground">
        <li>Risk of data breaches leading to exposure of sensitive information.</li>
        <li>Potential targeting by cybercriminals due to lack of encryption.</li>
        <li>Vulnerability to surveillance and monitoring by adversaries.</li>
        <li>Difficulty in maintaining anonymity and confidentiality online.</li>
        <li>Exposure to legal and regulatory risks in certain regions.</li>
      </ul>
    </div>
  </div>
</MaxWidthWrapper>

<section></section>
</>
)
}