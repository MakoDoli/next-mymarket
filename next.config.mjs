/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  images: {
    domains: ["picsum.photos", "xcoqcnkvmsfttacrpyrn.supabase.co"],
  },
};

export default withNextIntl(nextConfig);
