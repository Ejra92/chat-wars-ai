import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cardStyles = 'bg-[#1C1C1C] border-gray-800 hover:border-gray-600 transition-all max-w-[400px] w-full md:w-[380px] lg:w-full';

const buttonStyles = 'w-full bg-gray-800 hover:bg-gray-700 cursor-pointer';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center space-y-8">
      <div className="max-w-3xl text-center space-y-4">
        <h1
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Welcome to ChatWars
        </h1>
        <p
          className="text-gray-400 text-lg md:text-xl"
        >
          Step into the Star Wars universe like never before. ChatWars is your interactive gateway to explore characters, planets, and starships through the power of integrated AI — <span className=" font-semibold">ChatWars-AI</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center max-w-[1024px]">
        <Card className={cardStyles}>
          <CardHeader>
            <CardTitle>People Explorer</CardTitle>
            <CardDescription className="text-gray-400">
              Discover iconic heroes, villains, and robots of the galaxy. Dive into their origins and connections through the ChatWars - AI.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/people/page/1">
              <Button variant="secondary" className={buttonStyles}>
                Explore People
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className={cardStyles}>
          <CardHeader>
            <CardTitle>Planets Explorer</CardTitle>
            <CardDescription className="text-gray-400">
              Travel across the stars and uncover the secrets of countless worlds. From desert dunes to cityscapes — the galaxy awaits.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/planets/page/1">
              <Button variant="secondary" className={buttonStyles}>
                Explore Planets
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className={cardStyles}>
          <CardHeader>
            <CardTitle>Starships Explorer</CardTitle>
            <CardDescription className="text-gray-400">
              Enter the hangar and learn about the most legendary ships in the galaxy — from nimble starfighters to massive cruisers.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/starships/page/1">
              <Button variant="secondary" className={buttonStyles}>
                Explore Starships
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
