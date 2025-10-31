import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function CarouselCardSkeleton() {
  return (
    <Card className="grow w-full max-w-lg md:max-w-2xl bg-secondary shadow-md animate-pulse">
      <CardHeader className="px-6 md:px-8">
        <CardTitle>
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-2 flex-1">
              <div className="h-5 w-2/3 bg-muted-foreground/20 rounded" />
              <div className="h-4 w-1/2 bg-muted-foreground/20 rounded" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 bg-muted-foreground/20 rounded-full" />
              <div className="h-4 w-8 bg-muted-foreground/20 rounded" />
            </div>
          </div>
        </CardTitle>
        <CardDescription className="mt-3">
          <div className="h-4 w-full bg-muted-foreground/20 rounded mb-2" />
          <div className="h-4 w-5/6 bg-muted-foreground/20 rounded" />
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 md:px-8">
        <div className="relative aspect-square w-full max-w-sm bg-muted-foreground/20 rounded-lg" />
      </CardContent>
      <CardFooter className="px-6 md:px-8 flex items-center justify-between">
        <div className="h-4 w-20 bg-muted-foreground/20 rounded" />
        <div className="h-5 w-16 bg-muted-foreground/20 rounded" />
      </CardFooter>
    </Card>
  );
}
