import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  
  // Find the property matching the Name or ID passed in the URL
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  // Loading state while router is not ready
  if (!router.isReady) return null;

  // Error handling if property not found
  if (!property) return (
    <div className="container mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold">Property not found</h1>
        <p className="text-gray-600">Please check the URL or go back home.</p>
    </div>
  );

  return (
    <div>
      <PropertyDetail property={property} />
    </div>
  );
}