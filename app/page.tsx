import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <Button asChild variant={"nav_link"} size={"nav_link"}>
        <Link href="#">Google</Link>
      </Button>
    </div>
  );
};

export default Home;
