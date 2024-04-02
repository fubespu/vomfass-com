// app/somePage/loader.ts
import type { NextRequest } from 'next/server';

// Define a type for your loader's return. This typically matches the shape of props expected by your page component.
interface LoaderProps {
  props: {
    myProp: string; // Example property, adjust according to your actual data needs
    // Add other props as needed
  };
}

// Example loader function, directly typing the function without using a non-existent LoaderFunction type
export const loader = async (req: NextRequest): Promise<LoaderProps> => {
  const { nextUrl } = req;
  const locale = nextUrl.locale || 'en'; // Fallback to 'en' if locale is not specified
  
  // Simulate fetching data based on locale. In practice, you'd fetch real data here.
  const myProp = `Data for locale: ${locale}`;

  return {
    props: {
      myProp, // This would be your fetched data
      // Include other props as needed
    },
  };
};
