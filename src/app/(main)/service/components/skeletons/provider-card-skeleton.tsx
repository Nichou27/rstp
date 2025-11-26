import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProviderCardSkeleton() {
  return (
    <Card className="h-fit animate-pulse border-none shadow-none md:border md:shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">
          <div className="h-5 bg-gray-200 rounded w-2/3"></div>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full shrink-0"></div>{" "}
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded w-11/12"></div>
          <div className="h-3 bg-gray-200 rounded w-10/12"></div>
        </div>

        <div className="h-px bg-gray-200"></div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="h-3 bg-gray-200 rounded w-1/3"></div>
            <div className="h-3 bg-gray-200 rounded w-1/6"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="h-3 bg-gray-200 rounded w-1/3"></div>
            <div className="h-3 bg-gray-200 rounded w-1/6"></div>
          </div>
        </div>

        <div className="h-10 bg-gray-200 rounded w-full"></div>
      </CardContent>
    </Card>
  );
}
